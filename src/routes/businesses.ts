import { Router } from "express";
import { BusinessesService } from "../clients/businesses/services/BusinessesService";

const router = Router();

router.put("/businesses/:businessId", async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  const { businessId } = req.params;
  try {
    const result = await BusinessesService.updateBusiness(
      authorization,
      version,
      businessId,
      requestBody,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/businesses/:businessId", async (req, res) => {
  const { authorization, version } = req.body;
  const { businessId } = req.params;
  try {
    const result = await BusinessesService.deleteBusiness(
      authorization,
      version,
      businessId,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/businesses/:businessId", async (req, res) => {
  const { authorization, version } = req.body;
  const { businessId } = req.params;
  try {
    const result = await BusinessesService.getBusiness(
      authorization,
      version,
      businessId,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/businesses", async (req, res) => {
  const { authorization, version } = req.body;
  const { locationId } = req.query;
  try {
    const result = await BusinessesService.getBusinessesByLocation(
      authorization,
      version,
      locationId as string,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/businesses", async (req, res) => {
  const { authorization, version, requestBody } = req.body;
  try {
    const result = await BusinessesService.createBusiness(
      authorization,
      version,
      requestBody,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add other routes here...

export default router;
