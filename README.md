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

# Running React App
First clone the repository from Github and switch branch to "dashboard" and then move to the project directory:

    $ git clone https://github.com/shivchauhan332/fampay_extern_assignment/
    $ git checkout dashboard
    $ cd ./youtube_api_dashboard

Then install node package dependencies, and then start the server, make sure API is also running at the same time

    $ npm i
    $ npm start
 
Go to http://localhost:3000 on your browser

# Features and Screenshots

### API
API makes use of django rest framework, and returns the data in JSON format.
The results are paginated, with default page length of 12.
![Default Home View](Screenshots/simpleRestApi.jpg?raw=true "Title")

The API supports sorting and searching, which can be done by added query params in the url (for eg. http://localhost:8000/api/get-videos?ordering=title_name will return results sorted by title name). The additional info about endpoints is easily obtained by going to the url "http://localhost:8000/api/get-videos?" itself.
![Default Home View](Screenshots/filterAndSort.jpg?raw=true "Title")


### React App
The react app makes use of this API to build a user friendly dashboard which displays the data in a nicely-formatted way.
Homepage:
The home pages fetches data from localhost:8000 and displays it in paginated form
![Default Home View](Screenshots/reactApp.jpg?raw=true "Title")

Searching:
Search can be invoked by clicking on the magnified glass button.
![Default Home View](Screenshots/reactAppSearch.jpg?raw=true "Title")

Sorting:
Sorting can be done by clicking on the buttons provided in the header.
![Default Home View](Screenshots/reactAppSort.jpg?raw=true "Title")
    

