const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  author: "",
  subject: "",
  topic: "",
});
module.exports = mongoose.model("Blog", BlogSchema);
