from rest_framework import serializers

from interlinker.models import ReportIssue,Feedback

class IssueSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReportIssue
        fields = ('__all__')

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = ('__all__')