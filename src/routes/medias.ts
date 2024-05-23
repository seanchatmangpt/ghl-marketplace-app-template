import { Router } from 'express';
import { MediasService } from '../clients/medias/MediasService';

const router = Router();


router.get('/medias/files', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await MediasService.getMedias(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/medias/upload-file', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await MediasService.postMedias(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/medias/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await MediasService.deleteMedias(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
