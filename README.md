# Fampay Extern Assignment

This project consists of a simple rest api made using django-rest-framework
and a react app that consumes this api to form a dashboard.

# Installation

### Running the API

First clone the repository from Github and switch to the new directory, make sure the branch is set to main:

    $ git clone git@github.com/USERNAME/{{ project_name }}.git
    $ cd {{ project_name }}

Install Virtual Environment for For django, if not present:

    $ pip install virtualenv
    
Activate virtual environment:

    $ ./env/scripts/activate

Start the development server:
   
    $ python manage.py runserver
 
### OR
After cloning and changing directory, run:
    
    $ pip install -r requirements.txt
    $ python -m manage.py makemigrations
    $ python -m manage.py migrate
Then start the development server:

    $ python -m manage.py runserver

# For testing the API
Go to http://localhost:8000/api/get-videos on your browser
![Default Home View](Screenshots/simpleRestApi.jpg?raw=true "Title")

![Default Home View](Screenshots/filterAndSort.jpg?raw=true "Title")


