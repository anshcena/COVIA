from django.db import models
from django.utils import timezone


class IndiaCasesTableModel(models.Model):
    table = models.TextField(unique=True)
    timestamp = models.DateTimeField(default=timezone.now)


class MythsWHOModel(models.Model):
    title = models.CharField(max_length=5000)
    src = models.CharField(max_length=500)
    timestamp = models.DateTimeField(default=timezone.now)
    class Meta:
        unique_together = ('title', 'src')
