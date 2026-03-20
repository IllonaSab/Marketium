# Marketium

Site web connecté à un CMS headless, réalisé dans le cadre d'un workshop de comparaison de frameworks frontend.

## Stack

- **CMS** : Strapi v5
- **API** : GraphQL
- **Frontend** : Angular

## Structure

```
Marketium/
├── backend/            → Strapi
└── frontend/   → Angular
```

## Lancer le projet

**Backend**
```bash
cd backend
npm install
npm run develop
```
→ Admin : http://localhost:1337/admin  
→ GraphQL : http://localhost:1337/graphql

**Frontend**
```bash
cd frontend-angular
npm install
ng serve
```
→ App : http://localhost:4200

## Pages

- Homepage
- Listing articles (pagination + filtre catégorie)
- Single article (slug dynamique)
- Page catégorie
- Login / Register / Forgot & Reset password
- Page /account (profil utilisateur)
