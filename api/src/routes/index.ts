import { Request, Response, Router } from "express";
import superadminRouter from "./superadmin/superadmin.routes";
import errorHandler from "../middlewares/errorHandler.middlewares";
import adminRouter from "./admin/admins.routes";

const routes = Router();

routes.use('/superadmin', superadminRouter)
routes.use('/admins', adminRouter);

routes.use(errorHandler);

routes.get('/', (req: Request, res: Response) => res.json({ message: 'API in development', status: 'In process', code: 0 }));
routes.get('*', (req: Request, res: Response) => res.status(404).json({ message: `Route ${req.url} not found`, status: 'NOT FOUND', code: 0 }))

export default routes;