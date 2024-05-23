import { Router } from 'express';
import { ProductsService } from '../clients/products/ProductsService';

const router = Router();


router.post('/products/{productId}/price', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.postProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/products/{productId}/price', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.getProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/products/{productId}/price/{priceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.getProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/products/{productId}/price/{priceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.putProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/products/{productId}/price/{priceId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.deleteProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/products/{productId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.getProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/products/{productId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.deleteProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/products/{productId}', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.putProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/products/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.postProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/products/', async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await ProductsService.getProducts(authorization, version, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Add other routes here...

export default router;
