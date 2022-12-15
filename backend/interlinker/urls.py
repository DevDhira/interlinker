from django.urls import path
from .views import getContent
from .api.views import reportIssue,feedBack,getReports,getFeedbacks

urlpatterns = [
    path('', getContent, name='getContent'),
    path('api/reportissue/',reportIssue,name="reportissue"),
    path('api/feedback/',feedBack,name="feedback"),
    path('api/admin/feedbacks',getFeedbacks.as_view(),name="getFeedbacks"),
    path('api/admin/reports',getReports.as_view(),name="getReports")

]
