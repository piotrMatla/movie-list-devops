const request = require('supertest');
const app = require('./app');

describe('Movie List API', () => {
    test('GET / should return welcome message and endpoints', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Welcome to' +
            ' Movie List API');
    });
    test('GET /movies should return list of movies', async () => {
        const response = await request(app).get('/movies');
        expect(response.statusCode).toBe(200);
        expect(response.body.count).toBe(4);
        expect(response.body.movies.length).toBe(4);
    });
});