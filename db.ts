import { Model, Schema } from "mongoose";
import mongoose = require("mongoose");
import model = require("mongoose");

mongoose.connect(
  " mongodb+srv://sachinacharya365official_db_user:kEX4fEHa1FNjVyWt@cluster0.k8tooiv.mongodb.net/primeMemory",
);

const UserSchema = new Schema({
  username: { type: String, unique: true },
  password: String,
});

export const UserModel = model("User", UserSchema);
