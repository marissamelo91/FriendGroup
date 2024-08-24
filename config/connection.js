// Imports the connect and connection functions from the Mongoose Library
const { connect, connection } = require('mongoose');

// Connect function is called with a connection string as an argument
// Connection string specifies the details for connecting to the MongoDB
connect('mongodb://127.0.0.1:27017/FriendGroup');

module.exports = connection;