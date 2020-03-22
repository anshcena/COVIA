# COVIA 2020

COVID-19 information platform containing data curated from trusted sources.


## Data Source
* [WHO](https://who.int) - World Health Organization.
* [MOHFW](https://www.mohfw.gov.in/) - Ministry of Health and Family Welfare (India).

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


