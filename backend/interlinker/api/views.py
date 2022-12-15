from json.encoder import JSONEncoder
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response  import Response
from rest_framework.views import APIView
from rest_framework import authentication, permissions



from interlinker.models import ReportIssue,Feedback
from .serializer import IssueSerializer,FeedbackSerializer

import json

@api_view(['POST'])
def reportIssue(request):
    report = ReportIssue.objects.all()

    issue = request.data['issue']
    email = request.data['email']

    report.create(issue=issue,email=email)

    return Response("Issue Reported Successfully")

@api_view(['POST'])
def feedBack(request):
   if (request.method == "POST"):
       feedobj = Feedback.objects.all()
       feedback = request.data['feedback']
       email = request.data['email']
       feedobj.create(feedback=feedback,email=email)
       return Response("Feedback Received Successfully")
    
   if (request.method == "GET"):
       return Response("Not Allowed")


class getReports(APIView):
    permission_classes = [permissions.IsAdminUser]
    authentication_classes = [authentication.TokenAuthentication]
    def get(self,request,format=None):
        reports = ReportIssue.objects.all()
        serializer_issue = IssueSerializer(reports,many=True)
        return Response(serializer_issue.data)
   


class getFeedbacks(APIView):
    permission_classes = [permissions.IsAdminUser]
    authentication_classes = [authentication.TokenAuthentication]
    def get(self,request,format=None):
        feedbacks = Feedback.objects.all()
        serializer_feedback = FeedbackSerializer(feedbacks,many=True)
        return Response(serializer_feedback.data)


 



