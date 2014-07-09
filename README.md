CDTO-09  
Natalie Morcos  
11 jul 2014

Requirements
============

  + Node.js
  + Express 

Usage
=====

Install Dependencies:

    $ npm install

Start Server:

    $ npm start


RESTful API
===========

`GET /assigments`  
:  Get a unique pool number/ rank number pairing  
`{ "pool": ":pid", "rank" : ":rid" }`


Project Structure
=================

`app.js`

 :    Express based HTTP server / router

`functions.js`

 :    The main server logic for the REST API 

