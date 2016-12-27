var skillz = require('../skillz.js');
var secrets = require('../secrets.js');
module.exports = {

  addHeaders: function(req, res, next) {
    res.status(200).set({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    });

    next();
  },

  generateId: function (req, res, next) {
    var old_count = skillz.length;
    req.body.id = old_count + 1;
    // res.status(200).send();
    next();
  },

  verifyUser:function(req, res, next) {
    var user = "sid";
    var password = "123";

    var userName = req.params.username;
    var userPassword = req.params.pin;

    if(userName === user && userPassword === password) {
      next();
    } else {
      res.status(401).send();
    }
    
  }

}
