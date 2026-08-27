# M2V Technology Portfolio

A responsive freelancer portfolio website for **M2V Technology**, built to showcase web development services, interactive demo projects, pricing, and direct contact options.

## Features

- Logo-inspired graphite, gold, and silver visual design
- Responsive layouts for mobile, tablet, and desktop
- Homepage with hero, about, services, pricing, process, and call-to-action sections
- Four interactive portfolio demonstrations
- Project filtering by website category
- Dedicated contact page
- Clickable email and WhatsApp contact links
- SEO metadata, smooth scrolling, accessible labels, and reduced-motion support

## Technology

- React 19
- Next.js 16 application structure
- Vinext and Vite
- TypeScript
- Tailwind CSS 4
- Lucide React icons

## Project Structure

```text
m2v-technology-portfolio/
├── app/                 Pages, layout, metadata, and global styles
│   └── contact/         Dedicated contact page
├── components/ui/       Reusable UI components
├── public/              Logo and static assets
├── hooks/               Shared React hooks
├── lib/                 Shared utilities
├── vendor/              Vendored stylesheet dependencies
├── scripts/             Install and build helper scripts
├── examples/            Optional D1 example
├── package.json         Project scripts and dependency declarations
├── package-lock.json    Reproducible dependency lockfile
├── tsconfig.json        TypeScript configuration
└── vite.config.ts       Vite/Vinext configuration
```

## Prerequisites

- Node.js **22.13.0 or newer**
- npm (included with Node.js)
- Linux, macOS, or Windows using **WSL 2 / Git Bash**

The included build helper scripts use Bash and standard Unix command-line tools. On Windows, WSL 2 is the recommended environment.

## Install and Run

1. Extract the ZIP archive.
2. Open a terminal in the extracted `m2v-technology-portfolio` folder.
3. Install the locked dependencies:

   ```bash
   npm ci
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local address displayed in the terminal, normally `http://localhost:3000`.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Start the compiled application:

```bash
npm run start
```

## Other Commands

```bash
npm run lint     # Check source quality
npm test         # Build and run the included verification tests
```

## Customization

- Main homepage content: `app/page.tsx`
- Contact page: `app/contact/page.tsx`
- Colors and responsive styling: `app/globals.css`
- Page title and SEO metadata: `app/layout.tsx`
- Brand logo: `public/m2v-logo.jpeg`

Contact details and WhatsApp links are defined in the page source. Update them before deploying for another business.

## Deployment

After `npm run build` succeeds, deploy using any hosting platform compatible with this Vinext/Vite project. No API keys or environment variables are required for the current static portfolio functionality.

## Security and Archive Contents

The downloadable archive intentionally excludes:

- `node_modules/`
- Generated build output such as `dist/`, `build/`, and `.next/`
- Local caches and runtime folders
- Git history
- Environment files and credentials
- Hosting-specific project metadata

Dependencies are restored reproducibly from `package-lock.json` by running `npm ci`.

## License

This project is provided for use by M2V Technology. Replace business content and assets only if you have permission to do so.
