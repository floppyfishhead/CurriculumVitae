# Brian Turner Resume Website

A responsive React, React Router, and Bootstrap portfolio site based on Brian Turner's updated 2025 resume.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Customize

- Replace the example social URLs in `src/App.jsx`.
- Replace the silhouette in the `Avatar` component with a real image.
- Update the three placeholder case studies in the `projects` array.
- Replace the example copy in the `Biography` component.
- Add more complete position dates, accomplishments, and metrics to the `experience` array as they become available.

## Deployment note

The app uses `BrowserRouter`. Configure your host to route unknown paths to `index.html` (common SPA fallback) so direct links such as `/portfolio` work.
