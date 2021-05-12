import * as express from 'express';

const namesRouter = express.Router();

namesRouter.get('/', (req, res) => {
  res.json({ message: 'hello, its names router!'} );
})

export default namesRouter;