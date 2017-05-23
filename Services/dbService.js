var config = require("../config.js")
var sql = require("mssql");

module.exports = {

    //Function to connect to database and execute query
    executeQuery : function(query, callback){
        sql.close();
        sql.connect(config.dbConfig, function (err) {
            if (err) {
                console.log("Error while connecting database :- " + err);
                res.send(err);
            }
            else {
                // create Request object
                var request = new sql.Request();
                // query to the database
                request.query(query, function (err, dbres) {
                    if (err) {
                        console.log("Error while querying database :- " + err);
                        callback(err)
                    }
                    else {
                        callback(dbres)
                    }
                });
            }
        });         
    }
};