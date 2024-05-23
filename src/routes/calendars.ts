import { Router } from 'express';
import { CalendarsService } from '../clients/calendars/services/CalendarsService';

const router = Router();

router.get('/calendars/:calendarId/free-slots', async (req, res) => {
  const { authorization, startDate, endDate, timezone, userId } = req.query;
  const { calendarId } = req.params;
  try {
    const result = await CalendarsService.getSlots(
      authorization as string,
      "2021-04-15",
      calendarId,
      startDate as string,
      endDate as string,
      timezone as string,
      userId as string
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/calendars/:calendarId', async (req, res) => {
  const { authorization } = req.headers;
  const { calendarId } = req.params;
  const requestBody = req.body;
  try {
    const result = await CalendarsService.updateCalendar(authorization, "2021-04-15", calendarId, requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/calendars/:calendarId', async (req, res) => {
  const { authorization } = req.headers;
  const { calendarId } = req.params;
  try {
    const result = await CalendarsService.getCalendar(authorization, "2021-04-15", calendarId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/calendars/:calendarId', async (req, res) => {
  const { authorization } = req.headers;
  const { calendarId } = req.params;
  try {
    const result = await CalendarsService.deleteCalendar(authorization, "2021-04-15", calendarId);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/calendars', async (req, res) => {
  const { authorization, locationId, groupId, showDrafted } = req.query;
  try {
    const result = await CalendarsService.getCalendars(
      authorization as string,
      "2021-04-15",
      locationId as string,
      groupId as string,
      showDrafted as unknown as boolean
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/calendars', async (req, res) => {
  const { authorization } = req.headers;
  const requestBody = req.body;
  try {
    const result = await CalendarsService.createCalendar(authorization, "2021-04-15", requestBody);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;

