import urllib.request
import sys
#from pyfiglet import figlet_format

wp_domains = []
header = "'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A'"
def wp_check(url):
    url_wpl = url + "/wp-login.php"
    url_wpac = url + "/wp-content/"
    url_wpad = url + "/wp-admin/"
    url_wpc = url + "/wp-cron.php"
    url_wpx = url + "/xmlrpc.php"
    url_wpa = url + "/wp-json/wp/v2/"
    url_wpact = url + "/wp-content/themes/"

    req_wpl = urllib.request.Request(url_wpl, headers={'User-Agent': header})
    req_wpac = urllib.request.Request(url_wpac, headers={'User-Agent': header})
    req_wpact = urllib.request.Request(url_wpact, headers={'User-Agent': header})
    req_wpacp = urllib.request.Request(url_wpact, headers={'User-Agent': header})
    req_wpad = urllib.request.Request(url_wpad, headers={'User-Agent': header})
    req_wpc = urllib.request.Request(url_wpc, headers={'User-Agent': header})
    req_wpx = urllib.request.Request(url_wpx, headers={'User-Agent': header})
    req_wpa = urllib.request.Request(url_wpa, headers={'User-Agent': header})

    print("Please wait.../")
    try:
        if urllib.request.urlopen(req_wpa):
            print("\nGood news, " + str(url) + " is using WordPress!\n")
            return True
    except urllib.error.HTTPError:
        try:
            if urllib.request.urlopen(req_wpl):
                print("\nGood news, " + str(url) + " is using WordPress!\n")
                return True
        except urllib.error.HTTPError:
            try:
                if urllib.request.urlopen(req_wpac):
                    print("\nGood news, " + str(url) + " is using WordPress!\n")
                    return True
            except urllib.error.HTTPError:
                try:
                    if urllib.request.urlopen(req_wpact):
                        print("\nGood news, " + str(url) + " is using WordPress!\n")
                        return True
                except urllib.error.HTTPError:
                    try:
                        if urllib.request.urlopen(req_wpacp):
                            print("\nGood news, " + str(url) + " is using WordPress!\n")
                            return True
                    except urllib.error.HTTPError:
                        try:
                            if urllib.request.urlopen(req_wpad):
                                print("\nGood news, " + str(url) + " is using WordPress!\n")
                                return True
                        except urllib.error.HTTPError:
                            try:
                                if urllib.request.urlopen(req_wpc):
                                    print("\nGood news, " + str(url) + " is using WordPress!\n")
                                    return True
                            except urllib.error.HTTPError:
                                try:
                                    if urllib.request.urlopen(req_wpx):
                                        print("\nGood news, " + str(url) + " is using WordPress!\n")
                                        return True
                                except urllib.error.HTTPError:
                                    print("\n" + str(url) + " may not be using WordPress.\n")
                                    return False


def url_check(url):
    print("Checking: " + str(url))
    try:
        if url[:4] != "http":
            print("[!] No protocol specified.")
            url = "http://" + url
            print("[+] Going with HTTP.\n")
            print("Checking: " + str(url))
        req = urllib.request.Request(url, headers={'User-Agent': header})
        u = urllib.request.urlopen(req)
        if url != u.geturl():
            print("[!] " + url + " redirected to "+u.geturl())
            url = u.geturl()
            print("Checking: " + str(url))
            print("The Status is :"+ str(wp_check(url)))
        return wp_check(url)
    except urllib.error.HTTPError as e:
        if e.code == 403:
            print("Got 403! Website seems to be behind a WAF.")
    except urllib.error.URLError:
        if url[:5] == "https":
            print("[!] Couldn't connect over HTTPS.")
            print("[+] Trying with HTTP.\n")
            url = "http://" + url[8:]
            print("Checking: " + str(url))
            try:
                url_check(url)
            except urllib.error.URLError:
                print("Couldn't open url, please make sure to type a valid and publicly accessible url.\n")
        else:
            print("Couldn't open url, please make sure to type a valid and publicly accessible url.\n")
    except ValueError:
        print("Invalid url! Please type in correct url.\n")