% CDTO-09
% Natalie Morcos
% 11 jul 2014

Requirements
============

  + Node.js
  + Express 

Usage
=====

Install Dependencies (Optional):

    $ npm install

Start Server:

    $ npm start


RESTful API
===========

`GET /assigments`
 :    Get a unique pool number/ rank number pairing (:pid, :rid)

`GET /instruments/:pid`
 :    Get an image of the pool's instrument


Project Structure
=================

`app.js`

 :    Express based HTTP server / router

`functions.js`

 :    The main server logic of the REST API lives here.

