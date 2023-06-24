const Comment = require('../models/Comment.model');
const ImagePost = require('../models/ImagePost.model');

const createComment = async (req, res, next) => {
    // el req.params) lleva el id del post donde se hizo el comentario
    // el req.body lleva los datos capturados por el formulario
    const postId = req.params.id; // este es el id del post donde se hiz el comentario
    console.log('params: ',req.params);
    console.log('req.body', req.body);
    const comment = await Comment.create({
        body: req.body.bodyContent,
        userId: req.session.currentUser._id
    })

    const commentId = comment._id;

    const updatedPost = await ImagePost.findByIdAndUpdate(
        postId,
        { $push: { comments: commentId } },
        { new: true } // 
    )
    console.log('updatedPost: ', updatedPost);
    res.redirect(`/image-post/${postId}/detail`);

}


module.exports = {
    createComment
}