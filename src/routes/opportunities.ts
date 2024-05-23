import { Router } from 'express';
import { OpportunitiesService } from '../clients/opportunities/OpportunitiesService';

const router = Router();


router.get('/opportunities/search', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.getOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/opportunities/pipelines', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.getOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/opportunities/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.getOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/opportunities/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.deleteOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/opportunities/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.putOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/opportunities/{id}/status', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.putOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/opportunities/upsert', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.postOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/opportunities/{id}/followers', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.postOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/opportunities/{id}/followers', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.deleteOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/opportunities/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OpportunitiesService.postOpportunities(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
