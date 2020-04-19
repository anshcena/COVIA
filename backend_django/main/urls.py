from django.urls import path
from django.contrib import admin
from main import views

urlpatterns = [
    path('', views.home),
    path('myths', views.fetch_myths_who),
    path('india_data', views.live_india_data),
    path('awareness', views.awareness_link_data),
    path('self_check', views.self_check),
    path('map', views.map)
]
