from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from main.utils import get_who_myths, get_table_india, get_india_meta_data, get_awareness_links, get_client_ip, get_coordinates_from_zipcode
import json
from main.models import SelfCheckUpModel
from django.views.decorators.csrf import csrf_exempt


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
        data['meta'] = get_india_meta_data("https://www.mohfw.gov.in/")
        return JsonResponse({
            "status": True,
            "data": data
        })
    except Exception as e:
        print(str(e))
        return JsonResponse({
            "status": False
        })


@csrf_exempt
def awareness_link_data(request):
    try:
        data = {}
        data['links'] = get_awareness_links("https://www.mohfw.gov.in/")
        return JsonResponse({
            "status": True,
            "data": data
        })
    except Exception as e:
        print(str(e))
        return JsonResponse({
            "status": False
        })


@csrf_exempt
def self_check(request):
    if request.method == 'POST':
        data = {}
        data['zip_code'] = request.POST['zip_code']
        data['zip_lat'], data['zip_lon'] = get_coordinates_from_zipcode(data['zip_code'])
        data['ip'] = get_client_ip(request)
        data['request'] = request.META.get('HTTP_USER_AGENT','')
        data['score'] = request.POST['score']
        data['result'] = request.POST['result']
        data['response'] = request.POST['response']
        
        print(data)
        try:
            obj = SelfCheckUpModel.objects.get(ip=data['ip'])
            obj.result = data['result']
            obj.score = data['score']
            obj.response = data['response']
            obj.save()
            return JsonResponse({
                "status": True,
                "message": "updated"
            })
        except SelfCheckUpModel.DoesNotExist:
            obj = SelfCheckUpModel.objects.create(**data)
            return JsonResponse({
                "status": True,
                "message": "added"
            })
    return JsonResponse({
        "status": False
    })