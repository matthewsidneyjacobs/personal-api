var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');
var port = 3000;


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(middleware.addHeaders);

//step3 build read only endpoints
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantName);

//step5 make writable endpoints
app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.changeHobbies);
app.post('/occupations', mainCtrl.changeOccupations);
app.post('/family', mainCtrl.changeFamily);
app.post('/restaurants', mainCtrl.changeRestaurants);

//step6 skillz
app.get('/skillz', mainCtrl.getSkillz);
app.post('/skillz', middleware.generateId, mainCtrl.changeSkillz);

//step7 secrets
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);

app.listen(port, function() {
  console.log('listening on port: ' + port);
})
