var user = {
  name: "sid",
  location: "provo",
  occupations: ["zookeeper", "consultant", "developer"],
  hobbies: [
    {
      name: "sports",
      type: "athletic"
    },
    {
      name: "music",
      type: "creative"
    },
    {
      name: "art",
      type: "creative"
    }
  ],
  family: [
    {
      name: "paul",
      relation: "father",
      gender: "male"
    },
    {
      name: "sylvia",
      relation: "mother",
      gender: "female"
    },{
      name: "rachel",
      relation: "sister",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "sipz",
      type: "dinner",
      rating: 5
    },
    {
      name: "yardhouse",
      type: "lunch",
      rating: 4
    },
    {
      name: "taco bell",
      type: "lunch",
      rating: 2
    },
    {
      name: "polite provisions",
      type: "bar",
      rating: 1
    }
  ]
};
module.exports = user;
