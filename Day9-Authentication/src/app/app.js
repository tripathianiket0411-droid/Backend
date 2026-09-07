import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";
import { authenticate } from "../middleware/authMiddlewear.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "authentaion api suucessfully fetched ",
  });
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body;

  const user = await userModel.create({
    email,
    password: await bcrypt.hash(password, 10),
    name,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_secret,
  );

  res.status(201).json({
    message: "User created successfully",
    data: {
      user: {
        email,
        name,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/api/auth/me", authenticate, async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  let { email, password } = req.body;

  const user = await userModel.findOne({ email });

  const isValidPassword = bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.jwt_secret,
  );

  res.status(200).json({
    message: "user loggedIn successfully",
    data:{
      user:{
        email:user.email,
        name : user.name,
      }
      
    },
    token
  });
});
export default app;
