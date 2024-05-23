import request from 'supertest';
import { app, server } from '../src';
import nock from 'nock';
import { faker } from '@faker-js/faker';
import { afterEach, describe, it, expect, beforeAll, afterAll } from 'vitest';

describe('Contacts API CRUD operations', () => {
  const BASE_URL = 'https://services.leadconnectorhq.com';
  const AUTHORIZATION = 'Bearer test-token';
  const VERSION = '2021-07-28';
  const CONTACT_ID = faker.datatype.uuid();
  const COMPANY_ID = faker.datatype.uuid();

  const fakeContact = {
    id: CONTACT_ID,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address1: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    country: faker.location.country(),
    postalCode: faker.location.zipCode(),
  };

  beforeAll(() => {
    // Start server before all tests
    server.listen(3000, () => console.log('Server started on port 3000'));
  });

  afterAll(() => {
    // Close server after all tests
    server.close(() => console.log('Server closed'));
  });

  afterEach(() => {
    // Clean all nock interceptors after each test
    nock.cleanAll();
  });

  it('Create a new contact', async () => {
    nock(BASE_URL)
      .post('/contacts/')
      .reply(200, fakeContact);

    const response = await request(app)
      .post('/contacts')
      .send({ companyId: COMPANY_ID, ...fakeContact })
      .set('Authorization', AUTHORIZATION)
      .set('Version', VERSION);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(fakeContact);
  });

  it('Get a contact by ID', async () => {
    nock(BASE_URL)
      .get(`/contacts/${CONTACT_ID}`)
      .reply(200, fakeContact);

    const response = await request(app)
      .get(`/contacts/${CONTACT_ID}`)
      .query({ companyId: COMPANY_ID })
      .set('Authorization', AUTHORIZATION)
      .set('Version', VERSION);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(fakeContact);
  });

  it('Update a contact by ID', async () => {
    const updatedContact = { ...fakeContact, name: faker.person.fullName() };

    nock(BASE_URL)
      .put(`/contacts/${CONTACT_ID}`)
      .reply(200, updatedContact);

    const response = await request(app)
      .put(`/contacts/${CONTACT_ID}`)
      .send({ companyId: COMPANY_ID, ...updatedContact })
      .set('Authorization', AUTHORIZATION)
      .set('Version', VERSION);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(updatedContact);
  });

  it('Delete a contact by ID', async () => {
    nock(BASE_URL)
      .delete(`/contacts/${CONTACT_ID}`)
      .reply(200, { success: true });

    const response = await request(app)
      .delete(`/contacts/${CONTACT_ID}`)
      .query({ companyId: COMPANY_ID })
      .set('Authorization', AUTHORIZATION)
      .set('Version', VERSION);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ success: true });
  });
});
