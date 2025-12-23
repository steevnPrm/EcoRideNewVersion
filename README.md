# 🌱 EcoRide

EcoRide est une plateforme de covoiturage **éco-responsable** visant à proposer une alternative plus humaine et durable aux solutions existantes.  
Le projet met l’accent sur la **confiance**, la **convivialité** et la **réduction de l’impact environnemental** des déplacements.

---

## 🎯 Objectifs du projet

- Faciliter des déplacements partagés fiables et conviviaux
- Encourager l’éco-mobilité et la réduction des trajets individuels
- Mettre en relation passagers et **conducteurs certifiés**
- Construire une communauté basée sur la confiance et la réputation

---

## 👥 Acteurs & rôles

### Passager
- Consulter les trajets disponibles
- Rejoindre un trajet
- Publier un souhait de déplacement
- Noter un trajet effectué
- Laisser un pourboire volontaire

### Conducteur
- Demander une certification
- Proposer des trajets
- Consulter les souhaits de déplacement
- Recevoir des notes et pourboires

### Administrateur
- Certifier les conducteurs
- Modérer les trajets et les avis
- Superviser l’activité de la plateforme

---

## ⚙️ Fonctionnalités principales

- Consultation des trajets de covoiturage
- Création et gestion de trajets par des conducteurs certifiés
- Système de certification des conducteurs
- Notation et réputation après chaque trajet
- Pourboires volontaires (tips)

---

## 🧱 Architecture & stack technique

### Frontend
- **Next.js 16** (App Router)
- Interface web responsive
- Respect des bonnes pratiques d’accessibilité (RGAA)

### Backend
- **NestJS** (API REST)
- Documentation via Swagger

### Base de données
- **PostgreSQL**
- **Prisma ORM**

### Tests
- **Jest** (tests unitaires backend en priorité)

### Déploiement
- Frontend : **Vercel**
- Backend : **Render**

---

## 🔐 Contraintes réglementaires

### RGPD
- Collecte minimale des données personnelles
- Consentement explicite à l’inscription
- Droit d’accès, de modification et de suppression des données
- Politique de confidentialité accessible

### RGAA
- Navigation clavier
- Contrastes suffisants
- Libellés explicites sur les formulaires
- Structure HTML sémantique
- Messages d’erreur compréhensibles

---

## 🚀 MVP (Minimum Viable Product)

Le MVP a pour objectif de valider l’usage principal de la plateforme.

### Inclus
- Authentification utilisateurs
- Rôles : passager / conducteur / administrateur
- Certification manuelle des conducteurs
- Création et consultation de trajets
- Système de notation simple
- Pourboires simulés (sans paiement réel)

### Exclu (versions futures)
- Paiement réel
- Messagerie entre utilisateurs
- Matching automatique
- Géolocalisation temps réel
- Application mobile native

---

## 📦 Structure du projet

