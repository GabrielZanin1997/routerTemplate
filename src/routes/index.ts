import * as express from 'express';
import namesRouter from './names.routes';
import sitesRouter from './sites.routes';

const routes = express.Router();

routes.use('/names', namesRouter);
routes.use('/sites', sitesRouter);

export default routes;
