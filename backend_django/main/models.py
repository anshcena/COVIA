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


class IndiaMetaModel(models.Model):
    meta = models.TextField(unique=True)
    timestamp = models.DateTimeField(default=timezone.now)


class AwarenessDataModel(models.Model):
    link = models.URLField()
    title = models.CharField(max_length=300)
    lang = models.CharField(max_length=10)
    timestamp = models.DateTimeField(default=timezone.now)


class SelfCheckUpModel(models.Model):
    lat = models.FloatField(default=0.0)
    lon = models.FloatField(default=0.0)
    request = models.TextField()
    ip = models.GenericIPAddressField()
    timestamp = models.DateTimeField(default=timezone.now)
    score = models.FloatField(default=0.0)
    result = models.IntegerField()
    response = models.TextField()

