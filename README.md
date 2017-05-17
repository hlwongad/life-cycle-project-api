# life-cycle-project-api

A simple API server to act as backend server in an application
Interface between a Client and any DB

## Project Setup
`npm install` to acquire all required node modules

`npm start` to start the server, which will run in `localhost:8080`

## DB connection
 - config.js : 

## API endpoints

`/`
display a hello world message: `{status:"success"}`

`/api/customer`
display top 1000 customer, indexed by CustomerId

`/api/customer?cid={CustomerId}`
get all column of the customer, where CustomerId == cid

`/api/customer/name?cid={CustomerId}`
get the name of the customer, where CustomerId == cid

