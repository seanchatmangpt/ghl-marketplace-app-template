import { Router } from 'express';
import { ContactsService } from '../clients/contacts/ContactsService';

const router = Router();


router.get('/contacts/search/duplicate', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}/tasks', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/tasks', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}/tasks/{taskId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/contacts/{contactId}/tasks/{taskId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.putContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/tasks/{taskId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/contacts/{contactId}/tasks/{taskId}/completed', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.putContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}/appointments', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/tags', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/tags', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}/notes', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/notes', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}/notes/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/contacts/{contactId}/notes/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.putContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/notes/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/bulk/business', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/{contactId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/contacts/{contactId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.putContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/upsert', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/business/{businessId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/followers', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/followers', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/campaigns/{campaignId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/campaigns/{campaignId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/campaigns/removeAll', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/{contactId}/workflow/{workflowId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/contacts/{contactId}/workflow/{workflowId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.deleteContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/contacts/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.postContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/contacts/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ContactsService.getContacts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
