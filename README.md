# Description

This is a smiple project to pass entry test. It provides simpe version of google forms.

Description can be found at https://docs.google.com/document/d/1thnUjX5iTPWBwWXx0y-7rEN5Yw9glGC6U5_OIVL0MiM/edit?usp=sharing

Related projects: https://github.com/Alstrasz/forms-editor-angular

# Used technologies

- Postgres used as database

- NestJS used as backend framework

# How to run

## With docker compose

For dev

From project's root folder:

- ```docker-compose up``` (can take a long time first time due to downloading of images and libraries)

Client will be available at http://127.0.0.1:3000

Postgres at 127.0.0.1:5432

For prod docker-compose file should be modified

## With node

Requiers postgres to be launched, setting passed as env variables. See ./docker-compose.yml as example

For pord

From project's root folder:
- ```npm i```
- ```npm run build```
- ```npm start```

For dev

From project's root folder:
- ```npm i```
- ```npm run start:dev```

# Endpoints

There are five endpoints - they are pretty self explanetory

| REST API         | JSON RPC METHOD     | Description |
|--------------|-----------|------------|
| GET /responses/:id | responses.get_by_id | Get all responses for form with specified id |
| POST /responses | responses | Create new response for specifed form |
| GET /forms/:id | forms.get_by_id | Get form description by id |
| GET /forms | forms.short | Get list of short descriptions of all forms |
| POST /forms | forms | Create new form |

Dtos for working with these endpoints can be found in code
