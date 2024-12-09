import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.send(401).json({ error: "Unauthorized, No token provided !" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.send(401).json({ error: "Unauthorized, Invalid token !" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.send(404).json({ error: "User not found !" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in ProtectRoute middleware: ", error.message);
    res.send(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
