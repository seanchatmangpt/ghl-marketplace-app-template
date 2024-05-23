import { Router } from 'express';
import { FormsService } from '../clients/forms/FormsService';

const router = Router();


router.get('/forms/submissions', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FormsService.getForms(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/forms/upload-custom-files', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FormsService.postForms(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/forms/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await FormsService.getForms(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
