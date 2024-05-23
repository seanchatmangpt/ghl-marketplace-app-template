import { Router } from 'express';
import { Saas-apiService } from '../clients/saas-api/Saas-apiService';

const router = Router();


router.get('/saas-api/public-api/locations', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.getSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/saas-api/public-api/update-saas-subscription/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.putSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/saas-api/public-api/bulk-disable-saas/{companyId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.postSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/saas-api/public-api/enable-saas/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.postSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/saas-api/public-api/pause/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.postSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/saas-api/public-api/update-rebilling/{companyId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Saas-apiService.postSaas-api(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
