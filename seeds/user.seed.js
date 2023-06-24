require('../db');
const mongoose = require('mongoose');
const User = require('../models/User.model');

const users = [{
    "id": 1,
    "username": "saherne0",
    "password": "123456",
    "email": "smcgrey0@theatlantic.com"
  }, {
    "id": 2,
    "username": "cscrammage1",
    "password": "123456",
    "email": "kbernardeau1@hugedomains.com"
  }, {
    "id": 3,
    "username": "cchurchill2",
    "password": "123456",
    "email": "cnorris2@dropbox.com"
  }, {
    "id": 4,
    "username": "bclapp3",
    "password": "123456",
    "email": "flomen3@reddit.com"
  }, {
    "id": 5,
    "username": "lgerling4",
    "password": "123456",
    "email": "lkubicek4@newsvine.com"
  }, {
    "id": 6,
    "username": "spalser5",
    "password": "123456",
    "email": "sofen5@jalbum.net"
  }]

User.insertMany(users)
.then(dbUser => {
    console.log('se crearon ', dbUser.length, 'aimgur users')
    mongoose.connection.close()
})