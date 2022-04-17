const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin-irfnd:Irfiqnyu29.@dosier-db.nbz8u.mongodb.net/dosier"
);

const userSchema = mongoose.Schema({
	username: String,
	password: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
