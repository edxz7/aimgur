const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn')
const router = express.Router();
const {
  getAllImagePosts
} = require('../controller/image-post.controller');


/* GET home page */
router.get('/', getAllImagePosts)

module.exports = router;
