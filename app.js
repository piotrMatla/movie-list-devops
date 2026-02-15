const express = require('express');
const app = express();

const movies = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994, genere: 'Drama' },
    { id: 2, title: 'The Godfather', year: 1972, genere: 'Crime' },
    { id: 3, title: 'The Dark Knight', year: 2008, genere: 'Action' },
    { id: 4, title: 'Matrix', year: 1999, genere: 'Action' },
    ];

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Movie List API',
        endpoints: {
            home: '/',
            movies: '/movies'
        }
    });
});

app.get('/movies', (req, res) => {
    res.json({
        count: movies.length,
        movies: movies
    });
});

module.exports = app;