# Movie List API - DevOps Project

Prosta aplikacja webowa do zarządzania listą filmów, stworzona na potrzeby projektu z przedmiotu DevOps.

## Technologie

- Node.js
- Express.js
- Jest (testy)
- GitHub Actions (CI/CD)
- Azure App Service

## Endpointy

- `GET /` - Strona główna z informacjami o API
- `GET /movies` - Lista filmów

## Instalacja i uruchomienie
```bash
# Instalacja zależności
npm install

# Uruchomienie testów
npm test

# Uruchomienie aplikacji
npm start
```

Aplikacja dostępna na: http://localhost:3000

## Deployment

Aplikacja automatycznie wdrażana na Azure App Service przez GitHub Actions przy każdym push do main.