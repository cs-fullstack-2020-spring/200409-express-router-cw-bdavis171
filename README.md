# 20-04-09 Express Router CW

[Resource](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes#Routes_primer)

### Set Up
- Create an index.js file
- Generate the `package.json` file by running `npm init` in the terminal
- Install express and nodemon by running `npm install nodemon express` in the terminal
- Import the express module using the `require()` method
- Create a server called app using the `express()` method
- Allow that server to listen on port 8000 using the `listen()` method
- Create a routes directory
    - Create a route module for each route grouping specified below
    - Import express using the `require()` method in each router module
    -  Create a router using `express.Router()`
    - Export the router module at the bottom of each file

### Endpoints
#### Using Router
Use Express Router to group the following routes and mount them based on the section header
#### API
- Define a get request that sends the string `You attempted to view item [ITEM_ID]` at the path `localhost:[PORT_NUMBER]/api/[ITEM_ID]`
- Create, test, and save endpoint in Postman
- Define a get request that sends the string `You attempted to view all items` at the path `localhost:[PORT_NUMBER]/api`
- Create, test, and save endpoint in Postman
- Define a post request that sends the body of the request sent in Postman at the path `localhost:[PORT_NUMBER]/api`
- Create, test, and save endpoint in Postman
    - Send a json object with properties `item_id`, `item_description`, and `item_price`

#### Admin
- Define a get request that sends the string `Welcome back [USERNAME]` at the path `localhost:[PORT_NUMBER]/admin/[USER_NAME]`
- Create, test, and save endpoint in Postman
- Define a delete request that sends the string `You attempted to delete the user [USER_ID]` at the path `localhost:[PORT_NUMBER]/admin/user/[USER_ID]`
- Create, test, and save endpoint in Postman
- Define an update request that sends the body of the request sent in Postman at the path `localhost:[PORT_NUMBER]/admin/user/[USER_ID]`
- Create, test, and save endpoint in Postman
    - Send a json object with properties `item_id`, `item_description`, and `item_price`
