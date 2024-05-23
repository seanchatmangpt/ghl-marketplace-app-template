import { Router } from 'express';
import { FunnelsService } from '../clients/funnels/FunnelsService';

const router = Router();


router.post('/funnels/lookup/redirect', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.postFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/funnels/lookup/redirect/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.patchFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/funnels/lookup/redirect/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.deleteFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/funnels/lookup/redirect/list', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.getFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/funnels/funnel/list', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.getFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/funnels/page', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FunnelsService.getFunnels(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
