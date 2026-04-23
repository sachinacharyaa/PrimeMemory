# PrimeMemory (SecondBrain) - Detailed Project Guide

PrimeMemory is a full-stack web app for saving and organizing useful links/content, then sharing a public read-only "brain" view with others using a generated short hash link.

This repository is organized as a two-app workspace:

- `frontend` - React + Vite + TypeScript client
- `backend` - Express + TypeScript + MongoDB API

---

## 1) What This Project Does

Core user flow:

1. User signs up / signs in.
2. User stores content items (title, link, type).
3. User sees all personal items on dashboard.
4. User can update/delete items.
5. User can generate a share link.
6. Anyone with `/share/:shareId` can view shared content publicly.

Current branding in UI identifies product as **PrimeMemory**.

---

## 2) Tech Stack

### Frontend (`frontend`)

- React 19
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS v4
- ESLint (frontend only)

### Backend (`backend`)

- Node.js + Express 5
- TypeScript (compiled to `dist`)
- MongoDB with Mongoose
- JSON Web Tokens (`jsonwebtoken`)
- CORS

---

## 3) Repository Structure

```text
secondBrain/
├── frontend/
│   ├── src/
│   │   ├── pages/              # Landing, auth, dashboard
│   │   ├── component/          # Reusable UI and content cards/modals
│   │   ├── hooks/              # Data hooks (e.g. useContent)
│   │   ├── Icon/               # Icon components
│   │   ├── App.tsx             # Route map
│   │   └── config.ts           # Frontend API base URL
│   ├── package.json
│   └── ...
├── backend/
│   ├── src/
│   │   ├── index.ts            # Express server + all API routes
│   │   ├── db.ts               # Mongo connection + schemas/models
│   │   ├── middleware.ts       # JWT auth middleware
│   │   ├── config.ts           # JWT secret constant
│   │   └── utils.ts            # Helper utilities
│   ├── package.json
│   └── ...
└── READ.md
```

---

## 4) Routing Overview

Defined in `frontend/src/App.tsx`:

- `/` -> Landing page
- `/signup` -> Signup screen
- `/signin` -> Signin screen
- `/dashboard` -> Private dashboard (token expected in localStorage)
- `/share/:shareId` -> Public shared dashboard view
- `*` -> basic fallback "Content Not Found"

---

## 5) Backend API Reference

Base URL (current frontend config): `http://localhost:3000`

### Auth

#### `POST /api/v1/signup`

Creates a new user.

Request body:

```json
{
  "username": "alice",
  "password": "secret"
}
```

Response (success):

```json
{ "message": "User Signed Up" }
```

Possible failure:

- `411` if username already exists

---

#### `POST /api/v1/signin`

Authenticates user and returns JWT.

Request body:

```json
{
  "username": "alice",
  "password": "secret"
}
```

Response (success):

```json
{ "token": "<jwt>" }
```

Possible failure:

- `403` invalid credentials

---

### Content (Protected - requires `Authorization: Bearer <token>`)

#### `POST /api/v1/content`

Create content item.

Request body:

```json
{
  "title": "My link",
  "link": "https://example.com",
  "type": "article"
}
```

Response:

```json
{ "message": "Content Added" }
```

#### `GET /api/v1/content`

Returns current user's content list.

Response:

```json
{
  "content": [
    {
      "_id": "...",
      "title": "My link",
      "link": "https://example.com",
      "type": "article",
      "userId": { "_id": "...", "username": "alice" }
    }
  ]
}
```

#### `PUT /api/v1/content/:id`

Update one content item belonging to user.

Request body:

```json
{
  "title": "Updated",
  "link": "https://example.com/new",
  "type": "article"
}
```

Response:

```json
{ "message": "Content updated" }
```

Possible failure:

- `404` if content not found for this user

#### `DELETE /api/v1/content/:id`

Delete one content item belonging to user.

Response:

```json
{ "message": "Deleted" }
```

---

### Share Brain

#### `POST /api/v1/brain/share` (Protected)

If body has `"share": true`, generates (or reuses) a unique hash for current user.

Request:

```json
{ "share": true }
```

Response:

```json
{ "hash": "abc123def0" }
```

If `"share"` is falsey, existing share link is removed:

```json
{ "message": "Link removed" }
```

#### `GET /api/v1/brain/:shareLink` (Public)

Returns shared content and username for hash.

Response:

```json
{
  "username": "alice",
  "content": [ ... ]
}
```

Possible failure:

- `411` invalid share link

---

## 6) Data Model (Mongoose)

Defined in `backend/src/db.ts`.

### `User`

- `username: string` (unique)
- `password: string`

### `content`

- `title: string`
- `link: string`
- `tags: ObjectId[]` (ref `"Tag"`, no Tag schema currently implemented)
- `type: string`
- `userId: ObjectId` (ref `"User"`, required)

### `Links`

- `hash: string`
- `userId: ObjectId` (ref `"User"`, required, unique)

---

## 7) Authentication and Authorization

Auth middleware (`backend/src/middleware.ts`) expects:

- Header: `Authorization: Bearer <token>`
- Token signed with backend `JWT_PASSWORD`
- Decoded payload includes `id`

On success:

- `req.userId` is attached and used in protected queries

On failure:

- `403` returned

---

## 8) Local Development Setup

## Prerequisites

- Node.js 18+ (recommended)
- npm
- Internet access to MongoDB Atlas (current connection is cloud-hosted)

### A) Backend

```bash
cd backend
npm install
npm run build
npm run start
```

Backend listens on:

- `http://localhost:3000`

Note:

- Current `npm run dev` is **not** watch mode. It runs `build` then `start`.

### B) Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend default:

- `http://localhost:5173`

---

## 9) Existing Scripts

### Frontend scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check/build frontend bundle
- `npm run lint` - run ESLint
- `npm run preview` - preview production build

### Backend scripts

- `npm run build` - compile TypeScript into `dist`
- `npm run start` - run compiled server
- `npm run dev` - build then start (no auto-reload)
- `npm test` - placeholder (currently always fails)

---

## 10) Configuration Notes (Important)

The current codebase contains hardcoded secrets/config values:

- MongoDB connection URI in `backend/src/db.ts`
- JWT secret in `backend/src/config.ts`
- Frontend API URL in `frontend/src/config.ts`

Recommended immediate improvements:

1. Move these to environment variables.
2. Add `.env.example` files for frontend/backend.
3. Rotate exposed credentials and secrets.

Suggested env variables:

- Backend:
  - `PORT`
  - `MONGODB_URI`
  - `JWT_SECRET`
  - `CORS_ORIGIN`
- Frontend:
  - `VITE_BACKEND_URL`

---

## 11) Current Limitations / Risks

1. Passwords are stored in plain text (no hashing).
2. Hardcoded DB URI and JWT secret in source.
3. No backend validation layer (e.g., zod/joi).
4. No automated tests (unit/integration/e2e).
5. No backend lint config and no formatting standard config.
6. Error status codes are inconsistent (`411` used for business errors).
7. Backend "dev" flow lacks watcher (`nodemon`/`tsx watch`).

---

## 12) Recommended Next Steps

Priority order:

1. Add password hashing (`bcrypt`) and secure signin flow.
2. Move secrets to env files and rotate leaked secrets.
3. Add request validation and centralized error handling.
4. Add basic backend tests for auth/content/share endpoints.
5. Add backend linting + prettier + CI checks.
6. Add Docker + deployment docs (or hosting guides).

---

## 13) Manual Smoke Test Checklist

1. Start backend and frontend.
2. Sign up a new account.
3. Sign in and confirm token stored.
4. Add 2-3 content items.
5. Update one item.
6. Delete one item.
7. Generate share link and open in incognito.
8. Verify public page shows shared user + content.

---

## 14) Production Readiness Snapshot

Current maturity: **MVP / local-development focused**

Strong points:

- Clean basic full-stack flow
- Token-protected content ownership checks
- Share-link feature implemented end-to-end

Before production:

- Security hardening
- Configuration/env cleanup
- Observability + tests + CI/CD
- Deployment architecture and CORS tightening
