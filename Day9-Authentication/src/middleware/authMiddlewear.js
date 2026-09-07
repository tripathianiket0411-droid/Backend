import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }

  const data = jwt.verify(
    token,
    "1f085e6badf4838e882e1f7e751516f58436e7c82f2168c7993409bbf071419d ",
  );

  const user = await userModel.findById(data.id);

  req.user = user;

  next();
};
