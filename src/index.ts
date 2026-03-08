import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import { ContentModel, LinkModel, UserModel } from "./db";
const app = express();

const JWT_PASSWORD = "sajncnaoeocew";
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModel.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User Signed Up",
    });
  } catch (e) {
    res.status(411).json({
      message: "User already exists",
    });
  }
});

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await UserModel.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD,
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrrect credentials",
    });
  }
});

app.post("api/v1/content", async (req, res) => {
  const link = req.body.link;
  const title = req.body.title;

  await ContentModel.create({
    link,
    title,
    type: req.body.type,
    userId: req.userId,
    tags: [],
  });

  res.json({
    message: "Content Added",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
