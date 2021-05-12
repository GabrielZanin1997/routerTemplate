import * as express from 'express';

const sitesRouter = express.Router();

sitesRouter.get('/', (req, res) => {
  res.json({ message: 'Hey, here we have a sites router' });
});

export default sitesRouter;