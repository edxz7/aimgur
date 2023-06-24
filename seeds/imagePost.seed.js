require("../db")
const mongoose = require("mongoose")
const ImagePost = require("../models/PostImage.model")

const imagePosts = [
  {
    title: "Remember this episode of The Office?",
    content:
      "Dwight and Michael Scott hatches a scheme together to find out who are the least productive employees in the work place. Dwight shows up in a fake priest outfit to get people to confess their sins. Jim make a lot of faces at the camera or whatever. Idk I never actually watched the show.",
    imageUrl: "https://i.imgur.com/Omr0Wst.jpeg",
    comments: [],
  },
  {
    title: "Choose your weapon",
    content: "",
    imageUrl: "https://i.imgur.com/SThAHOa.jpeg",
    comments: [],
  },
  {
    title:
      "Ben Shapiro actually said this, so I guess he’s cool with the Trump indictment now, right?",
    content: "",
    imageUrl: "https://i.imgur.com/jaJoZ07.jpeg",
    comments: [],
  },
  {
    title: "It would be a sha.. shamu I mean shamr",
    content: "",
    imageUrl: "https://i.imgur.com/ix8cCCT.jpeg",
    comments: [],
  },
  {
    title: "Helen Hulick",
    content:
      "She taught in deaf schools in Oregon and California before returning to the East Coast in 1942.",
    imageUrl: "https://i.imgur.com/brT2iLD.jpeg",
    comments: [],
  },
  {
    title: "Good life Lesson",
    content: "I stole this meme because it teaches a very good life lesson",
    imageUrl: "https://i.imgur.com/0flotfk.jpeg",
    comments: [],
  },
  {
    title:
      "Great! Let's start with shuttering golf courses, country clubs, and wherever the hell else the uber-rich congregate and suck resources during this trying time.",
    content:
      "Source:  https://www.reuters.com/world/us/texas-power-use-break-records-heat-wave-prices-soar-ercot-2023-06-20/",
    imageUrl: "https://i.imgur.com/6SbK4Is.jpeg",
    comments: [],
  },
  {
    title:
      "Aint no party like a drunk staff party cause the staff cant pay for it on their wages that we give them!!! Wait what?",
    content: "",
    imageUrl: "https://i.imgur.com/AiVVYDv.jpeg",
    comments: [],
  },
  {
    title: "A photo of my dog Panko every day",
    content: "Panko likes beans",
    imageUrl: "https://i.imgur.com/OGCtEJP.jpeg",
    comments: [],
  },
]

ImagePost.insertMany(imagePosts)
  .then((dbImagePost) => {
    console.log("se crearon ", dbImagePost.length, "aimgur posts")
    mongoose.connection.close()
  })
  .catch((error) => console.log("error during seeding: ", error))
