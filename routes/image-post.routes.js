// routes/image-post.routes.js
const imagePostRouter = require("express").Router();
const { 
    getOneImagePost,
}  = require('../controller/image-post.controller');

imagePostRouter.get('/:id/detail', getOneImagePost)

module.exports = imagePostRouter;