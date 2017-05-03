var Server = require('./index.js');
var Hoek = require('hoek');

Server.init(process.env.PORT || 5000, function (err,server) {
  Hoek.assert(!err,err);
  console.log("server running on http://localhost:5000")
});

