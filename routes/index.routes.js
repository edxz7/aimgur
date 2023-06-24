const express = require('express');
const router = express.Router();
const {
  getAllImagePosts
} = require('../controller/image-post.controller');
const isLoggedIn = require('../middleware/isLoggedIn')

/* GET home page */
router.get('/', isLoggedIn, getAllImagePosts)

module.exports = router;
