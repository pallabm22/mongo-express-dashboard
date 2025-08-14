const mongoose = require('mongoose');
mongoose.connect(
  
);

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String
});

module.exports=mongoose.model("user", userSchema);