var express = require("express");
var router = express.Router();
const Blog = require("./models/Blog");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("check check");
  // make this post all blogs once i create one send it here //
});

router.post("/blogs", function (req, res, next) {
  const newBlog = new Blog();
  newBlog.author = req.body.author;
  newBlog.subject = req.body.subject;
  newBlog.topic = req.body.topic;
  newBlog.save().then((blog) => {
    res.json({ blog: blog });
    res.redirect("/blogs");
    next();
  });
});
router.get("/blogs", function (req, res, next) {
  Blog.findById();
});
module.exports = router;
