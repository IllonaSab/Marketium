# Marketium

Site web connecté à un CMS headless. Projet réalisé lors d’un workshop de comparaison de frameworks frontend.

## ✨ Fonctionnalités

- Page d’accueil
- Liste d’articles avec pagination et filtre par catégorie
- Page article (slug dynamique)
- Page catégorie
- Authentification : inscription, connexion, mot de passe oublié et réinitialisation
- Page `/account` (profil utilisateur)

## 🛠️ Stack

- **Frontend :** Angular 21, Apollo Angular, RxJS, SCSS
- **CMS :** Strapi 5 (headless)
- **API :** GraphQL
- **Base de données :** SQLite (en développement)
- **Authentification :** plugin Users & Permissions de Strapi

## 📁 Structure

```
Marketium/
├── backend/    Strapi (articles, catégories, navigation)
└── frontend/   Angular
```

## 🚀 Lancer le projet

Prérequis : Node.js et npm.

**1. Backend**

```bash
cd backend
npm install
npm run develop
```

- Admin : http://localhost:1337/admin
- GraphQL : http://localhost:1337/graphql

**2. Frontend**

```bash
cd frontend
npm install
npm start
```

- Application : http://localhost:4200

## 🔐 Configuration

Au premier lancement, crée un compte administrateur sur `/admin`.
Pour que le site lise les contenus, autorise l’accès public (`find` et `findOne`) sur les types de contenu dans *Settings → Users & Permissions → Roles → Public*.

## 📫 Contact

[LinkedIn](https://www.linkedin.com/in/illona-saboundjian/) · [GitHub](https://github.com/IllonaSab)
