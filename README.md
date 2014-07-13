CDTO-09  
Natalie Morcos  
11 jul 2014

Requirements
============

  + Node.js
  + Python (for SimpleHttpServer)
  + Express 
  + Primus.io
  + ws
  + cors

Usage
=====

Install Dependencies:

    $ npm install

Start Server and "Noise Maker" Client from root:

    $ npm start

Start "Soundboard" client:

    $ cd student_distro && python -m SimpleHTTPServer


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

 :    The main server logic

`primus_init.js`

 :     Dealing with socket communications

