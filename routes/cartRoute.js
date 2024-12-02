import express from "express";
import {
  addToCart,
  getUserCart,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);
// head res
cartRouter.head("/get", (req, res) => res.sendStatus(200));
cartRouter.head("/add", (req, res) => res.sendStatus(200));
cartRouter.head("/update", (req, res) => res.sendStatus(200));

export default cartRouter;
