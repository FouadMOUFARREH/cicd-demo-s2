# CI/CD Demo 
Mini API Node.js/Express utilisée pour construire progressivement un pipeline CI avec GitHub Actions.

## Pré-requis
- Git
- Node.js 20 ou plus récent
- npm
- Docker Desktop

## Installation
```bash
npm install
```

## Exécution locale
```bash
npm start
```

Tester ensuite :
- http://localhost:3000/api/health
- http://localhost:3000/api/calcul/ttc?prix=100&tva=20

## Tests
```bash
npm test
```

## Lint
```bash
npm run lint
```

## Docker
```bash
docker build -t cicd-demo-s2 .
docker run --rm -p 3000:3000 cicd-demo-s2
```

## Remarque pour le TP
Le dépôt ne contient volontairement pas de fichier `.github/workflows/ci.yml` au départ. Ce workflow sera construit pendant la séance.
