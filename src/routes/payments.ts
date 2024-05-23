import { Router } from 'express';
import { PaymentsService } from '../clients/payments/PaymentsService';

const router = Router();


router.post('/payments/integrations/provider/whitelabel', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.postPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/integrations/provider/whitelabel', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/orders', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/orders/{orderId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/payments/orders/{orderId}/fulfillments', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.postPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/orders/{orderId}/fulfillments', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/transactions', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/transactions/{transactionId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/subscriptions', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/payments/subscriptions/{subscriptionId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await PaymentsService.getPayments(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
