import { Router } from 'express';
import { OauthService } from '../clients/oauth/OauthService';

const router = Router();


router.post('/oauth/token', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OauthService.postOauth(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/oauth/locationToken', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OauthService.postOauth(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/oauth/installedLocations', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await OauthService.getOauth(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
