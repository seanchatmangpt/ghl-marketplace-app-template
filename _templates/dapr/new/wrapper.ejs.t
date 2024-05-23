---
to: src/routes/<%= h.changeCase.camel(name) %>.ts
---
import { Router } from 'express';
import { <%= name %>Service } from '../clients/<%= name.toLowerCase() %>/<%= name %>Service';

const router = Router();

<% JSON.parse(routes).forEach(route => { %>
router.<%= route.method %>('<%= route.route %>', async (req, res) => {
  const { authorization, version } = req.headers;
  const { requestBody, businessId, locationId } = req.body || req.params;
  try {
    const result = await <%= name %>Service.<%= route.functionName %>(authorization as string, version as string, businessId || locationId, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});
<% }) %>

export default router;
