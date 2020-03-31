var connection = require("./orm.js");

var burger = {
    selectAll: function() {
        connection.selectAll("burgers", function(res) {
            console.log(res);
        });
    }

}