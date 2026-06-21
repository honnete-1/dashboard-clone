# Dashboard Clone — File Manager / Image Folder

A pixel-matching, read-only clone of the **Hope UI Pro** File Manager →
Image Folder page, built with React + Vite + Tailwind CSS + React Router,
as part of a 3-day frontend engineering assignment.

Live reference: https://templates.iqonic.design/hope-ui/pro/html/file-manager/image-folder.html

## Tech stack

- **React 18 + Vite** — app framework and dev server
- **React Router v6** — real routes for every sidebar link
- **Tailwind CSS** — styling, using the brief's exact color tokens
- **react-icons** — icon set (Feather icons)
- **No backend** — one local mock data file stands in for an API

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal (usually
`http://localhost:5173`). To build a production bundle:

```bash
npm run build
npm run preview
```

## State management choice — and why

This app uses **React's built-in `useReducer` + Context API**, not Redux
or Zustand.

**Why that was enough at this size:** there's exactly one piece of shared
data (the image list) and two small pieces of shared UI state (the
current search term and which image's preview modal is open). All three
live in one `useReducer` inside `ImageContext`, and any component that
needs them reaches in through one custom hook, `useImages()`. Redux or
Zustand earn their keep when you have many independent slices of state,
need middleware (logging, persistence, undo), or have very deep
component trees where prop drilling becomes painful. None of that is
true here — adding either library would have meant more boilerplate
(actions, slices, a store config file) to manage the *same* three values
this `useReducer` already handles in about 40 lines.

One deliberate decision: the **active sidebar route is not duplicated in
Context.** React Router's URL already is the single source of truth for
"which page are we on" — `NavLink`'s `isActive` reads it directly. Storing
it a second time in our own state would create two places that could
disagree with each other.

## Project structure

```
src/
  data/images.js          mock dataset (18 images)
  context/ImageContext.jsx  the useReducer store + Provider
  hooks/useImages.js       derives Recently Viewed / search results from the store
  utils/time.js            date formatting helpers
  layouts/AppLayout.jsx    Sidebar + Navbar + <Outlet />
  components/              Sidebar, Navbar, ImageCard, ImagePreviewModal, EmptyState
  pages/                   ImagesPage (fully built) + PlaceholderPage (other routes)
```

## What works

- Sidebar with grouped navigation and active-route highlighting
- Navbar with a live search box, cart/notification icons, profile dropdown
- "Recently Viewed" row, sorted by `lastOpenedAt` (computed, not hardcoded)
- "All Images" responsive grid (4 cols desktop → 2 tablet → 1 mobile)
- Click any image card → read-only preview modal with metadata
- Live search/filter by file name, shared between Navbar and the grid via Context
- Empty state when a search matches nothing

## Known limitations (intentionally out of scope this round)

- **Add Image** — the button is visually present but doesn't upload or save anything
- **Delete Image** — no delete control exists anywhere
- **Edit / rename** — not implemented
- **Trash / restore flow** — the Trash route exists but has no UI yet
- Video / Document / All Files / Dashboard pages are real routes with placeholder content only

These are the flows called out in the assignment's Bonus Challenges
section, intentionally left for a future round.

## Deployment

Deployed with [Vercel / Netlify / GitHub Pages — fill in once deployed]:
`https://your-deployed-url-here`
