## Assignment: 
The goal is to build a responsive web app using react/redux, node and graphql [if new to graphql then don’t use it] that makes an http call to any feed provider [twitter, linkedIn, bureau of labor statistics, anything for that matter] to pull the data and displays it on 2 breakpoints [desktop and mobile]. This application should be packaged to deploy with 1click using node. Feel free to get creative, if you want to use any ORM and store data in database - go for it BUT not a must have. Please organize your code structure, so it’s easier to follow through and configurable to make needed changes along the path of deployment in real life.

## Description:
This application uses the Audio DB API to fetch information about the 50 most popular tracks of the time. The tracks are displayed on the page in a responsive layout.  This application allows users to view the 50 tracks, as well as view more information once hovering over each track (artist, album, and track name).

## API 
* AudioDB: https://www.theaudiodb.com/api_guide.php

## Screenshot: 
![App screenshot](./app.png)


## Tech Stack:
* React Redux
* Sass
* Thunk middleware

## Setup Instructions

* Clone the repository 
```$ git clone https://github.com/colev1/tune-tracker```
* `$ cd tune-tracker`
* Install dependencies `npm install`
* Run `npm start`
* Open browser on http://localhost:3000/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
