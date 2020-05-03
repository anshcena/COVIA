![Hits](https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fgithub.com%2FRoboMx%2FCOVIA)

<p align="center">
    <img src="frontend_ionic/src/assets/icon/icon.png" width="200px" height="200px"/>
</p>

# `COVIA`
COVID-19 information platform containing data curated from trusted sources. Take risk assessment test anonymously. Social Barometer is provided which shows bird's-eye view of the responses.

## Live server
https://covia.robomx.tech

## Data Source
* [WHO](https://who.int) - World Health Organization.
* [MOHFW](https://www.mohfw.gov.in/) - Ministry of Health and Family Welfare (India).
* [MyGov](https://www.mygov.in/) - MyGov is a citizen engagement platform.

## External Source
* [Preflet Risk Assessment Tool](https://covid.preflet.com/en/test) - Risk Assessment Tool
* [Social Barometer](https://covid.preflet.com/en/report) - Social Barometer

## How to contribute?
* Fork the repository and create pull requests.
* For backend:
    * `cd backend_django`
    * Create a `credentials.py` file containing following info:
        ```
        SECRET_KEY = 'XXxxxXXXXx'
        ALLOWED_HOSTS = ['*']
        HOST = 'XXXxXXXX'
        DB_PASS = 'xxXxXxxXX'
        DB_USER = 'XXxxXX'
        ```
    * Install dependencies:  
    `pip3 install -r requirements.txt`.
    * Run migrations (optional):  
    `python3 manage.py makemigrations && python3 manage.py migrate`
    * Run server:   
    `python3 manage.py runserver`.

* For frontend:
    * `cd frontend_ionic`.
    * Install dependencies: `npm install`.
    * Start ionic server: `ionic serve`.
    * For Android:  
    `ionic cordova run android`

## Tech Stack
* Django 2.2
* Ionic 4.11
* Angular 8.2
* MongoDB 4.2
