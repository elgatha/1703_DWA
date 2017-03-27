# 1703_DWA
<br>
# Deployment-of-Web-Applications

<br>
# url-shortener<br>
created by Elgatha Lee for WDD program at Full Sail University.<br>

# Purpose
<br>
 This url shortener is to allow a user the ability to enter a regular url and for the app to return a shortened url.<br>

# Installation
<br>
 Please follow the steps below to install the app.<br>

 1. Click the GREEN BUTTON on the right "clone or Download" at the top of the page.
 2. After that step is completed you will have to open up your terminal and download the following things:
  a. Install npm "npm install"<br>
  b. Install nodemon "npm install nodemon"<br>
  c.  Start your server "node src/server.js"<br>
 3. Your server should be running on port 3000!<br>

 You can use postman in Chrome if you don't have it on your computer<br>
 Do a POST request to localhost:3000/api/v1/url<br>
 This will return a shortened URL<br>

 for #APICRUD---<br>
 You are going to need mySQL, so you will have to create a .env file<br>

 Do this by typing into terminal  { touch .env } <br>
 then add the following information <br>

	DB_NAME=[database name] <br>
	DB_USER=[username] <br>
	DB_PASS=[password] <br>
	DB_HOST=[host] <br>
	DB_SCHEMA=mysql <br>
	DB_PORT=[port] <br>
<br>

You can check the status in Postman by doing a GET request to localhost:3000/api/v1/url<br>

# Starting Point
<br>
The starting point is always localhost:3000<br>
<br>
# Endpoints
<br>
Status<br>
GET: /status<br>

POST /api/v1/urls<br>
  Shortened URL created<br>
GET /api/v1/urls<br>
  Display every URL<br>
GET /api/v1/urls/:id<br>
  Display URL based on id<br>
POST /api/v1/urls/:id<br>
  Update URL based on id<br>
DELETE  /api/v1/urls/:id<br>
  Delete url based on id<br>


# Utility Tool
Make sure that you are in your directory to activate Debugging<br>

  Pleas follow the following steps:<br>
   1. DEBUG=true node src/server.js<br>
  you should see Debugging Activated, if you were successful.<br>
   2. DEBUG=false node src/server.js<br>
  if you donot want debgugging activated.<br>

# Coding Style
  <br>
  This project utilized eslint-config-airbnb for the code styling.<br>
  This was accomplished by installing the plugin for Atom.<br>
  You can find documentation about eslint here:<br> [eslint-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) <br>
  and for installing on Atom you can find the documentation here.<br>
  [eslint for Atom](https://atom.io/packages/eslint).
