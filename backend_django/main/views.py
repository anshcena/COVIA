from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from main.utils import get_who_myths, get_table_india


def home(request):
    return HttpResponse("COVIA working fine!")


def fetch_myths_who(request):
    try:
        data = get_who_myths("https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters")
        print(data)
        return JsonResponse({
            "status": True,
            "data": data    
        }) 
    except Exception as e:
        print(str(e))
        return JsonResponse({
            "status": False
        })


def live_india_data(request):
    try:
        data = {}
        data['table'] = get_table_india("https://www.mohfw.gov.in/")
        return JsonResponse({
            "status": True,
            "data": data
        })
    except Exception as e:
        print(str(e))
        return JsonResponse({
            "status": False
        })
