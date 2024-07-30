import { NextFunction, Response } from "express";
import { ReqExtended } from "../types/types";
import { checkToken } from "../utils/jwt.utils";

const checkSession = async (req: ReqExtended, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isUser = await checkToken(`${jwt}`) as unknown as { id: string };
        
        if (!isUser.id) return res.status(400).json({ message: 'Invalid token session', status: 'Bad request', code: 1 });
        else req.user = isUser;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Invalid session', status: 'Internal Server Error', code: 1 });
    }
};

export default checkSession;