import birrePreferite from "../data.js";
import birController from "../controller/bircontroller.js";
import express from "express";
const router = express.Router();

// ROTTE

// INDEX
router.get("/", birController.index);

// SHOW
router.get("/:id", birController.show);

// STORE
router.post("/", birController.store);

// UPDATE
router.put("/:id",birController.update);

// DESTROY
router.delete("/:id", birController.destroy);

export default router