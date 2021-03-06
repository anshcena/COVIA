import requests 
from bs4 import BeautifulSoup
from cache_memoize import cache_memoize
from .models import IndiaCasesTableModel, MythsWHOModel, IndiaMetaModel, AwarenessDataModel
import requests
import asyncio


async def save_in_db(model, data):
    try:
        obj = model(**data)
        obj.save()
    except Exception as e:
        print(str(e))


@cache_memoize(300)
def get_table_india(link):
    URL = link
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html5lib')
    table = soup.find('table', attrs = {'class':'table table-striped'})
    output_rows = []
    for table_row in table.findAll('tr'):
        columns = table_row.findAll('th')
        output_row = []
        for column in columns:
            output_row.append(column.text)
        output_rows.append(output_row)

    head = output_rows[0]

    output_rows = []
    for table_row in table.findAll('tr'):
        columns = table_row.findAll('td')
        output_row = []
        for column in columns:
            output_row.append(column.text)
        output_rows.append(output_row)
    
    for row in output_rows:
        if len(row) < 2:
            output_rows.remove(row)
        if len(row) == 4:
            output_rows[output_rows.index(row)] = [''] + row 

    head = [head]
    head.append(output_rows)

    # save data in db
    loop = asyncio.new_event_loop()
    result = loop.run_until_complete(save_in_db(IndiaCasesTableModel,{'table': head}))
    return head


@cache_memoize(300)
def get_who_myths(link):
    data = {'title':[], 'src': []}
    URL = link
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html5lib')
    table = soup.find('div', attrs = {'id':'PageContent_C003_Col01', 'class': 'sf_colsIn col-md-10'})
    for row in table.findAll('h2'):
        if len(row.text) > 0:
            data['title'].append(row.text)
    for table_ro in table.findAll('img'):
        print(table_ro)
        data['src'].append('https://www.who.int' + table_ro['data-src'])
    for t, s in zip(data['title'], data['src']):
        loop = asyncio.new_event_loop()
        result = loop.run_until_complete(save_in_db(MythsWHOModel, {'title': t, 'src': s}))
    return data



@cache_memoize(300)
def get_india_meta_data(link):
    data = []
    URL = link
    r = requests.get(URL) 
    soup = BeautifulSoup(r.content, 'html5lib') 

    table = soup.find('div', attrs = {'class':'site-stats-count'})
    # print(table)

    for table_row in table.findAll('li'):
        # print(table_row.strong.text)
        if table_row.find('strong'):
            data.append({
                    'count': table_row.strong.text,
                    'text': table_row.span.text,
                    'src': 'https://www.mohfw.gov.in/' + str(table_row.img['src'])
                })

    # save data in db
    loop = asyncio.new_event_loop()
    result = loop.run_until_complete(save_in_db(IndiaMetaModel,{'meta': data}))
    return data

@cache_memoize(300)
def get_awareness_links(link):
    URL = link
    r = requests.get(URL) 

    soup = BeautifulSoup(r.content, 'html5lib') 

    data=[] # a list to store quotes 

    table = soup.find('div', attrs = {'class':'isotope clearfix'})
    # print(table)
    for table_row in table.findAll('div', attrs = {'class':'content-box'}):
        # print(table_row.figure.a.img['alt'])
        data.append({
            'src': 'https://www.mohfw.gov.in/' + table_row.figure.a.img['src'],
            'title': str(table_row.figure.a.img['alt'])
        })

    hinEngData = {'hindi':[], 'english':[]} 
        
    for strin in data:
        if 'Hin' in strin['title']:
            hinEngData['hindi'].append(strin)
        else:
           hinEngData['english'].append(strin)
      
    # save data in db
    for d in data:
        loop = asyncio.new_event_loop()
        result = loop.run_until_complete(save_in_db(AwarenessDataModel,{'title': d['title'], 'link': d['src'], 'lang': 'hin' if d in hinEngData['hindi'] else 'eng'}))
    return hinEngData
     


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def get_coordinates_from_zipcode(code):
    lat, lon = None, None
    add_list = ['Name', 'Circle', 'District', 'State', 'Country']
    count = 0
    # check if address if of
    while lat is None:
        try:
            r = requests.get('http://www.postalpincode.in/api/pincode/' + str(code))
            print(r.json())
            r = r.json()
            # check if r is None
            if r['PostOffice'] is not None:
                r = r['PostOffice'][0]
                address = ", ".join([r[add_list[param]] for param in range(count, len(add_list))])
                lat, lon, _ = get_coordinates(address)
                count = count + 1
            else:
                # fetch coordinates from google map
                lat, lon, address = get_coordinates(code)
                if not address.lower().__contains__('india'):
                    lat, lon = 0, 0            
            count = count + 1
        except Exception as e:
            print(str(e))
            return 0, 0
    return lat, lon


def get_coordinates(text):
    from geopy.geocoders import Nominatim
    geolocator = Nominatim(user_agent="covia")
    location = geolocator.geocode(str(text))
    print(location)
    if location is None:
        return None, None, None
    return location.latitude, location.longitude, location.address
