const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const subscribeModel = mongoose.model("subscribeModel", subscriberSchema);

module.exports = subscribeModel;
