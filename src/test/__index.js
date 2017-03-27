const expect = require('chai').expect;
const request = require('supertest');
const server = require('../src/server.js');

// This is for Unit Test

describe('API Routes', () => {
  //eslint
  afterEach(() => {
    server.close();
  });

  it('/ should return specified JSON object', (done) => {
    request(server)
    .get('/')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { main: 'Boom!' }, done);
  });

  it('/status should return specified JSON object', (done) => {
    request(server)
    .get('/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, { healthy: true }, done);
  });

  // This test for go shortenedURL
  it('/go/:shortenedURL should redirect the user to long URL', (done) => {
    request(server)
  .get('/go/4EydSo') // This must be in the database
  .expect(302, done);
  });
});
