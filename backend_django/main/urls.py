from django.conf.urls import url, include
from django.contrib import admin
from main import views

urlpatterns = [
    path('', views.home),
]
