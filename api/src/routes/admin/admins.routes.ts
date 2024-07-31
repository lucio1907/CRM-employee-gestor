import { Router } from "express";
import { adminLogin, createEmployee, getAllEmployees } from "../../controllers/admins.controller";
import checkSession from "../../middlewares/sessionMiddleware.middleware";

const router = Router();

router.post('/login', adminLogin);

router.post('/create-employee', checkSession, createEmployee);
router.get('/employees', checkSession, getAllEmployees);

export default router;