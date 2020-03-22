import requests 
from bs4 import BeautifulSoup
from cache_memoize import cache_memoize
from .models import IndiaCasesTableModel, MythsWHOModel, IndiaMetaModel, AwarenessDataModel


async def save_in_db(model, data):
    try:
        obj = model(**data)
        obj.save()
    except Exception as e:
        pass


@cache_memoize(300)
def get_table_india(link):
    URL = link
    r = requests.get(URL)
    soup = BeautifulSoup(r.content, 'html5lib')
    table = soup.find('div', attrs = {'class':'content newtab'})
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
        if len(head) != len(row):
            output_rows.remove(row)

    head = [head]
    head.append(output_rows)

    # save data in db
    save_in_db(IndiaCasesTableModel,{'table': head})
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
    for table_ro in table.findAll('div', attrs = {'class': 'list-view--item highlight-widget--content matching-height--item'}):
        data['src'].append(table_ro.a['href'])
    for t, s in zip(data['title'], data['src']):
        save_in_db(MythsWHOModel, {'title': t, 'src': s})
    return data



@cache_memoize(300)
def get_india_meta_data(link):
    data = {'meta':[]}
    URL = link
    r = requests.get(URL) 

    soup = BeautifulSoup(r.content, 'html5lib') 
    table = soup.find('div', attrs = {'class':'information_row'})
    for table_row in table.findAll('div', attrs = {'class':'iblock'}):
        data['meta'].append({
           'count': table_row.div.span.text,
            'text':     table_row.div.div.text,
            'src': 'https://www.mohfw.gov.in/' + str(table_row.img.src)
        })
      
    
    # save data in db
    save_in_db(IndiaMetaModel,{'meta': data})
    return data

@cache_memoize(300)
def get_awarness_links(link):
    URL = link
    r = requests.get(URL) 

    soup = BeautifulSoup(r.content, 'html5lib') 

    data=[] # a list to store quotes 

    table = soup.find('tbody', attrs = {'class':''})
    for table_row in table.findAll('tr'):
        data.append({
            'src': table_row.a['href'],
            'title': table_row.a.text
        })

    #print(data)

    hinEngData = {'hindi':[], 'english':[]} 
        
    for strin in data:
        if 'Hin' in strin['title']:
            hinEngData['hindi'].append(strin)
        else:
           hinEngData['english'].append(strin)
      
    # save data in db
    for d in data:
        save_in_db(AwarenessDataModel,{'link': d['title'], 'src': d['src'], 'lang': 'hin' if d in hinEngData else 'eng'})
    return hinEngData
     
