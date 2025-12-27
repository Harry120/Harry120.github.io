# Harry Partridge

Personal website and blog.

**Live at:** [harry120.github.io](https://harry120.github.io)

## Development

```bash
npm install
npm run dev
```

## Adding blog posts

Edit `src/posts/index.js` to add new posts. Each post is an object with:

- `slug` - URL path (e.g., `my-post` becomes `/writing/my-post`)
- `title` - Post title
- `date` - Date in YYYY-MM-DD format
- `description` - Short description for the post list
- `tags` - Array of tag strings
- `content` - Markdown content

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via GitHub Actions.
