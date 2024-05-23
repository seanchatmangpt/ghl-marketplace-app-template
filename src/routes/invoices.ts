import { Router } from 'express';
import { InvoicesService } from '../clients/invoices/InvoicesService';

const router = Router();


router.post('/invoices/template', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/template', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/template/{templateId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/invoices/template/{templateId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.putInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/invoices/template/{templateId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.deleteInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/schedule', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/schedule', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/schedule/{scheduleId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/invoices/schedule/{scheduleId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.putInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/invoices/schedule/{scheduleId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.deleteInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/schedule/{scheduleId}/schedule', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/schedule/{scheduleId}/auto-payment', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/schedule/{scheduleId}/cancel', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/text2pay', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/generate-invoice-number', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/{invoiceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/invoices/{invoiceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.putInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/invoices/{invoiceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.deleteInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/{invoiceId}/void', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/{invoiceId}/send', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/{invoiceId}/record-payment', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/invoices/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.postInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/invoices/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await InvoicesService.getInvoices(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
