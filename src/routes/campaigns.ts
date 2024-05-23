import { Router } from 'express';
import { CampaignsService } from '../clients/campaigns/CampaignsService';

const router = Router();


router.get('/campaigns/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await CampaignsService.getCampaigns(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
