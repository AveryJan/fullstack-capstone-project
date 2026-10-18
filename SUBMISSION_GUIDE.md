# 18 submission tasks — exact evidence guide

Repository name: `fullstack-capstone-project`. Publish this folder to a *new public GitHub repository* under your own account. Do not submit another person's repository.

## URLs (Tasks 1, 4–11)
Replace `YOUR_USERNAME` after publishing, and verify that every URL opens without a login:

1. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/user-story.md`
4. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-backend/db.js`
5. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-backend/routes/giftRoutes.js`
6. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-backend/routes/searchRoutes.js`
7. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-backend/app.js`
8. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/sentiment/index.js`
9. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-frontend/src/pages/RegisterPage.js`
10. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-frontend/src/pages/LoginPage.js`
11. `https://github.com/YOUR_USERNAME/fullstack-capstone-project/blob/main/giftlink-backend/routes/authRoutes.js`

## Screenshot tasks
2. Create 8 actual GitHub Issues using `ISSUES_TO_CREATE.md`, add the four indicated labels, open the Issues listing showing the repo name and 8 issues, and save a **real** screenshot as `userstories.png`.
12. Deploy frontend and backend publicly. Show the public deployment URL in the browser address bar and the landing page's GiftLink title, tagline, and Get Started button. Save **real** screenshot as `deployed_landingpage.png`.

## Mongo import (Task 3)
Run `npm run seed` inside `giftlink-backend` with a reachable MongoDB configured. Copy the full actual terminal output beginning with `inserted_items:`. `insertedCount` must be 16. Do not submit the seed JSON as a fake terminal output.

## cURL tasks (13–17)
Replace `API_URL` below with the public URL of the *running* backend. Execute each line, copy command and actual output into `mainpage`, `register`, `login`, `item_detail`, `search_item` respectively. Use a disposable example account and never submit a genuine password or live login token in evidence; redact them where needed.

13. `curl -i "$API_URL/api/gifts"`
14. `curl -i -X POST "$API_URL/api/auth/register" -H 'Content-Type: application/json' -d '{"name":"Demo User","email":"demo.user@example.test","password":"ExamplePassword123!"}'`
15. `curl -i -X POST "$API_URL/api/auth/login" -H 'Content-Type: application/json' -d '{"email":"demo.user@example.test","password":"ExamplePassword123!"}'` (redact the token)
16. `curl -i "$API_URL/api/gifts/1"`
17. `curl -i "$API_URL/api/search?category=Kitchen"`
18. Open repo **Actions → GiftLink CI → latest successful workflow → build-and-test**; expand steps and copy the *actual* step summaries/logs. Do not describe an unexecuted workflow as successful.

## Deployment notes
Host frontend on a static Vite-compatible host and backend on a Node-compatible host; configure backend `MONGODB_URI`, `MONGODB_DB`, `JWT_SECRET`, and `FRONTEND_ORIGIN`, and frontend `VITE_API_BASE`. Supply your own secure database instance. Browser screenshot must include URL; local-only screenshot is not deployed evidence.
