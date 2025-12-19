# Atlas - Premium Roblox External

A modern, fast, and fully responsive marketing website for Atlas, a premium Roblox external client.

## Features

- No database required
- Static data serving
- Fully responsive design
- Dark mode optimized
- Production-ready

## Quick Start (Local)

```bash
npm install
npm run dev
```

Visit `http://localhost:5000` in your browser.

## Build

```bash
npm run build
npm start
```

## Deployment

### Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and create a new project
3. Connect your GitHub repository
4. Vercel will automatically detect and deploy using the `vercel.json` configuration
5. Your site will be live!

### Manual Build

```bash
npm install
npm run build
```

The built app will be in the `dist/` directory.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Express.js
- **Build**: Vite
- **Routing**: Wouter
- **UI Components**: Shadcn/UI with Radix UI

## Environment

No environment variables needed for basic setup. Everything runs with static data.

## License

MIT
