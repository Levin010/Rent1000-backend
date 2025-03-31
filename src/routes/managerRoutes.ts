import express from "express";
import {
    getManager,
    createManager,
    updateManager
} from "../controllers/managerControllers"

const router = express.Router();
/* routing */
router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);


export default router;