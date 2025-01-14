const request = require('supertest');
const app = require('../src/app');
const { createTicket } = require('./utils');

describe('Ticket API Tests', () => {
  let createdTicket;

  beforeAll(async () => {
    // Setup logic (if any)
  });

  afterAll(async () => {
    // Cleanup logic (if any)
  });

  // --- Unit Tests ---

  test('POST /ticket - Create a ticket', async () => {
    const response = await request(app).post('/ticket').send({ n: 3 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.lines.length).toBe(3);
    createdTicket = response.body;
  });

  test('GET /ticket - Retrieve all tickets', async () => {
    const response = await request(app).get('/ticket');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /ticket/:id - Retrieve a specific ticket', async () => {
    const response = await request(app).get(`/ticket/${createdTicket.id}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', createdTicket.id);
    expect(response.body).toHaveProperty('lines');
  });

  test('PUT /ticket/:id - Amend a ticket', async () => {
    const response = await request(app)
      .put(`/ticket/${createdTicket.id}`)
      .send({ n: 2 });
    expect(response.status).toBe(200);
    expect(response.body.lines.length).toBe(5); // Original 3 + 2 new lines
  });

  test('PUT /status/:id - Check ticket status', async () => {
    const response = await request(app).put(`/status/${createdTicket.id}`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    response.body.forEach((line) => {
      expect(line).toHaveProperty('line');
      expect(line).toHaveProperty('result');
    });

    // Ensure ticket cannot be amended after checking status
    const amendResponse = await request(app)
      .put(`/ticket/${createdTicket.id}`)
      .send({ n: 1 });
    expect(amendResponse.status).toBe(400); // Should return an error
  });

  // --- E2E Tests ---

  test('E2E: Create -> Amend -> Check Status', async () => {
    // Create a new ticket
    const newTicket = await createTicket(3);
    expect(newTicket.lines.length).toBe(3);

    // Amend the ticket
    const amendedResponse = await request(app)
      .put(`/ticket/${newTicket.id}`)
      .send({ n: 2 });
    expect(amendedResponse.body.lines.length).toBe(5);

    // Check status
    const statusResponse = await request(app).put(`/status/${newTicket.id}`);
    expect(statusResponse.body.length).toBe(5);
    expect(statusResponse.body[0]).toHaveProperty('result');

    // Verify ticket cannot be amended
    const amendResponse = await request(app)
      .put(`/ticket/${newTicket.id}`)
      .send({ n: 1 });
    expect(amendResponse.status).toBe(400);
  });
});
