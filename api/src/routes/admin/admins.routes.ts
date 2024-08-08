import { Router } from "express";
import { adminLogin } from "../../controllers/admins.controller";

const router = Router();

// * ADMINS
router.post('/login', adminLogin);

export default router;