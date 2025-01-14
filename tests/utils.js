const request = require('supertest');
const app = require('../src/app'); // Import your app

const createTicket = async (n) => {
  const response = await request(app).post('/ticket').send({ n });
  return response.body;
};

module.exports = { createTicket };