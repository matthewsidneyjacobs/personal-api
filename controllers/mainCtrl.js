var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');

module.exports = {
  getName: function (req, res) {
    res.status(200).json({"name": user.name});
  },

  getLocation: function(req, res) {
    res.status(200).json({"location": user.location});
  },

  getOccupations: function(req,res) {
    var order = req.query.order;
    if (!req.query.order) {
      res.status(200).json({"occupations": user.occupations});
    } else if (order === "desc") {
      res.status(200).json({"occupations": user.occupations.reverse()})
    } else if (order === "asc") {
      res.status(200).json({"occupations": user.occupations.sort()})
    }
  },

  getLatestOccupation: function (req,res) {
    res.status(200).json({"latestOccupation": user.occupations[user.occupations.length-1]});
  },

  getHobbies: function (req, res) {
    res.status(200).json({"hobbies": user.hobbies});
  },

  getHobbiesType: function(req, res) {
    var hobbyType = req.params.type;
    console.log(hobbyType);
    var hobbies = user.hobbies;
    // var resultArr = [];
    //loop through hobbies. if the hobbyType matches the type property for each element in the array, push it to result arr. then display result array
    // function checkType(element) {
    //   return element.type === hobbyType;
    // };
    // hobbies.filter(checkType(hobbies));
    // res.send(hobbies);

    var results = hobbies.filter(function (el) {
      return (el.type === hobbyType);
    });
    res.status(200).json({"hobbies by type ": results});

  },

  getFamily: function(req, res) {
    var familyMember = req.query.relation;
    var family = user.family;
    var results = family.filter(function (el) {
      return (el.relation === familyMember)
    });
    if(!req.query.relation) {
      res.status(200).json({"family": user.family});
    }
    else if (req.query.relation === "father") {
      res.status(200).json(results)
    } else if (req.query.relation === "mother") {
      res.status(200).json(results)
    } else if (req.query.relation === "sister") {
      res.status(200).json(results)
    }else {
      res.status(404).send();
    }

  },

  getFamilyGender: function (req, res) {
    var gender = req.params.gender;
    var members = user.family;
    var results = members.filter(function(el) {
      return (el.gender === gender)
    });

    res.status(200).json({"family members of selected gender": results})
  },

  getRestaurants: function(req, res) {
    var rating = req.query.rating;
    var places = user.restaurants;

    if(!req.query.rating) {
      res.status(200).json({"restaurants": user.restaurants});
    }
    else {
      var results = places.filter(function(el) {
        return (el.rating >= rating)
      });
      res.status(200).json({"restaurants": results})
    };
  },

  getRestaurantName:function(req, res) {
    var name = req.params.name;
    name = name.replace(/\+/g, " ");
    console.log(name);
    var places = user.restaurants;
    var results = places.filter(function(el) {
      return (el.name === name)
    });
      res.status(200).json({"restaurants by name selected": results});
  },

  changeName: function(req, res) {
    user.name = req.body.name;
    res.status(200).json('changed my name');
  },

  changeLocation: function(req, res) {
    user.location = req.body.location;
    res.status(200).json('changed my location');
  },

  changeHobbies: function(req, res) {
    var hobbies = user.hobbies;
    hobbies.push(req.body);

    res.status(200).json('added to my hobbies');
  },

  changeOccupations: function(req, res) {
    var occupations = user.occupations;
    occupations.push(req.body.title);

    res.status(200).json('added to my occupations');
  },

  changeFamily: function(req, res) {
    var family = user.family;
    family.push(req.body);

    res.status(200).json('added to my family');
  },

  changeRestaurants: function(req, res) {
    var restaurants = user.restaurants;
    restaurants.push(req.body);

    res.status(200).json('added to restaurants');
  },

  getSkillz: function(req, res) {
    var experienceZ = req.query.experience;
    var results = skillz.filter(function(el) {
      return (el.experience === experienceZ);
    });

    if (!req.query.experience) {
      res.status(200).json({"skillz": skillz});
    } else if (req.query.experience === "Beginner") {
      res.status(200).json(results);
    } else if (req.query.experience === "Intermediate") {
      res.status(200).json(results);
    } else if (req.query.experience === "Expert") {
      res.status(200).json(results);
    }

  },

  changeSkillz: function(req,res) {
    skillz.push(req.body);

    res.status(200).json({"changed my skillz": skillz});
  },

  getSecrets: function(req, res) {
    res.status(200).json({"secrets": secrets});
  }






}
