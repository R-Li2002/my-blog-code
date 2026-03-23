# RLiDAC Blog

Personal blog built with Hexo and the Fluid theme.

## Stack

- Hexo 8
- hexo-theme-fluid
- Content in `source/`
- Static output in `public/`

## Common Commands

If PowerShell blocks `npm`, use `npm.cmd` directly.

```powershell
# Install dependencies
& 'D:\Program Files\nodejs\npm.cmd' install

# Start local server
& 'D:\Program Files\nodejs\npm.cmd' run server

# Build static files
& 'D:\Program Files\nodejs\npm.cmd' run build

# Clean Hexo cache and output
& 'D:\Program Files\nodejs\npm.cmd' run clean
```

## Project Layout

- `source/_posts/`: blog posts
- `source/about/`, `source/tags/`, `source/categories/`: site pages
- `source/css/custom.css`: custom theme overrides
- `source/js/custom.js`: post-page reward/share injection
- `_config.yml`: Hexo site config
- `_config.fluid.yml`: Fluid theme config

## Deployment

The blog is deployed on Vercel.

Typical flow:

1. Edit content or config.
2. Run a local build to verify the site.
3. Push to the Git repository.
4. Let Vercel rebuild and publish the site.

## Notes

- Post comments are currently disabled in `_config.fluid.yml`.
- The homepage-style banner image was optimized as `source/img/banner1-optimized.jpg`.
- The original `source/img/banner1.jpg` is kept as a source asset in case you want to re-export a different size later.
