# GiftLink — IBM Full-Stack Capstone

GiftLink is a free-item exchange app built with React, Express, MongoDB, and a Natural sentiment utility. 16 example gifts are provided.

## Run locally
1. Install Node.js 22+ and start MongoDB on localhost:27017 (or use MongoDB Atlas).
2. `cd giftlink-backend && cp .env.example .env && npm install && npm run seed && npm start`.
3. In another terminal, `cd giftlink-frontend && npm install && npm start`.
4. Open http://localhost:5173 (or the URL shown by Vite). Set `FRONTEND_ORIGIN=http://localhost:5173` in the backend `.env` and restart. Set `VITE_API_BASE` to your deployed backend URL when deploying.
5. Run `cd sentiment && npm install && npm start` to test sentiment integration.

## Endpoints
- GET `/api/gifts` (all 16 gifts)
- GET `/api/gifts/:id` (gift by numeric ID)
- GET `/api/search?category=Kitchen` and/or `q=lamp`
- POST `/api/auth/register` with JSON `name`, `email`, `password` (8+ characters)
- POST `/api/auth/login` with JSON `email`, `password`; returns token

## Evidence instructions
See `SUBMISSION_GUIDE.md`. A project ZIP is not evidence of a public repository, live service, actual MongoDB import, or successful GitHub Actions run. Deploy and capture real screenshots/logs before submitting those tasks.
