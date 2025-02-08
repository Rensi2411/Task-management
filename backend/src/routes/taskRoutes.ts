import express from 'express';
import * as taskController from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/',  authMiddleware, taskController.getTasks);
router.post('/', authMiddleware, taskController.createTask);

export default router;
