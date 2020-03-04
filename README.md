# Axiom - A Hugo Theme

Axiom is designed to make the readers of your content and the search engines happy. A typical "Article" with Adsense ads, web fonts, syntax highlighting, and large Hero image has a __Mobile PageSpeed of 95__ running on the lowest tier cloud server plan.

SEO and Social Media features include Article sharing via Facebook and Twitter (without heavy Javascript libraries), Google Structured Data `ld+json` with a full `Schema.org Article` fieldset, Open-Graph tags, Responsive images (3 sizes) with `srcset`, ATOM feed Syndication XML format, asset preloading, third-party prefetching, SVG icons, syntax highlighting with Prism.js, custom 404 error page, custom CSS/JS support, and a full Multilingual implementation. Config includes isolated `development` and `production` environments so tracker's like Analytics don't fire false positives. Built with Tailwind CSS, Alpine JS (not used but included), and an NPM Scripts (task-runner-free) build process, the Axiom Hugo theme is feature packed.

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

# Responsive Images
## Source Sets, Sizing

The default three sizes of responsive images are all 2-to-1 aspect ratio (rectangle):

- `2048x1024`: Base size or 100%.
- `1376x688`: Two-thirds size or 66% of Base.
- `688x344`: One-third size or 33% of Base.

The sizes are specifically chosen to match up with the `1rem` (`16px`) base size and media break points of the `CSS` framework. Each size is marginally larger than the breakpoint it will be shown at, and for 2x resolution (ppi) screens (retina) they will look sharp.

> Each size's X-axis is divisible by 16. 

You can change the sizes to suit your needs in the  _Config_ file (`config.toml`) -> `[params.img]` section:

> You will need to re-output existing images to match the new sizes if you change. Images are not processed automatically.

```toml
[params.img]
p33W = 688
p33H = 344
p66W = 1376
p66H = 688
p100W = 2048
p100H = 1024
```

## Storage Location Config

The location where images are stored within the site's `static` folder is set in the same section:

> No leading slash, yes trailing slash.

```toml
[params.img]
p33Dir = "img/33p/"
p66Dir = "img/66p/"
p100Dir = "img/"
pageDefault = "page-default.webp"
```

For example, given these settings, when you finish a new post, you would output the Feature image in the three sizes and store each one in it's respective directory. When the website is generated, the source set will be created pointing to the three images, with the `66%` size default.

## Image Optimization

Target image sizes in kilobytes for each of the three sizes:

> From `jpg/png/gif` to `webp`.

- p100: 2048x1024
    - jpg < 80kb
    - png < 50kb
- p66: 1376x688
    - jpg < 70kb
    - png < 40kb
- p33: 688x344
    - jpg < 60kb
    - png < 30kb

> Webp works best for images with larger px dimensions, files less than 256px typically end up larger.

# Typography
## Design

TODO.

## Misc.

IDE search scope:

```shell
-*/node_modules/*,-*/resources/*,-*/public/*,-*/assets/*.js,-*/assets/*.css,-*.min.js,-*.min.css,-*-lock.json,-*prism.js,-*alpine.js,-*.*project,-*.*workspace,<project>
```

## License

Creative Commons Attribution-ShareAlike 4.0 International License: [CC-BY-SA-4.0](https://github.com/jhauraw/jhaurawachsman.com/blob/master/LICENSE).
