
import { Express } from 'express';
import businessesRoutes from './businesses';
import calendarsRoutes from './calendars';
import campaignsRoutes from './campaigns';
import companiesRoutes from './companies';
import contactsRoutes from './contacts';
import conversationsRoutes from './conversations';
import coursesRoutes from './courses';
import formsRoutes from './forms';
import funnelsRoutes from './funnels';
import invoicesRoutes from './invoices';
import linksRoutes from './links';
import locationsRoutes from './locations';
import mediasRoutes from './medias';
import oauthRoutes from './oauth';
import opportunitiesRoutes from './opportunities';
import paymentsRoutes from './payments';
import productsRoutes from './products';
import saas-apiRoutes from './saas-api';
import snapshotsRoutes from './snapshots';
import social-media-postingRoutes from './social-media-posting';
import surveysRoutes from './surveys';
import usersRoutes from './users';
import workflowsRoutes from './workflows';

const registerRoutes = (app: Express) => {
  app.use('/businesses', businessesRoutes);
app.use('/calendars', calendarsRoutes);
app.use('/campaigns', campaignsRoutes);
app.use('/companies', companiesRoutes);
app.use('/contacts', contactsRoutes);
app.use('/conversations', conversationsRoutes);
app.use('/courses', coursesRoutes);
app.use('/forms', formsRoutes);
app.use('/funnels', funnelsRoutes);
app.use('/invoices', invoicesRoutes);
app.use('/links', linksRoutes);
app.use('/locations', locationsRoutes);
app.use('/medias', mediasRoutes);
app.use('/oauth', oauthRoutes);
app.use('/opportunities', opportunitiesRoutes);
app.use('/payments', paymentsRoutes);
app.use('/products', productsRoutes);
app.use('/saas-api', saas-apiRoutes);
app.use('/snapshots', snapshotsRoutes);
app.use('/social-media-posting', social-media-postingRoutes);
app.use('/surveys', surveysRoutes);
app.use('/users', usersRoutes);
app.use('/workflows', workflowsRoutes);
};

export default registerRoutes;
  