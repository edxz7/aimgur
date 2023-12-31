const ImagePost = require('../models/ImagePost.model'); 


const createImagePost = async (req, res, next) => {
  const { title, content } = req.body;
  const { _id: userId  } = req.session.currentUser;
  console.log('req.file: ', req.file);

  if(!req.file) {
    next(new Error('No file uploaded'))
  }

  const imagePost = await ImagePost.create({
    userId,
    title,
    content,
    imageName: title,
    imageUrl: req.file.path
  });
  
  res.redirect(`/image-post/${imagePost._id}/detail`)
}


const getOneImagePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log('id: ', id);
    const { 
      _id,
      imageUrl,
      imageName,
      title,
      content,
      comments,
      userId: userPostInfo, // este es el user id de la persona que creo el post
      createdAt
     } = await ImagePost.findById(id)
     .populate('userId')
     .populate({
      path: 'comments',
      populate: {
        path: 'userId', // es el userId de la persona que creo el comentario
        model: 'User'
      }
     })
     console.log('este es el user que creo el post', userPostInfo);
     console.log('comments: ', comments);
    const size = 'col-8'
    res.render('post/detail-image-post', { 
      _id, 
      imageUrl, 
      imageName, 
      title, 
      content, 
      size,
      comments,
      userPostInfo 
    }) 
  } catch (error) {
    next(error)
  }
}

const getAllImagePosts = async (req, res, next) => {

    const cardArray = await ImagePost.find();
    const data = {
        rows: []
      };
      
      let currentRow = {
        columns: []
      };
      let currentColumn = {
        columnClass: "",
        cards: []
      };
      
      for (let i = 0; i < cardArray.length; i++) {
        if (currentColumn.cards.length === 4) {
          // Add current column to current row
          currentRow.columns.push(currentColumn);
      
          // Reset current column
          currentColumn = {
            columnClass: "",
            cards: []
          };
        }
      
        if (currentRow.columns.length === 3) {
          // Add current row to rows array
          data.rows.push(currentRow);
      
          // Reset current row and current column sum
          currentRow = {
            columns: []
          };
        }
      
        if (currentColumn.cards.length === 0) {
          // Choose column class at random
          const randArray = generateRandomArray();
          for(const colNum of randArray) 
            currentColumn.columnClass = `col-${colNum}`;
        }
      
        // Add card to current column
        currentColumn.cards.push(cardArray[i]);
      }
      
      // Add remaining column and row to data
      if (currentColumn.cards.length > 0) {
        currentRow.columns.push(currentColumn);
      }
      if (currentRow.columns.length > 0) {
        data.rows.push(currentRow);
      }
      

      console.log('data: ', data);
      console.log('rows: ', data.rows);

    // const imagePost = await ImagePost().find();
    res.render('index', { rows: data.rows })
}

function generateRandomArray() {
  const num1 = Math.floor(Math.random() * 4) + 3;
  const num2 = Math.floor(Math.random() * (10 - num1 - 3)) + 3;
  const num3 = 12 - (num1 + num2);
  return [num1, num2, num3];
}

module.exports = {
    getAllImagePosts,
    getOneImagePost,
    createImagePost
};
