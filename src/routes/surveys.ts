import { Router } from 'express';
import { SurveysService } from '../clients/surveys/SurveysService';

const router = Router();


router.get('/surveys/submissions', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SurveysService.getSurveys(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/surveys/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SurveysService.getSurveys(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
