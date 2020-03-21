from django.urls import include, path
from django.contrib import admin
from main import views

urlpatterns = [
    path('', views.home),
    path('myths', views.fetch_myths_who)
]
