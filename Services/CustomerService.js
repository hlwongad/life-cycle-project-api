var Customer = require("../Models/Customer.js");
var dbService = require("../Services/dbService.js");

var getCustomerNameById = function(cid){
    return new Promise(function(fullfill, reject){
        if(cid == null) {
            reject({status: "failed"})
        } 
        else{
            var customer = new Customer(cid, null);
            query = "select CustomerName from [Customer] where CustomerId=" + customer.getId();
        
            dbService.executeQuery(query, function(dbres){
                try{
                    customer.setName(dbres.recordset[0].CustomerName);
                    fullfill(customer);
                }
                catch(e){
                    reject({status: "failed", reason: dbres})
                }
            });
        }
    })
}


module.exports.getCustomerNameById = getCustomerNameById