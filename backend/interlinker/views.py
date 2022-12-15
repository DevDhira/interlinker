
from django.http import response
from django.http.response import HttpResponseBadRequest
from django.shortcuts import render



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


import requests
import json
import textdistance
from .wp_checker import url_check
from .models import ReportIssue,Feedback


# Create your views here.
def checkStopWords(word):
        stopwords = ['a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and', 'any', 'are', "aren't", 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below', 'between', 'both', 'but', 'by', "can't", 'cannot', 'could', "couldn't", 'did', "didn't", 'do', 'does', "doesn't", 'doing', "don't", 'down', 'during', 'each', 'few', 'for', 'from', 'further', 'had', "hadn't", 'has', "hasn't", 'have', "haven't", 'having', 'he', "he'd", "he'll", "he's", 'her', 'here', "here's", 'hers', 'herself', 'him', 'himself', 'his', 'how', "how's", 'i', "i'd", "i'll", "i'm", "i've", 'if', 'in', 'into', 'is', "isn't", 'it', "it's", 'its', 'itself', "let's", 'me', 'more', 'most', "mustn't", 'my', 'myself', 'no', 'nor', 'not', 'of', 'off', 'on', 'once', 'only', 'or', 'other', 'ought', 'our', 'oursourselves', 'out', 'over', 'own', 'same', "shan't", 'she', "she'd", "she'll", "she's", 'should', "shouldn't", 'so', 'some', 'such', 'than', 'that', "that's", 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there', "there's", 'these', 'they', "they'd", "they'll", "they're", "they've", 'this', 'those', 'through', 'to', 'too', 'under', 'until', 'up', 'very', 'was', "wasn't", 'we', "we'd", "we'll", "we're", "we've", 'were', "weren't", 'what', "what's", 'when', "when's", 'where', "where's", 'which', 'while', 'who', "who's", 'whom', 'why', "why's", 'with', "won't", 'would', "wouldn't", 'you', "you'd", "you'll", "you're", "you've", 'your', 'yours', 'yourself', 'yourselves']

        for stopword in stopwords:
            if word == stopword:
                return True
            else:
                pass


def checkKeyword(keyword,word_list):
    count = 0


    for word in word_list: 
        if textdistance.hamming.similarity(keyword, word) > 5:
            #print(keyword ,str( textdistance.hamming.similarity(keyword, word)))
            count = count + 1
    
    if count > 0:
        return True
    else:
        return False
   

def listToString(s): 
    
    # initialize an empty string
    str1 = " " 
    
    # return string  
    return (str1.join(s))
        
        
# Driver code    
def coreWork(keywords,content_json):

    post_cors = []

    for post in content_json:
             
        for keyword in keywords:
            word_list = post['title']['rendered'].split(' ')                                      
            if checkKeyword(keyword.capitalize(),word_list):                
                post_cors.append({'keyword':keyword,'link':post['link'],'post_title':post['title']['rendered'] })                
            else:
                pass

    print( "\nMatching Post Count from site :" + str(len(post_cors)))  

    for post in post_cors:
        print (" Keywords Mathing : " + str(post['post_title']))      
    
    return post_cors

def addLinks(keyword_dict,post_content):
    post_content_list = post_content.split(' ')

    for post in keyword_dict:
        for word in post_content_list:
            if textdistance.hamming.similarity(post['keyword'], word) > 5:
                #print(post_content_list[post_content_list.index(word)]) 

                post_content_list[post_content_list.index(word)] = "<a href='"+post['link']+"'>"+word+"</a>"+" "

                # keyword_dict.pop(keyword_dict.index(post))
                # print("Current Length of Dictionary: " +str( len(keyword_dict)))
                #post_content_list[post_content_list.index(word)].replace(str(word),"<a href='"+post['link']+"'>"+word+"</a>")
                
                #print(post_content_list[post_content_list.index(word)]) 
                break
            else: 
                continue
    

    return post_content_list 


@api_view(['GET','POST'])
def getContent(request):
    website = request.data['website']
    print("The result is :",url_check(website))
    if url_check(website):
        pass
    else:
        print("not wordpress")
        return Response("Not a Wordpress Website" ,status = status.HTTP_202_ACCEPTED)


    keywords = request.data['keywords'].split(',')
    post_content = request.data['post_content']
    content_json = requests.get('http://'+str(website) +'/wp-json/wp/v2/posts/?per_page=100')
    #print(len (content_json.json()) )
    f = open('output.txt','w')
    f.write(str(post_content))
    f.close()

    keyword_dict = coreWork(keywords,content_json.json())  #up to this working

    post_content_list = addLinks(keyword_dict,post_content)

    converted_content_lev1 = listToString(post_content_list).replace('\n','').encode("utf-8")

    return Response(converted_content_lev1)








