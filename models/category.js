const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  metaTags: [
    {
      type: String,
      required: false
    }
  ],
  metaDescription: {
    type: String,
    required: false
  }
});

const categoryModel = mongoose.model("categoryModel", categorySchema);

module.exports = categoryModel;
