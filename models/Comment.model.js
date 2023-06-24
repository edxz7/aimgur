const { Schema, model } = require('mongoose')
// comment
const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    body: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Comment', commentSchema)


const { Schema, model } = require('mongoose');

const imagePostSchema = new Schema(
    {
        title: {
            type: String,
            required: false,
            trim: true,
        },
        content: String,
        imageName: {
            type: String,
            default: 'A picture'
        },
        imageUrl: {
            type: String,
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        comments: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Comment',
            },
        ],
    }
)

module.exports = model('ImagePost', imagePostSchema);
