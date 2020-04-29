### Setup:
```
cd backend/todo
python -m venv venv
```

#### Activate Virtual Environment:
    OS X / Linux: source venv/bin/activate
    WIN: venv/Scripts/activate.bat

#### Install Dependencies and setup Django:
```
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

#### Run: `python manage.py runserver`