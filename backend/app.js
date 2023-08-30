// import express module
const express = require("express");
//import multer
const multer = require("multer");
//import path module
const path = require("path");
//import axios
const axios = require("axios");
// Import express-session
const session = require("express-session");
// Import jwtwebtoken
const jwt = require("jsonwebtoken");

//import body-parser module
const bodyParser = require("body-parser");
//import mongoose && connect to DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
//import bcrypt
const bcrypt = require("bcrypt");
// create express application
const app = express();

// configuration
// Send JSON responses
app.use(bodyParser.json());
// Get objects from Request
app.use(bodyParser.urlencoded({ extended: true }));
// configuration du path
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// multer config
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});
// session configuration
const secretKey = 'lm&!a23pi@ja?pi3*5&$za@ioh5&zo6@oj3b@nob@1211oh.q$ls@o';
app.use(session({
secret: secretKey,
}));
//DataBase
//import model
const Match = require("./models/Match");
const Team = require("./models/Team");
const Player = require("./models/Player");
const Stadium = require("./models/Stadium");
const Imc = require("./models/Imc");
const User = require("./models/User");

let playersTab = [
  {
    id: 1,
    img: "assets/images/img_3.jpg",
    name: "Lionel Messi",
    age: 36,
    position: "RWF",
  },
  {
    id: 2,
    img: "assets/images/img_2.jpg",
    name: "Kilyan Mbappe",
    age: 22,
    position: "LWF",
  },
  {
    id: 3,
    img: "assets/images/img_1.jpg",
    name: "David Bekham",
    age: 41,
    position: "CAM",
  },
  {
    id: 4,
    img: "assets/images/img_1.jpg",
    name: "Zineddine Zidan",
    age: 42,
    position: "CDM",
  },
];

// Business Logic
// Business Logic: Get All Matches
app.get("/matches", (req, res) => {
  //traitement de la Req
  console.log("here into Bl : Get all matches");
  Match.find().then((data) => {
    res.json({ matches: data });
  });
});
//Business Logic: Get Match By ID
app.get("/matches/:id", (req, res) => {
  //traitement de la req

  console.log("here into Bl : Get match by ID");
  let id = req.params.id;
  Match.findOne({ _id: id }).then((data) => {
    console.log(data);
    res.json({ findedMatch: data });
  });
});
//Business Logic: Delete Match
app.delete("/matches/:id", (req, res) => {
  //traitement de la req
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((data) => {
    console.log(data);
    data.deletedCount
      ? res.json({ msg: "deleted successfully" })
      : res.json({ msg: "Error" });
  });
});
//Business Logic: Update Match
app.put("/matches", (req, res) => {
  //traitement de la req
  let newMatch = req.body;
  Match.updateOne({ _id: newMatch._id }, newMatch).then((data) => {
    console.log(data);
    data.nModified
      ? res.json({ msg: "Edited with success" })
      : res.json({ msg: "Not Edited" });
  });
});
//Business Logic: Add Match
app.post("/matches", (req, res) => {
  let match = new Match(req.body);
  match.save((err, doc) => {
    err ? res.json({ msg: "Error" }) : res.json({ msg: "Added with success" });
  });
});

// Business Logic
// Business Logic: Get All Players
app.get("/players", (req, res) => {
  //traitement de la Req
  console.log("here into Bl : Get all players");
  Player.find().then((data) => {
    res.json({ allPlayers: data });
  });
});
//Business Logic: Get Player By ID
app.get("/players/:id", (req, res) => {
  //traitement de la req
  let id = req.params.id;
  Player.findOne({ _id: id }).then((data) => {
    res.json({ player: data });
  });
});
//Business Logic: Delete Player
app.delete("/players/:id", (req, res) => {
  //traitement de la req
  let id = req.params.id;
  Player.deleteOne({ _id: id }).then((data) => {
    res.json({ msg: "deleted successfully" });
  });
});
//Business Logic: Update Player
app.put("/players", (req, res) => {
  //traitement de la req
  let newPlayer = req.body;
  Player.updateOne({ _id: newPlayer._id }, newPlayer).then((data) => {
    res.json({ msg: "Edited with success" });
  });
});
//Business Logic: Add Player
app.post("/players", multer({ storage: storage }).single("img"), (req, res) => {
  //traitement de la req
  req.body.img = "http://localhost:3000" + "/images/" + req.file.filename;
  let player = new Player(req.body);
  player.save();

  res.json({ msg: "Added with success" });
});

// Business Logic
// Business Logic: Get All Teams
app.get("/teams", (req, res) => {
  //traitement de la Req
  Team.find().then((data) => {
    res.json({ teams: data });
  });
});
//Business Logic: Get Team By ID
app.get("/teams/:id", (req, res) => {
  //traitement de la req
  let id = req.params.id;
  Team.findOne({ _id: id }).then((data) => {
    res.json({ team: data });
  });
});
//Business Logic: Delete Team
app.delete("/teams/:id", (req, res) => {
  //traitement de la req
  let id = req.params.id;
  Team.deleteOne({ _id: id }).then((data) => {
    res.json({ msg: "Deleted with success" });
  });
});
//Business Logic: Update Team
app.put("/teams", (req, res) => {
  //traitement de la req
  let newTeam = req.body;
  Team.updateOne({ _id: newTeam._id }, newTeam).then((data) => {
    res.json({ msg: "Edited with success" });
  });
});
//Business Logic: Add Team
app.post("/teams", multer({ storage: storage }).single("img"), (req, res) => {
  //traitement de la req
  req.body.img = "http://localhost:3000" + "/images/" + req.file.filename;
  const team = new Team(req.body);
  team.save();
  res.json({ msg: `${req.body.name} has been added` });
});
//BusinessLogic searchMatchesBy scoreOne, scoreTwo
app.get("/matches/search/:scoreOne/:scoreTwo", (req, res) => {
  let firstScore = req.params.scoreOne;
  let secondScore = req.params.scoreTwo;
  let findedMatches = matchesTab.filter((element) => {
    return element.scoreOne == firstScore || element.scoreTwo == secondScore;
  });
  if (findedMatches.length != 0) {
    res.json({ matches: findedMatches });
  } else {
    res.json({ msg: "no matches found" });
  }
});

//BL : stadiums
// Business Logic: add Stadium

app.post("/stadiums", (req, res) => {
  //traitement de la Req
  const stadium = new Stadium(req.body);
  stadium.save();
  res.json({ msg: `${req.body.name} added with success` });
});

// Business Logic: get All Stadiums
app.get("/stadiums", (req, res) => {
  //traitement de la Req
  Stadium.find().then((data) => {
    res.json({ stadiums: data });
  });
});

// Business Logic: Delete Stadium
app.delete("/stadiums/:id", (req, res) => {
  let id = req.params.id;
  Stadium.deleteOne({ _id: id }).then((data) => {
    res.json({ msg: "deleted with success" });
  });
});

// Business Logic: get Stadium by id
app.get("/stadiums/:id", (req, res) => {
  let id = req.params.id;
  Stadium.findOne({ _id: id }).then((data) => {
    res.json({ stadium: data });
  });
});

// Business Logic: update Stadium
app.put("/stadiums", (req, res) => {
  Stadium.updateOne({ _id: req.body._id }, req.body).then((data) => {
    res.json({ msg: "updated with success" });
  });
});

// Business Logic: search Player

app.post("/players/search", (req, res) => {
  //traitement de la Req
  let obj = req.body;
  let findedPlayers = playersTab.filter(
    (elt) => elt.name == obj.name || elt.age == obj.age
  );
  if (findedPlayers.length == 0) {
    res.json({ msg: "Not Found" });
  } else {
    res.json({ players: findedPlayers });
  }
});

// Business Logic: add Stadium

app.post("/imc", (req, res) => {
  //traitement de la Req
  let obj = req.body;
  let heightM = obj.height / 100;
  obj.imcCalcul = obj.weight / (heightM * heightM);
  let msg = "";
  if (obj.imcCalcul <= 18.5) {
    msg = "Insuffisance pondérale (maigreur)";
  } else if (obj.imcCalcul <= 25) {
    msg = "Corpulence normale";
  } else if (obj.imcCalcul <= 30) {
    msg = "Surpoids";
  } else if (obj.imcCalcul <= 35) {
    msg = "Obésité modérée";
  } else if (obj.imcCalcul <= 40) {
    msg = "Obésité sévère";
  } else if (obj.imcCalcul > 40) {
    msg = "Obésité morbide ou massive";
  }
  let imc = new Imc(obj);
  imc.save((err, doc) => {
    err ? console.log("error has been occured") : res.json({ msg: msg });
  });
});
// BL: sign up
app.post(
  "/users/signup",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    console.log(req.body);
    bcrypt.hash(req.body.pwd, 10).then((hashedPwd) => {
      req.body.pwd = hashedPwd;
      req.body.avatar =
        "http://localhost:3000" + "/images/" + req.file.filename;
      let user = new User(req.body);
      user.save((err, doc) => {
        console.log(err);
        err
          ? res.json({ msg: "Error" })
          : res.json({ msg: "Added with success" });
      });
    });
  }
);

// BL: login
app.post("/users/login", (req, res) => {
  console.log(req.body);
  User.findOne({ email: req.body.email }).then((data) => {
    console.log("data", data);
    if (data) {
      bcrypt.compare(req.body.pwd, data.pwd).then((result) => {
        if (result) {
          let userToSend = {
            id: data._id,
              fName: data.firstName,
              lName: data.lastName,
              role: data.role,
          }
          let token = jwt.sign(userToSend, secretKey, {expiresIn: "1h"});
          res.json({
            msg: "success",
            token: token,
          });
        } else {
          res.json({ msg: "wrong password" });
        }
      });
    } else {
      res.json({ msg: "This email does not exist" });
    }
  });
});

//BL: Weather

app.post("/weather", (req, res) => {
  console.log(req.body);
  const country = req.body.cityInput;
  const apiKey = "ac67f67a035462636d6342136caa5074";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    country +
    "&appid=" +
    apiKey +
    "&units=metric";
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Here response", response);
      const weather = response.data.main;
      console.log("Here weather main", weather);
      const result = {
        temp: weather.temp,
        pressure: weather.pressure,
        humidity: weather.humidity,
        icon: response.data.weather[0].icon,
        windSpeed: response.data.wind.speed,
      };
      res.status(200).json({ result: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
// BL :get teams from api

app.get("/teamsApi", (req, res) => {
  const apiKey =
    "be4fd53bf00bceec8cb2daddf39bde6493bf8ce2fcde434f1716599e40fac2d5";
  const apiUrl =
    "https://apiv2.allsportsapi.com/football/?&met=Countries&APIkey=" + apiKey;
  axios
    .get(apiUrl)
    .then((result) => {
      console.log(result.data.result);
      // console.log(result.data.result[0].players);

      res.status(200).json({ msg: "ok" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//make app exportable
module.exports = app;
