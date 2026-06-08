## Plan: Refined Professional Portfolio with Expandable Case Studies

Build a single-page portfolio matching the provided HTML design (dark theme, Geist + Inter typography, custom Material color tokens) and add **Expandable Case Studies** as the progressive disclosure pattern on the Selected Work section.

### Scope
One TanStack route (`/`) — a long-scroll portfolio for Aashish Shrestha. Sections: Nav, Hero, Stats banner, Selected Work, About, Contact, Footer (pulled from the source HTML).

### Design tokens
Port the HTML's custom Tailwind config into `src/styles.css`:
- Background `#0b1326`, surface variants, primary `#adc6ff`, tertiary `#4cd7f6`, on-surface `#dae2fd`, on-surface-variant `#c2c6d6`
- Fonts: Geist (display/headline), Inter (body), loaded via Google Fonts in `__root.tsx` head
- Spacing/radius scale and font sizes (display-xl 88px, headline-lg 64px, etc.)

### Components
- `Nav` — fixed blurred top bar with anchor links + Connect button
- `Hero` — eyebrow, big gradient headline, subcopy, two CTAs
- `StatsBanner` — 4-up grid (Role / Education / Focus / Impact)
- `SelectedWork` — alternating 12-col image+text rows, hotlinked images from the source HTML
- `ProjectRow` — **expandable**: a "View Technical Deep-Dive" button toggles an in-place panel revealing Problem, Architecture, My Contributions, and Outcomes (animated height with framer-motion). Collapsed state stays clean per the design.
- `About`, `Contact`, `Footer` — port from source HTML

### Progressive disclosure (Expandable Case Studies)
Each `ProjectRow` keeps `useState(false)` for `expanded`. Button toggles a `motion.div` with `initial/animate` height + opacity. Inside: 2-col layout with deep-dive copy and a tech-stack chip list. Smooth `cubic-bezier(0.16, 1, 0.3, 1)` matching the source CSS.

### Files to add/modify
- `src/routes/index.tsx` — replace placeholder with full portfolio composition
- `src/components/portfolio/Nav.tsx`, `Hero.tsx`, `StatsBanner.tsx`, `SelectedWork.tsx`, `ProjectRow.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`
- `src/styles.css` — add color tokens + font families
- `src/routes/__root.tsx` — add Geist/Inter/Material Symbols `<link>`s, update title/description meta
- Install `framer-motion` for the expand animation

### Images
Hotlink the `lh3.googleusercontent.com/aida-public/...` URLs directly from the source HTML (no asset copy).

### Out of scope
Other "screens" mentioned in the chat (About deep tabs, scroll-triggered reveals) — those were alternatives. Only Expandable Case Studies is implemented per the user's recommendation. No backend.