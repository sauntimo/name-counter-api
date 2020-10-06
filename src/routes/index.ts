import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import NameCounter from '../services/nameCounter';

// Init router and path
const router = Router();
const nameCounter = new NameCounter();

/**
 * Get name count for a name
 * "GET /api/name-count/:name"
 */
router.get('/:name', async (req: Request, res: Response) => {
    const nameCount = await nameCounter.countName(req.params.name);
    return res.status(StatusCodes.OK).json(nameCount);
});

export default router;
