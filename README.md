# Wedding Registry Site (GitHub Pages)

This is a simple static site (plain HTML/CSS/JS) intended to be hosted on **GitHub Pages**.

## Files

- `index.html`
- `styles.css`
- `script.js`

## Publish on GitHub Pages

### Option A: User/Organization Pages (recommended)

This publishes at:

- `https://<your-username>.github.io/`

Steps:

1. Create a new repository on GitHub named **`<your-username>.github.io`**.
2. Upload/commit these files to the **root** of that repo:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `.nojekyll`
3. In GitHub, go to:
   - **Settings** 
   - **Pages**
4. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) and **`/ (root)`**
5. Wait a minute, then visit `https://<your-username>.github.io/`.

### Option B: Project Pages (if you want it under a repo name)

This publishes at:

- `https://<your-username>.github.io/<repo-name>/`

Steps:

1. Create a new repository (any name, e.g. `wedding`).
2. Upload/commit the files to the root of that repo.
3. In GitHub:
   - **Settings** 
   - **Pages**
4. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) and **`/ (root)`**
5. Visit `https://<your-username>.github.io/<repo-name>/`.

## Local preview

You can open `index.html` directly in your browser, or run a tiny local server.

Example (Python 3):

```bash
python3 -m http.server 5173
```

Then open:

- `http://localhost:5173`

## Custom domain (optional)

In GitHub:

- **Settings → Pages → Custom domain**

If you set a custom domain, you may also want a `CNAME` file in the repo root.
