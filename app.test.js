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
    test('GET /movies/:id should return single movie', async () => {
        const response = await request(app).get('/movies/1');
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
        expect(response.body.title).toBe('The Shawshank Redemption');
    });
    test('GET /movies/:id should return 404 for non-existent movie', async () => {
        const response = await request(app).get('/movies/999');
        expect(response.statusCode).toBe(404);
        expect(response.body.error).toBe('Movie not found');
    });
});