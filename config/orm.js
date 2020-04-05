var connection = require("./connection.js");

// Functions needed
var orm = {
  // SelectAll to grab info from table
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // InsertOne to insert values into columns
  insertOne: function (tableInput, col1, col2, val1, val2) {
    var queryString = "INSERT INTO ??,(??, ??), VALUES(??, ??)";
    connection.query(
      queryString,
      [tableInput, col1, col2, val1, val2],
      function (err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
      }
    );
  },
  // UpdateOne to update values in columns of the table
  updateOne: function (tableInput, col1, val1, col2, val2) {
    var queryString = "UPDATE ?? SET ?? = ??, WHERE ?? = ??";
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(
      queryString,
      [tableInput, col1, val1, col2, val2],
      function (err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
      }
    );
  },
};

module.exports = orm;
