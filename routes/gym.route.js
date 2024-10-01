import express from "express"
import { gymControllerCreate, gymControllerDelete, gymControllerList, gymControllerDetails, gymControllerUpdate } from "../controllers/gym.controller.js";

const router = express.Router();

router.get('/', gymControllerList)
router.get('/:id', gymControllerDetails)
router.post('/', gymControllerCreate)
router.put('/:id', gymControllerUpdate)
router.delete('/:id', gymControllerDelete)

export default router;