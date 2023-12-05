# Node.js and Express with Authentication Hosted on Microsoft Azure Template

Dependencies: Node.js, Express, Express Session, Cors, Passport, Passport Google Oauth20, Passport GitHub2, Body Parser, Path, Nodemon, Dotenv

This repository is a template that can be used to create a Node.js and Express website for hosting on Microsoft Azure. It has built in GitHub Authentication and Google Authentication.

Helpful Links: 
- https://console.cloud.google.com/apis/credentials (for google client ID's)
- https://github.com/settings/developers (for github client ID's)
- https://www.passportjs.org/ (all passport strategies)


Initial Usage:
- npm install express express-session cors passport passport-google-oauth20 passport-github2 body-parser path nodemon dotenv
- npm start


Instrcutions: 
- Create a new repository using this template.
- Host your application on Azure. 
- Test to ensure it hosted successfuly. 
- Setup GitHub and Google Configurations. 
- When setting up your Client ID's, when it asks you for the homepage URL, type the url of your hosted application. (Either http://localhost.... OR https://hostedazuresite..... make sure to get rid of the "/login" after the url.)
- When it asks you for the callback URL, it is the same url as your homepage but at the end, add "/auth/github/callback" or "auth/google/callback" depending which one you are setting up. (again make sure to get rid of the /login at the end of the url before adding the auth/github/callback)
- Add your own Client ID's and Client Secret ID's into the passport.js file
- Add your own Client URL in the auth.js file in routes folder (without the /login)
- Then you can uncomment out the code in passport.js and auth.js
- If you are running on local environment (local host) in index.js, in the app.use(session(...)) make sure to put the cookie to secure: false, or else it wont work properly. 
- If you are running on Azure Hosted environment, in index.js, in the app.use(session(...)) make sure to put the cookie to secure: true, or else it wont work properly. 