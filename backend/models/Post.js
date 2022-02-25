const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", postSchema);
