import mongoose, { model, Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://sachinacharya365official_db_user:kEX4fEHa1FNjVyWt@cluster0.k8tooiv.mongodb.net/primeMemory",
);

//schema always with lowercase
const userSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});
const contentSchema = new Schema({
  title: String,
  link: String,
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  type: String,
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const linkSchema = new Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});
//model start with Uppercase
export const UserModel = mongoose.model("User", userSchema);
export const ContentModel = mongoose.model("content", contentSchema);
export const LinkModel = mongoose.model("Links", linkSchema);
