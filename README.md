
## SimpleChatApp
A project that uses react, express, socket.io, eslint and prettier to create a simple chat app using local storage only. <br>
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Example Use](#example-use)
* [Live Site](#live-site)

## General Info
The aim of this project is practice writing javascript code using ESLint and prettier, while building react skills and learning the finer points of socket.io<br>
<br>
## Technologies
 This web app uses Node 16.x, ReactJS, ExpressJS, cors and socket.io<br>
Back end: Node 16.x, argon2 0.28.4, cors 2.8.5, express 4.17.2, validator 13.7.0, socket.io 4.5.4 <br>
Front end: @testing-library/jest-dom 5.16.5, @testing-library/react 13.4.0, @testing-library/user-event 13.5.0, react 18.2.0, react-dom 18.2.0, react-router-dom  6.6.1, socket.io-client 4.5.4, web-vitals 2.1.4 <br>
Development environment: nodemon 2.0.20, dotenv 16.0.3, eslint 8.31.0, eslint-config-node 4.1.0, eslint-config-prettier 8.6.0, eslint-plugin-node 11.1.0, eslint-plugin-prettier 4.2.1,  prettier 2.8.1 <br>
## Setup
Fork, create client/.env with REACT_APP_SERVER_URL=http://localhost:4000 and server/.env with CLIENT_URL=http://localhost:3000 to test local. <br>
Setup Render Dashboard and add the Environment Variables so that static site uses REACT_APP_SERVER_URL to point to web service and web service uses CLIENT_URL to point to static site.
<br>
## Example Use

![HomePage](/homePage.png?raw=true "Home Page") <br>
Enter a name to use in the chat, this is just stored in local storage <br>
The main page will then open, using logged in names to track socket connections <br>
![ChatExample](/ChatExample.png?raw=true "Chat example")
Write a message in the bottom panel and click Send. <br>
Click Leave Chat when finished. <br>
## Live Site 
I have added CI/CD to deploy to render using web service for back end and static site for react. <br>
Live site: https://client-simple-chat-app.onrender.com/



