# CLAUDE.md — On Call Coffee

> Project context for Claude Code. Fill in the TODOs before generating any new code.

---

## 0. Brand Tokens (fill these in first)

| Token | Value |
|-------|-------|
| `[BRAND_NAME]` | On Call Coffee |
| `[TAGLINE]` | TODO |
| `[HERO_HEADLINE]` | TODO |
| `[HERO_SUBLINE]` | TODO |
| `[PRIMARY_CTA]` | TODO |
| `[SECONDARY_CTA]` | TODO |
| `[TRUST_LINE]` | TODO |
| `[FOOTER_TAGLINE]` | TODO |
| `[FOOTER_SIGNOFF]` | TODO |
| `[META_DESCRIPTION]` | TODO |
| `[BUSINESS_DESCRIPTION]` | TODO |
| `[CONTACT_EMAIL]` | TODO |
| `[YOUR_DOMAIN]` | TODO |

---

## 1. Colors (globals.css)

Replace `--accent` and `--mint` with On Call Coffee brand colors.

Current defaults (Synthesys):
- `--accent: #5B7CFA` (electric indigo)
- `--mint: #2DE2C0`

---

## 2. Logo

- Drop the new logo into `/public/logo.png`
- It's referenced in `Nav.tsx` and `Footer.tsx`

---

## 3. Tech Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Resend for contact form email (`RESEND_API_KEY` env var)
- Deployed on Vercel

---

## 4. Sections (already built, need copy swap)

1. Nav
2. Hero
3. Problem
4. Services
5. Portfolio / Work
6. Process (How It Works)
7. About
8. Testimonials
9. Pricing
10. FAQ
11. Final CTA
12. Footer

---

## 5. Contact Form

Set these in Vercel environment variables and in `.env.local`:
- `RESEND_API_KEY` — get from resend.com
- Update `[CONTACT_EMAIL]` and `[YOUR_DOMAIN]` in `app/api/contact/route.ts` and `components/ContactForm.tsx`
