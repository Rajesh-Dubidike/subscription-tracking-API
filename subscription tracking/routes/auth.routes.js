import { signup ,signIn} from '../controllers/auth.controller.js';

import { Router } from 'express';

const authRouter= Router();

authRouter.post('/sign-up', signup);

authRouter.post('/sign-in', signIn); ;
authRouter.post('/sign-out', (req, res) => res.send({ title: 'Sign out' }));

export default authRouter;