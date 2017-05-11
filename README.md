# Datapath Test

Objective: "Build a medium.com style commenting / notes system."

## Rest API

For the REST API, I used NodeJS with Express and Mongoose. For the database, I
used mLab (https://mlab.com/welcome/), a Database-as-a-service for MongoDB.

## Client

For the Client, I used React, webpack, Babel, axios for the requests, Bootstrap
for styling, Sass and webpack-dev-server. For tests, I used Jest and Enzyme.

## Installation Instructions

- Clone this repo
- Enter in the root directory of the project
- Run "npm install"
- Enter the client folder with "cd client"
- Run "npm install"
- You must also set the environment variables MLABUSER and MLABPASSWORD to,
respectively, "test-user" and "9nL@*ZHzd$ar/W,y", or you can hardcode these
values on the "db.js" file, on the root folder of the project, so that the app
can make the connection with mLab's database. If you are using Ubuntu, you can
put the variables on .bashrc
- Go back to the root directory of the project and run "npm start"
