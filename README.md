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
- `GET /movies/:id` - Pojedynczy film po ID

## Instalacja i uruchomienie

### Lokalnie (Node.js)
```bash
# Instalacja zależności
npm install

# Uruchomienie testów
npm test

# Uruchomienie aplikacji
npm start
```

Aplikacja dostępna na: http://localhost:3000

### Docker
```bash
# Build i uruchomienie
docker build -t movie-list-app .
docker run -p 3000:3000 movie-list-app

# Lub docker-compose
docker-compose up
```

## CI/CD Pipeline

- **CI**: Automatyczne testy przy Pull Requestach
- **CD**: Automatyczne wdrożenie na Azure App Service przy push do `main`
- **Workflow**: `.github/workflows/main_movie-list-app-pm.yml`

## Deployment

Aplikacja automatycznie wdrażana na Azure App Service (dostępna pod adresem 
https://movie-list-app-pm-hhctd0azdhahf2em.germanywestcentral-01.azurewebsites.net/) przez GitHub Actions przy 
każdym push do 
main.

