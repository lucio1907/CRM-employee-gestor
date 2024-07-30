import { sign, verify } from "jsonwebtoken";
import configServer from "../config/configServer.config";

const JWT_SECRET = configServer.jwt.secret_key;
const EXPIRESIN = configServer.jwt.expiration;

export const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: EXPIRESIN,
  });
  return jwt;
};

export const checkToken = async (jwt: string) => {
  const isOk = verify(jwt, JWT_SECRET);
  return isOk;
};
