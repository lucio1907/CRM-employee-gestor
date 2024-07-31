import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
import { DecimalDataType } from "sequelize";

// --------- SUPERADMIN ---------- //
export interface SuperAdminBody {
  id: string;
  username: string;
  password: string;
}

export interface SuperAdminLoginTypes {
  username: string;
  password: string;
}

// --------- ADMIN ---------- //
export interface AdminBody {
  id: string;
  username: string;
  password: string;
}

export interface AdminLogin {
  username: string;
  password: string;
}

// --------- SESSION ---------- //
export interface ReqExtended extends Request {
  user?: JwtPayload | { id: string };
}

// --------- BUSSINESS ---------- //
export interface EmployeesTypes {
  name: string;
  lastname: string;
  birth_date: Date;
  genre?: string;
  address?: string;
  phone?: string;
  email: string;
  hired_date: Date;
  department_id?: string;
  position_id?: string;
  supervisor_id?: string;
}

export interface DepartmentsTypes {
  name: string;
  description: string;
}

export interface SupervisorTypes {
  name: string;
  lastname: string;
  email: string;
  phone?: string;
}

export interface PositionTypes {
  name: string,
  description: string,
  base_salary: DecimalDataType
};
