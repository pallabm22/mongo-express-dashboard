const mongoose = require('mongoose');
mongoose.connect(
  `mongodb+srv://Pallab_Mandal:mandal@pallabcluster.x5enxcs.mongodb.net/`
);

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  imageurl: String,
});

module.exports=mongoose.model("user", userSchema);