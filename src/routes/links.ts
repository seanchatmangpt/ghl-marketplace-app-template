import { Router } from 'express';
import { LinksService } from '../clients/links/LinksService';

const router = Router();


router.put('/links/{linkId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LinksService.putLinks(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/links/{linkId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LinksService.deleteLinks(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/links/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LinksService.getLinks(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/links/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LinksService.postLinks(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
