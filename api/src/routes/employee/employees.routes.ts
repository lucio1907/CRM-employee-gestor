import { Router } from "express";
import checkSession from "../../middlewares/sessionMiddleware.middleware";
import {
  createEmployee,
  getAllEmployees,
  getSpecificEmployee,
} from "../../controllers/employees.controller";

const router = Router();

router.post("/create-employee", checkSession, createEmployee);
router.get("/getall", checkSession, getAllEmployees);
router.get("/getemployee/:name/:lastname", checkSession, getSpecificEmployee);

export default router;
