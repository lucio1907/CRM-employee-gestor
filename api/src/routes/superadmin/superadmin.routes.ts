import { Router } from "express";
import { createAdmin, createSuperAdmin, deleteAdmin, superadminLogin } from "../../controllers/superAdmin.controller";
import createSuperAdminMiddleware from "../../middlewares/createSuperAdmin.middleware";
import checkIsSuperadmin from "../../middlewares/checkRole.middleware";
import checkSession from "../../middlewares/sessionMiddleware.middleware";

const router = Router();

router.post('/create-superadmin', createSuperAdminMiddleware, createSuperAdmin);

router.post('/login', superadminLogin);

router.post('/create-admin', checkIsSuperadmin, checkSession, createAdmin);

router.delete('/delete-admin', checkIsSuperadmin, checkSession, deleteAdmin);

export default router;