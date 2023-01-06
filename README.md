# SimpleChatApp
Uses react, express, socket.io, eslint and prettier to create a simple chat app using local storage only <br>
![HomePage](/homePage.png?raw=true "Home Page") <br>
Enter a name to use in the chat, this is just stored in local storage <br>
![ChatExample](/ChatExample.png?raw=true "Chat example")
Write a message in the bottom panel and click Send. <br>
Click Leave Chat when finished. <br>
<h2> Live Site </h2>
I have added CI/CD to deploy to render using web service for back end and static site for react. <br>
Live site: https://client-simple-chat-app.onrender.com/

<h2> To Use Repo </h2>
Fork, create client/.env with REACT_APP_SERVER_URL=http://localhost:4000 and server/.env with CLIENT_URL=http://localhost:3000 to test local. <br>
Setup Render Dashboard and add the Environment Variables so that static site uses REACT_APP_SERVER_URL to point to web service and web service uses CLIENT_URL to point to static site.

