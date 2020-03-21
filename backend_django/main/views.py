from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import requests 
from bs4 import BeautifulSoup 

def home(request):
    return HttpResponse("COVIA working fine!")


def fetch_myths_who(request):
    data = {'title':[], 'src': []}
    URL = "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html5lib')
    table = soup.find('div', attrs = {'id':'PageContent_C003_Col01', 'class': 'sf_colsIn col-md-10'})
    for row in table.findAll('h2'):
        data['title'].append(row.text)
    for table_ro in table.findAll('div', attrs = {'class': 'list-view--item highlight-widget--content matching-height--item'}):
        data['src'].append(table_ro.a['href'])
    return JsonResponse({
        "status": True,
        "data": data
    })  