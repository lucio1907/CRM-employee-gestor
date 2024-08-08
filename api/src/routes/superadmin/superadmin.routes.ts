import { Router } from "express";
import {
  createAdmin,
  createDepartment,
  createPosition,
  createSuperAdmin,
  createSupervisor,
  deleteAdmin,
  getAdminByUsername,
  getAdmins,
  superadminLogin,
} from "../../controllers/superAdmin.controller";
import createSuperAdminMiddleware from "../../middlewares/createSuperAdmin.middleware";
import checkIsSuperadmin from "../../middlewares/checkRole.middleware";
import checkSession from "../../middlewares/sessionMiddleware.middleware";

const router = Router();

// * ADMINS
router.post('/create-superadmin', createSuperAdminMiddleware, createSuperAdmin);
router.post('/login', superadminLogin);
router.post('/create-admin', checkIsSuperadmin, checkSession, createAdmin);
router.delete('/delete-admin', checkIsSuperadmin, checkSession, deleteAdmin);
router.get('/getadmins', checkIsSuperadmin, checkSession, getAdmins);
router.get('/getadminbyuser/:username', checkIsSuperadmin, checkSession, getAdminByUsername);

// * BUSSINESS
router.post('/create-department', checkIsSuperadmin, checkSession, createDepartment);
router.post('/create-supervisor', checkIsSuperadmin, checkSession, createSupervisor);
router.post('/create-position', checkIsSuperadmin, checkSession, createPosition);

export default router;