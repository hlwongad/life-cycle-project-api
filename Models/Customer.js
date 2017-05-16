function Customer(id, name) {
    this.id = id;
    this.name = name;
}

Customer.prototype = {
    constructor: Customer, 
    
    getId: function() {
        return this.id
    }, 
    getName: function() {
        return this.name
    }, 
    setId: function(id) {
        this.id = id
    }, 
    setName: function(name) {
        this.name = name
    }
}

module.exports = Customer