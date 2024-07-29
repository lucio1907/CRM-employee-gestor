import { Router } from "express";
import checkRole from "../../middlewares/checkRole.middleware";
import { createAdmin } from "../../controllers/superAdmin.controller";

const router = Router();

router.post('/create-admin', checkRole, createAdmin);

export default router;