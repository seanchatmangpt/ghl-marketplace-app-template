import { Router } from 'express';
import { Social-media-postingService } from '../clients/social-media-posting/Social-media-postingService';

const router = Router();


router.get('/social-media-posting/oauth/google/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/google/locations/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/google/locations/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/{locationId}/posts/list', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/{locationId}/posts', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/{locationId}/posts/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/social-media-posting/{locationId}/posts/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.putSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/social-media-posting/{locationId}/posts/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.deleteSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/{locationId}/accounts', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/social-media-posting/{locationId}/accounts/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.deleteSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/facebook/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/facebook/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/instagram/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/instagram/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/linkedin/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/linkedin/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/twitter/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/twitter/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/tiktok/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/social-media-posting/oauth/{locationId}/tiktok/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.postSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/tiktok-business/start', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/social-media-posting/oauth/{locationId}/tiktok-business/accounts/{accountId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await Social-media-postingService.getSocial-media-posting(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
