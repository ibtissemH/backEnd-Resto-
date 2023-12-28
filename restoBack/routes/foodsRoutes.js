import express from "express";


import { createFood,
   deletefood,
   getFoodById, 
   getListFoods,
   updateFood } from "../controllers/food.js";

const router = express.Router();

//routes

router.get("/foods", getListFoods);
router.get("/food/:id", getFoodById);
router.post("/food", createFood);
router.put("/food/:id", updateFood);
router.delete("/food/:id", deletefood);

export default router;