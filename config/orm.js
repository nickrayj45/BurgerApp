var orm = require("./connection.js");

// Functions needed
var orm = {
    // SelectAll to grab info from table
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        orm.query(queryString, [tableInput])
            if (err) throw err;
            console.log(result);
    },
    // InsertOne to insert values into columns
    insertOne: function(tableInput, col1, col2, val1, val2){
        var queryString = "INSERT INTO ??,(??, ??), VALUES(??, ??)";
        orm.query(queryString, [tableInput, burgers, devoured])
        if (err) throw err;
        console.log(result);
    },
    // UpdateOne to update values in columns of the table
    updateOne: function(tableInput, col1, val1, col2, val2){
        var queryString = "UPDATE ?? SET ?? = ??, WHERE ?? = ??";
        orm.query(queryString, [tableInput, col1, val1, col2, val2])
        if (err) throw err;
        console.log(result);

    }
}



module.exports = orm