//Initiallising node modules
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var CustomerService = require("./Services/CustomerService.js");

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

// Body Parser Middleware
app.use(bodyParser.json()); 

//CORS Middleware
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

//GET API
app.get("/", function(req , res){
    res.send({ status: "success"});
});

app.get("/api/customer", function(req , res){
    // var query = "select TOP (1000) * from [Customer]";
    // if(req.query.cid != null){
    //     query = "select * from [Customer] where CustomerId=" + req.query.cid;
    // }
    // dbHandler.executeQuery(query);test
});

app.get("/api/customer/name", function(req , res){
    if(req.query.cid != null){
        CustomerService.getCustomerNameById(req.query.cid).then(function(sres){
            res.send(sres)
        })
    }
    else{
        res.send({status: "failed"})
    }
});

// POST API
// app.post("/api/customer/:CustomerName", function(req , res){
//     console.log(req.originalUrl);
//     var query = "INSERT INTO [Customer] (CustomerName) VALUES ("+req.query.CustomerName+")";
//     dbHandler.executeQuery (res, query);
// });

// PUT API
// app.put("/api/customer/:CustomerName", function(req , res){
//    var query = "UPDATE [Customer] SET CustomerName= " + req.query.CustomerName;
//    executeQuery (res, query);
// });

// DELETE API
// app.delete("/api/customer/:id", function(req , res){
//     var query = "DELETE FROM [Customer] WHERE Id=" + req.query.id;
//     executeQuery (res, query);
// });