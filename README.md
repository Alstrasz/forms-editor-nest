# Description

This is a smiple project to pass entry test. It provides simpe version of google forms.

Description can be found at https://docs.google.com/document/d/1thnUjX5iTPWBwWXx0y-7rEN5Yw9glGC6U5_OIVL0MiM/edit?usp=sharing

Related projects: https://github.com/Alstrasz/forms-editor-angular

# Used technologies

- Postgres used as database

- NestJS used as backend framework

# How to run

## With docker compose

From project's root folder:

- ```docker-compose up``` (can take a long time first time due to downloading of images and libraries)

Client will be available at http://127.0.0.1:3000

Postgres at 127.0.0.1:5432

## With node

Requiers postgres to be launched, setting passed as env variables. See ./docker-compose.yml as example

From root
- ```npm i```
- ```npm start```
