import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/', (req: Request, res: Response) => res.json({ message: 'API in development', status: 'In process', code: 0 }));
routes.get('*', (req: Request, res: Response) => res.status(404).json({ message: `Route ${req.url} not found`, status: 'NOT FOUND', code: 0 }))

export default routes;