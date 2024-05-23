import { Router } from 'express';
import { ConversationsService } from '../clients/conversations/ConversationsService';

const router = Router();


router.get('/conversations/search', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/conversations/{conversationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/conversations/{conversationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.putConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/conversations/{conversationId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.deleteConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/conversations/messages/email/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/conversations/messages/email/{emailMessageId}/schedule', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.deleteConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/conversations/messages/{id}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/conversations/{conversationId}/messages', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/conversations/messages', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.postConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/conversations/messages/inbound', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.postConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/conversations/messages/{messageId}/schedule', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.deleteConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/conversations/messages/upload', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.postConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/conversations/messages/{messageId}/status', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.putConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/conversations/messages/{messageId}/locations/{locationId}/recording', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.getConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/conversations/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ConversationsService.postConversations(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
