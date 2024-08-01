import { Router } from "express";
import { adminLogin, createEmployee, getAllEmployees, getSpecificEmployee } from "../../controllers/admins.controller";
import checkSession from "../../middlewares/sessionMiddleware.middleware";

const router = Router();

// * ADMINS
router.post('/login', adminLogin);

// * BUSSINESS
router.post('/create-employee', checkSession, createEmployee);
router.get('/employees', checkSession, getAllEmployees);
router.get('/employee/:name/:lastname', checkSession, getSpecificEmployee);

export default router;