import { Router } from "express";
import { getHome, writeHome } from "../controllers/home.controller.js";

const router  = Router();

router.get('/', getHome);
router.post('/', writeHome);


export default router;
