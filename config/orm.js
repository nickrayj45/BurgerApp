var orm = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        orm.query(queryString, [tableInput])
            if (err) throw err;
            console.log(result);
    }

    
}
insertOne()
updateOne()

module.exports = orm