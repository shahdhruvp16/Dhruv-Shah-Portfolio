# Dhruv Shah — Portfolio Starter (Next.js + Tailwind)

This is a starter scaffold for the multi-page portfolio described in the prompt. It includes:

- Next.js + Tailwind setup (files only — run `npm install` to install dependencies)
- Multi-page structure: Home, About, Projects, Experience, Maze Game, Contact
- Global Navbar with page routing
- Simple particle background (vanilla JS)
- A playable Maze Game (canvas) with generate, restart, and auto-solve (BFS)
- Instructions to run locally and deploy to Vercel

---

## To run locally

1. Ensure you have Node.js (v18+) and npm installed.
2. Extract this folder, then in terminal run:
```bash
cd dhruv-portfolio-starter
npm install
npm run dev
```
3. Open http://localhost:3000

## Deploy on Vercel

1. Push this repo to GitHub.
2. Create a Vercel account and import the GitHub repository.
3. Use default build command (`npm run build`) and output directory `.`.
4. Deploy — Vercel will install dependencies and deploy the Next.js app.

---

This scaffold is intentionally minimal but fully functional. Customize styles, animations (Three.js, Vanta.js), and project content as needed.
