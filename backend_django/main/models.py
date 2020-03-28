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
    class Meta:
        unique_together = ('link', 'title')


class SelfCheckUpModel(models.Model):
    zip_lat = models.FloatField(default=0.0)
    zip_lon = models.FloatField(default=0.0)
    request = models.TextField()
    ip = models.GenericIPAddressField()
    timestamp = models.DateTimeField(default=timezone.now)
    score = models.FloatField(default=0.0)
    result = models.CharField(max_length=10)
    response = models.TextField()
    zip_code = models.CharField(max_length=6)
    age = models.IntegerField(default=0)
    class Meta:
        unique_together = ('ip', 'age')
