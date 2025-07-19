# Shift AI

AI-powered mobile-first job prep tool for restaurant workers. Built with Qwik frontend and Bun backend.

## Setup

Install dependencies for the entire monorepo:

```bash
npm install
```

This installs frontend and backend packages using npm workspaces.

Create a `.env` file with your API keys:

```bash
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_test_...
```

## Development

```bash
# Frontend
npm --workspace frontend run dev

# Backend
bun run --cwd backend src/index.ts

```

The frontend proxies all `/api` calls to `http://localhost:3000`. Ensure the backend
server is running on this port. For production you can set the `VITE_API_URL`
environment variable to point to your API endpoint.

The backend reads `OPENAI_API_KEY` for talking to OpenAI.

## Deploy

To run the frontend on Vercel using the Edge adapter:

1. Install dependencies and build the frontend

```bash
npm --workspace frontend run build
```

2. Configure Vercel with:
   - Framework: **Other**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `.vercel/output`

This ensures all routes render correctly without 404 errors.

## Cons

This MVP uses OpenAI for the AI responses which may incur API costs. Offline
fallbacks like Ollama are not included yet. The app also lacks authentication,
so avoid sharing sensitive information.
