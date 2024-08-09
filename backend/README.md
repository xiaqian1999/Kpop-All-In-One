## Backend setup

### Initial setup

1. Start up by running: npm init
   - entry point: server.js
2. Then add "server.js" file inside the backend
3. Then start to add on the dependencies by running: npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
   - express -
   - mongoose - help to connect to DB
   - jsonwebtoken - create authenticat system
   - bcrypt - incrept user data ans store in DB
   - cors - give the permission to frontend to connect with backend
   - dotenv - with environment variable
   - body-parser - parse data coming from user
   - multer - create image towards system
   - stripe - add payment kpt on the web page
   - validator - check the password and email id is valid or not
   - nodemon - when save the project, server will restart
4. After all npm dependencies install, update the "scripts" inside the package.json
   - Original: "test": "echo \"Error: no test specified\" && exit 1"
   - After: "server": "nodemon server.js"
5. Then inside the backend folder, create the following folder for the backend folder structure
   - config - store the configuration file like DB config
   - models - store the models from the MongoDB
   - middleware - store all the middleware
   - controllers - add the logic of the backend
   - routes
   - uploaders - all the image uploaded by the users
6. Then create .env file that store all the environment
7. In the package.json, under "main": "server.js", add another line for "type": "module",
8. Then start to setup inside the servre.js with the following
   - Insert 1st image
9. Then call npm run server
10. To test with api, instead of browser, we use extension "Thunder Client" inside the VSCode
11. Then initial for the DB as follow, afterwards import this connectDB into the server.js
    - and call the function: connectDB();
    - Insert 2nd image
