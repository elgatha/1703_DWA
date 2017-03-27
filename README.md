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
  [eslint for Atom](https://atom.io/packages/eslint).<br>

# Unit Testing
<br>
In order for this to work you MUST HAVE mocha and chai installed using npm globally.<br>
Once you have done this you can run a test for each route.<br>

For the /go/:shortenedURL test the short url of 4EydSo<br>
for this to be accomplished 4EydSo needs to be in your database.<br>

Ready. Set. GO.<br>
  1. .get('/go/4EydSo') // This has to be in the database

If you're lucky the test should come back passed<br>
If not, try and try again...<br>
<br>
# Deployment
<br>
## digital ocean
<br>
In order to deploy to Digital Ocean you must first do:<br>
<br>
git push live
<br>
## heroku
<br>
When deploying to heroku use <br>

git push origin master<br>

If you haven't lost your mind at this point you must push the master branch.<br>
It will only go into the staging process if the tests pass codeship<br>
Codeship allows you to test anything before promotion through heroku.<br>
