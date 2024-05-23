import { Router } from 'express';
import { LocationsService } from '../clients/locations/LocationsService';

const router = Router();


router.get('/locations/search', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/locations/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.putLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/locations/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.deleteLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/tags', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/{locationId}/tags', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/tags/{tagId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/locations/{locationId}/tags/{tagId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.putLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/locations/{locationId}/tags/{tagId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.deleteLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/{locationId}/tasks/search', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/customFields', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/{locationId}/customFields', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/customFields/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/locations/{locationId}/customFields/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.putLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/locations/{locationId}/customFields/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.deleteLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/{locationId}/customFields/upload', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/customValues', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/{locationId}/customValues', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/customValues/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/locations/{locationId}/customValues/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.putLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/locations/{locationId}/customValues/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.deleteLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/timezones', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/locations/{locationId}/templates', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.getLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/locations/{locationId}/templates/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.deleteLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/locations/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await LocationsService.postLocations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
