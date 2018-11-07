const request = require('supertest');
const express = require('express');

const app = express();

app.get('/pictures:listingId', (req, res) => {
    res.status(200).json({imageUrl: 'example.jpg', description: 'lorem ipsum'});
})

describe('GET /pictures:listingID', () => {
    it('should give a JSON repsonse', (done) => {
        request(app)
        .get('/pictures:listingId')
        .send('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done);
    });

    it('should respond with both imageUrls and descriptions', (done) => {
        request(app)
        .get('/pictures:listingId')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
            var expectedInfo = {imageUrl: 'example.jpg', description: 'lorem ipsum'};
            t.same(res.body, expectedInfo, 'Yeah they\'re the same')
            t.end();
        })
    })
})