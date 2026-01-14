# kellogg.brengel.com

A portfolio site where the medium is the message.

## Philosophy

This site exists to make people want to meet with or hire Kellogg Brengel. But more than that—the *way* it's built demonstrates the same judgment and technical depth it claims to represent.

Every choice here is intentional:

- **Astro** over heavier frameworks → outputs pure static HTML, ships zero JavaScript by default
- **Self-hosted on a hardened VPS** → demonstrates infrastructure competence, not just "I can use Vercel"
- **No CMS, no database** → minimal attack surface, maximum performance
- **Hand-authored with Claude Code** → the code itself is portfolio-worthy, view-source reveals craft
- **AI chat powered by self-hosted Mistral** → the resume claims AI/ML skills, the site proves them

What's deliberately *absent* matters too: no WordPress, no page builders, no hero carousels, no stock photography, no complexity that doesn't earn its place.

## Technical Choices

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Astro | Static output, component authoring, Markdown content, fast by default |
| Styling | Tailwind CSS | Utility-first, no custom CSS debt, design system in code |
| Hosting | DigitalOcean VPS | Full control, demonstrates ops skills, ~$6/month |
| Web Server | nginx | Industry standard, hardened configuration |
| SSL | Let's Encrypt | Free, automated, no excuses for non-HTTPS |
| AI Backend | Self-hosted Mistral (home server) | Demonstrates ML infrastructure, keeps costs near zero |
| Deployment | Git push + simple script | No vendor lock-in, full transparency |

## Design Principles

- **Typography-forward**: The font is the design. Using Inter for body, JetBrains Mono for accents.
- **Generous whitespace**: Confidence lives in what you don't fill.
- **Dark mode default**: Easier on eyes, current aesthetic, toggle available.
- **Bento grid layout**: Asymmetric cards for work samples, very 2024-2025.
- **Subtle motion**: Scroll-triggered reveals, nothing gratuitous.
- **Instant load**: Target <1s meaningful paint, 100 Lighthouse scores.

## Structure

```
kellogg-portfolio/
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # Base HTML structure, meta, fonts
│   ├── components/
│   │   ├── Hero.astro          # Name, title, single-sentence pitch
│   │   ├── BentoGrid.astro     # Work samples container
│   │   ├── BentoCard.astro     # Individual project cards
│   │   ├── Chat.astro          # AI assistant interface
│   │   └── Footer.astro        # Minimal: contact + colophon
│   ├── pages/
│   │   └── index.astro         # Single page, everything flows
│   ├── content/
│   │   └── projects/           # Markdown files for each project
│   └── styles/
│       └── global.css          # Tailwind base + custom properties
├── public/
│   └── favicon.svg             # Simple, scales infinitely
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site deploys to a hardened Ubuntu VPS via git push:

```bash
# From local machine
git push production main
```

A post-receive hook on the server:
1. Pulls the latest code
2. Runs `npm run build`
3. Copies `dist/` to nginx's serving directory
4. Reloads nginx if needed

Details in `docs/deployment.md` (to be created).

## Security Posture

The VPS runs with:
- SSH key-only authentication (password disabled)
- Non-standard SSH port
- UFW firewall (only 80, 443, SSH open)
- Fail2ban monitoring
- Automatic security updates
- nginx hardened headers
- No database, no PHP, no attack surface beyond static files

The AI chat component connects to a home-hosted Mistral instance via:
- Cloudflare Tunnel (no open ports at home)
- Rate-limited API endpoint
- No sensitive data in the model's context

## Content Strategy

The site tells one story across a single scroll:
1. **Who**: Name, title, one sentence
2. **What**: Bento grid of selected work
3. **Proof**: The AI chat itself demonstrates the claim
4. **Connect**: Minimal footer with contact

No separate "About" page. No blog (unless it earns its place later). No navigation—the scroll *is* the navigation.

## AI Integration Notes

The chat component embodies Kel's voice without access to biographical details. This is achieved through a "style distillation" process:

1. Personal writings analyzed by a separate AI
2. Voice characteristics extracted (cadence, philosophy, humor)
3. Biographical facts stripped
4. Essence distilled into system prompt
5. Mistral instance configured with this prompt

The result: visitors interact with something that *feels* like talking to Kel, without the AI being able to recall or repeat private information.

---

Built with intention. View source encouraged.
