const session = require("express-session");
const Post = require("../models/post");

const PostsController = {
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
       }              //posts.reverse also possible here
      const array = posts.sort(
        (objectA, objectB) => Number(objectB.updatedAt) - Number(objectA.updatedAt),
      );

      res.render("posts/index", { posts: array });
    });
  },
  New: (req, res) => {
    res.render("posts/new", {});
  },
  Create: (req, res) => {
    console.log(req.session.user); 
    const post = new Post(req.body);
    //accessing user first name & last name
    post.author_name = `${req.session.user.first_name} ${req.session.user.last_name} `
    post.author_id  = `${req.session.user._id} `

    post.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = PostsController;
