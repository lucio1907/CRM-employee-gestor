import { Router } from "express";
import { createSuperAdmin } from "../../controllers/superAdmin.controller";
import createSuperAdminMiddleware from "../../middlewares/createSuperAdmin.middleware";

const router = Router();

router.post('/create-superadmin', createSuperAdminMiddleware, createSuperAdmin);

export default router;