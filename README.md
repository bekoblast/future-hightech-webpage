# Future Hitech — Website

Brand-new corporate website for **Future Hitech Technical Services** — a Dubai-based MEP (Mechanical · Electrical · Plumbing) company. Single-page site built from their 2024 company profile.

🌐 **Live:** _to be deployed_ → `www.future-hitech.com`

## Stack

- [Astro 4](https://astro.build) — static site generator
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [GSAP](https://gsap.com) + [Lenis](https://lenis.darkroom.engineering) — scroll-triggered animations + smooth scroll
- TypeScript (strict)

## Run locally

```bash
npm install
npm run dev
# → http://localhost:5182
```

## Editing the site

**90% of edits live in one file:** `src/data/futurehitech.ts` — it's the single source of truth for company info, services, why-us, sectors, projects, and contacts.

| To change... | Edit |
|---|---|
| Mission, vision, About text | `src/data/futurehitech.ts` → `mission`, `vision`, `aboutUs` |
| Service titles / bullets / icons | `src/data/futurehitech.ts` → `services` |
| Approach steps · Why-us reasons | `src/data/futurehitech.ts` → `approach`, `whyUs` |
| Sectors text | `src/data/futurehitech.ts` → `sectors` |
| Phones / emails / address | `src/data/futurehitech.ts` → `company.contact` |
| Section headlines & layout | `src/pages/index.astro` |
| Brand colors | `tailwind.config.mjs` |

### Adding a project photo

1. Drop the file at `public/img/projects/p18.jpeg` (next number in sequence)
2. In `src/data/futurehitech.ts` bump the length: `Array.from({ length: 18 }, ...)`
3. Save — appears in gallery + lightbox automatically

### Swapping a stock photo

Replace the file in `public/img/stock/` keeping the same filename, or update the `src` reference in `src/pages/index.astro`.

## Project structure

```
future-hitech/
├── public/
│   ├── favicon.svg
│   └── img/
│       ├── projects/      # 17 real project photos from brochure
│       ├── sectors/       # 4 sector example photos
│       └── stock/         # 10 curated Pexels stock photos
├── src/
│   ├── components/
│   │   └── Icon.astro     # outline icon set (19 icons)
│   ├── data/
│   │   └── futurehitech.ts  # all site content
│   ├── layouts/
│   │   └── Base.astro     # HTML shell + GSAP init
│   ├── pages/
│   │   └── index.astro    # single-page composition
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Brand palette

Sampled from the official 2024 Company Profile PDF.

- **Orange:** `#EF6822` (primary brand)
- **Navy:** `#16345D` (primary brand)
- **Deep navy:** `#0A1321` (dark sections)
- **Fonts:** Inter (body) + Bricolage Grotesque (display)

## Photo credits

Stock photos in `public/img/stock/` are from [Pexels](https://www.pexels.com) under the Pexels License (free to use, no attribution required). Source URLs in `public/img/stock/ATTRIBUTION.txt`.

## License

Proprietary — © Future Hitech Technical Services.
