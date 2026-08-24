# TradeX

TradeX is a paper-trading simulation platform. It uses virtual funds only and never places real stock orders.

## Applications

- Frontend: React, Vite, React Router, Redux Toolkit, Axios, Bootstrap, Chart.js
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## Run the frontend

```bash
npm install
npm run dev
```

## Run the backend

Create `backend/.env` from `backend/.env.example`, provide a MongoDB connection string and a strong JWT secret, then run:

```bash
npm install --prefix backend
npm run --prefix backend dev
```

The API is available under `/api` and exposes `/api/health` for a health check.

## Authentication APIs

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me` with a Bearer token
- `GET /api/users/profile` with a Bearer token

Authentication uses an Authorization header with a JWT. Passwords are hashed with bcryptjs and are never returned by the API.

## Create the first admin

Set `ADMIN_NAME`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in `backend/.env`, then run:

```bash
npm run --prefix backend seed:admin
```

The command creates the admin once. Running it again does not create a duplicate account.

Stock data, trading, portfolio calculations, watchlists, transactions, and admin CRUD remain intentionally deferred to later work.
