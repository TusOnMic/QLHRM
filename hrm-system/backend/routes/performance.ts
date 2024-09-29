import { Router } from 'express';
import { createPerformanceEvaluation, getPerformanceEvaluations } from '../controllers/performanceController';

const router = Router();

router.post('/', createPerformanceEvaluation);
router.get('/', getPerformanceEvaluations);

export default router;
