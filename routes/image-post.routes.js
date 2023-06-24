// routes/image-post.routes.js
const imagePostRouter = require("express").Router();
const { 
    getOneImagePost,
    createImagePost
}  = require('../controller/image-post.controller');
const uploadImage = require('../middleware/cloudinary');


imagePostRouter.get('/:id/detail', getOneImagePost)
imagePostRouter.post('/create', uploadImage.single('picture') , createImagePost)

module.exports = imagePostRouter;