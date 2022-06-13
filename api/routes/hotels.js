import express from "express";
import { createHotel, updateHotel, deleteHotel, getHotel, getHotels } from "../controlles/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);
// UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
// GET a specific hotel
router.get("/:id", getHotel);
// GET ALL hotels
router.get("/", getHotels);

export default router;
