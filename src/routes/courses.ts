import { Router } from 'express';
import { CoursesService } from '../clients/courses/CoursesService';

const router = Router();


router.post('/courses/courses-exporter/public/import', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await CoursesService.postCourses(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
