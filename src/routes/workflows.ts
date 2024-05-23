import { Router } from 'express';
import { WorkflowsService } from '../clients/workflows/WorkflowsService';

const router = Router();


router.get('/workflows/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await WorkflowsService.getWorkflows(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
