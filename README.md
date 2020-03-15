# Axiom - A Hugo Theme

Axiom is designed to make the readers of your content and the search engines happy. A typical "Article" with Adsense ads, web fonts, syntax highlighting, and large Hero image has a __Mobile PageSpeed of 95__ running on the lowest tier cloud server plan.

SEO and Social Media features include Article sharing via Facebook and Twitter (without heavy Javascript libraries), Google Structured Data `ld+json` with a full `Schema.org Article` fieldset, Open-Graph tags, Serverless CDN support (Netlify), Asset CDN support (Cloudinary) with image transformations for responsive images, ATOM feed Syndication XML format, asset preloading, third-party prefetching, SVG icons, syntax highlighting with Prism.js, custom 404 error page, custom CSS/JS support, and a full Multilingual implementation. Config includes isolated `development` and `production` environments so tracker's like Analytics don't fire false positives. Built with Tailwind CSS, Alpine JS (not used but included), and an NPM Scripts (task-runner-free) build process, the Axiom Hugo theme is feature packed.

# Installation
## Existing Website

> The instructions below, assume an existing Hugo website `example.com` in a working directory named `sites`.

> When typing/copying the terminal commands below, don't include the prompt portion: `~ %`

```shell
~ % cd ~/sites/example.com/

# Only if not already a git repository
example.com % git init

# Add the Axiom Hugo theme into the `themes` directory
example.com % git submodule add https://github.com/jhauraw/axiom.git themes/axiom
example.com % git submodule init
example.com % git submodule update

# To update the theme in the future, run
example.com % git submodule update --remote themes/axiom
```

# Setup
## Hugo Config File

See the Example Site [`config.toml`](https://github.com/jhauraw/axiom/blob/master/exampleSite/config.toml) for details.

# CDNs
## Serverless Edge Deploy, Assets, Image Transformations

Out-of-the-box, Axiom is configured to support self-hosted assets (images, pdfs, fonts) or content delivery networks. Currently, Cloudinary is the only CDN implemented. Axiom is also designed to be deployed via CDN to the edge as a JamStack website, for example on Netlify.

See the Example Site _Config_ file (`config.toml`) for details.

# Markdown
## Headings

While headings in sizes H3-H6 are supported, they are styled to match H2. Anything smaller than H2 is smaller than a `<p>` and that doesn't look right.

The first H1 of an element with the `cdata` class (`class="cdata"`) is a special case and is considered the main heading or Title, and will be styled uniquely from the rest to make it standout.

## Blockquotes

Quote only:

    > Don't communicate by sharing memory, share memory by communicating.

With citations:

    > Don't communicate by sharing memory, share memory by communicating.</p>
    > — <cite>Rob Pike[^1]</cite>

For citations to work, Hugo _Config_ file (`config.toml`) needs the Goldmark Renderer setting `unsafe = true`. This is not specific to this theme, but part of how Hugo treats HTML in Markdown content:

```toml
[markup]
[markup.goldmark]
[markup.goldmark.renderer]
unsafe = true
```

If you prefer __not__ to turn on this setting, there is a `blockquote` shortcode provided. The first parameter is required, while the other two are optional:

```markup
# Definition
{{< blockquote "Quote text" "Footer text" "Cite text" >}}

# Example
{{< blockquote "You can trade hours for dollars or ideas for millions." "Cactus Jack on" "The Shark Tank" >}}
```

# Figures
## Shortcode with CDN Support

The figure shortcode uses the same API as the built in Hugo shortcode, but has been enhanced to support CDN images with transformations. You only need to pass it the image name (typically a "public id") with or without extension and Axiom will do the rest - no need to pass in a complicated URLs in your Markdown files.

# Typography
## Design and Fonts

TODO.

## Misc.

IDE search scope:

```shell
-*/node_modules/*,-*/resources/*,-*/public/*,-*/assets/*.js,-*/assets/*.css,-*.min.js,-*.min.css,-*-lock.json,-*prism.js,-*alpine.js,-*.*project,-*.*workspace,<project>
```

## License

Creative Commons Attribution-ShareAlike 4.0 International License: [CC-BY-SA-4.0](https://github.com/jhauraw/jhaurawachsman.com/blob/master/LICENSE).
