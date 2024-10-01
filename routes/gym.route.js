import express from "express"
import { gymControllerCreate, gymControllerDelete, gymControllerList, gymControllerUpdate } from "../controllers/gym.controller.js";

const router = express.Router();

router.get('/', gymControllerList)
router.post('/', gymControllerCreate)
router.put('/', gymControllerUpdate)
router.delete('/', gymControllerDelete)

export default router;