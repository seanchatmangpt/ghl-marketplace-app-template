import { Router } from 'express';
import { CompaniesService } from '../clients/companies/CompaniesService';

const router = Router();


router.get('/companies/{companyId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await CompaniesService.getCompanies(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
