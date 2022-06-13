import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controlles/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE Room
router.post("/:hotelid", verifyAdmin, createRoom);
// UPDATE Room
router.put("/:id", verifyAdmin, updateRoom);
// DELETE Room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// GET a specific Room
router.get("/:id", getRoom);
// GET ALL Rooms
router.get("/", getRooms);

export default router;
