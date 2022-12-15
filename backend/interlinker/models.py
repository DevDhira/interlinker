from django.db import models

# Create your models here.
class ReportIssue(models.Model):
    issue = models.TextField()
    email = models.EmailField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.issue +" "+self.email


class Feedback(models.Model):
    feedback = models.TextField()
    email = models.EmailField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.feedback +" "+self.email
