# Fampay Extern Assignment

This project consists of a simple rest api made using django-rest-framework
and a react app that consumes this api to form a dashboard.

# Running the API

First clone the repository from Github and switch to the project directory, make sure the branch is set to main:

    $ git clone https://github.com/shivchauhan332/fampay_extern_assignment/
    $ cd ./videoAPI

Install Virtual Environment for For django, if not present:

    $ pip install virtualenv
    
Activate virtual environment:

    $ ./env/scripts/activate

Start the development server:
   
    $ python manage.py runserver --noreload
 
### OR
After cloning and changing directory, run:
    
    $ pip install -r requirements.txt
    $ python -m manage.py makemigrations
    $ python -m manage.py migrate
Then start the development server:

    $ python -m manage.py runserver --noreload

### For testing the API
Go to http://localhost:8000/api/get-videos on your browser
![Default Home View](Screenshots/simpleRestApi.jpg?raw=true "Title")

![Default Home View](Screenshots/filterAndSort.jpg?raw=true "Title")

# Running React App
First clone the repository from Github and switch branch to "dashboard" and then move to the project directory:

    $ git clone https://github.com/shivchauhan332/fampay_extern_assignment/
    $ git checkout dashboard
    $ cd ./youtube_api_dashboard

Then install node package dependencies, and then start the server, make sure API is also running at the same time

    $ npm i
    $ npm start
 
 Go to http://localhost:3000/api/get-videos on your browser
 
![Default Home View](Screenshots/reactApp.jpg?raw=true "Title")

![Default Home View](Screenshots/reactAppSearch.jpg?raw=true "Title")

![Default Home View](Screenshots/reactAppSort.jpg?raw=true "Title")
    

