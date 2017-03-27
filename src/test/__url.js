const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const genShortenUrl = require('../src/modules/url');
const app = express();


describe('URLs', () => {
  let server;

  beforeEach(() => {
    server = require('../src/server.js');
  });

  afterEach(() => {
    server.close();
  });

  // This tests for multiple urls
  it('GET /api/v1/url returns all', (done) => {
    request(server)
    .get('/api/v1/url')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const url = res.body;

      // This saves a single url
      this.url = url[0];

      expect(url.length).to.be.above(0);
    })
    .end(done);
  });

// This is a test to create a mini(shortened url)
  it('POST returns a generated shortened URL of 6 characters only', (done) => {
    request(server)
      .post('/api/v1/url')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((req) => {
        const id = genShortUrl.genShortUrl();
        expect(id).to.have.length('6');
      })
      .end(done);
  });

  // This tests for a single url based on the ID
  it('GET /api/v1/urls/:id  Gets the url(s) based on id', (done) => {
    request(server)
        .get('/api/v1/url/' + this.url.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(() => {
          expect(this.url).to.have.property('id');
          expect(this.url).to.have.property('createdOn');
          expect(this.url).to.have.property('alpha_url');
          expect(this.url).to.have.property('short_url');
          expect(this.url).to.have.property('updatedOn');
        })
      .end(done);
  });

  // Update test
  it('POST /api/v1/url/:id  Updates the url(s) based on id', (done) => {
    const body = {
      alpha_url: 'http://www.foureyedsumo.com',
      omega_url: '4EydSo',
    };
    request(server)
        .put('/api/v1/url/' + this.url.id)
        .send(body)
        .expect(() => {
          expect(this.url).to.have.property('id');
          expect(this.url).to.have.property('createdOn');
          expect(this.url).to.have.property('alpha_url');
          expect(this.url).to.have.property('short_url');
          expect(this.url).to.have.property('updatedOn');
        })
      .end(done);
  });

  // This deletes the url based on ID
  it('DELETE deletes a single URL based on id', (done) => {
    request(server)
   .get('/api/v1/url' + this.url.id)
   .set('Accept', 'application/json')
   .expect('Content-Type', /json/);
    app.delete('/api/v1/url/' + this.url.id, (req, res) => {
      res.status(200);
    });
    done();
  });
});
