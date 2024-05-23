import { Router } from 'express';
import { SnapshotsService } from '../clients/snapshots/SnapshotsService';

const router = Router();


router.get('/snapshots/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SnapshotsService.getSnapshots(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/snapshots/share/link', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SnapshotsService.postSnapshots(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/snapshots/snapshot-status/{snapshotId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SnapshotsService.getSnapshots(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/snapshots/snapshot-status/{snapshotId}/location/{locationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await SnapshotsService.getSnapshots(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
