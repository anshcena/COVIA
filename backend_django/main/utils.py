import requests 
from bs4 import BeautifulSoup 

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

    return head


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
    return data