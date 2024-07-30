import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

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
