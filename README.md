# Axiom - A Hugo Theme

Axiom is designed to make the readers of your content and the search engines happy. A typical "Article" with Adsense ads, web fonts, syntax highlighting, and large Hero image has a __Mobile PageSpeed__ of __95__ running on the lowest tier cloud server plan.

SEO and Social Media features include Article sharing via Facebook and Twitter (without heavy Javascript libraries), Google Structured Data `ld+json` with a full `Schema.org Article` fieldset, Open-Graph tags, Serverless CDN support (Netlify), Asset CDN support (Cloudinary) with image transformations for responsive images, ATOM feed Syndication XML format, asset preloading, third-party prefetching, SVG icons, syntax highlighting with Prism.js, custom 404 error page, custom CSS/JS support, and a full Multilingual implementation. Config includes isolated `development` and `production` environments so tracker's like Analytics don't fire false positives. Built with Tailwind CSS, Alpine JS (not used but included), and an NPM Scripts (task-runner-free) build process, the Axiom Hugo theme is feature packed.

# Installation
## Existing Website

The instructions below, assume an existing Hugo website `example.com` in a working directory named `sites`.

> When typing/copying the terminal commands below, don't include the prompt portion: `~ %`

```shell
~ % cd ~/sites/example.com/

# Only if not already a git repository
example.com % git init
```

You can wait to do your initial commit until after adding the theme below.

### Via Submodule

Install Axiom as a Git Submodule:

```shell
# Add the Axiom Hugo theme into the `themes` directory
example.com % git submodule add https://github.com/jhauraw/axiom.git themes/axiom
example.com % git submodule init
example.com % git submodule update

# To update the theme in the future, run
example.com % git submodule update --remote themes/axiom
```

Submodules have the advantage of being much easier to update and keep in sync.

### Via Clone

Install Axiom as a Git clone:

```shell
example.com % git clone --recurse-submodules https://github.com/jhauraw/axiom.git themes/axiom
```

> Optionally, remove the .git directory. To update the theme in the future, you'll need to delete the theme and re-clone it, per above.

## Example Website

If you don't have an existing website, you can use the provided `exampleSite` as a starting point, by copying the entire directory contents:

```shell
example.com % cp -r themes/axiom/exampleSite/ .
```

This creates a fully functioning Hugo website that can be deployed as is.

# Setup
## Hugo Config File

The Axiom `exampleSite` _Config_ file ([`config.toml`](https://github.com/jhauraw/axiom/blob/master/exampleSite/config.toml)) provides a starting point for theme customization and setup.

Copy `config.toml` into the root directory of your website:

> If you copied the `exampleSite` in the step above you can skip this step. If you already have a config file, you'll need to manually add your settings back into Axiom's config file or vice-versa.

```shell
example.com % cp themes/axiom/exampleSite/config.toml .
```

Be sure to backup or commit your Config file!

# Config Options

Options to customize Axiom, starting from the top of the _Config_ file ([`config.toml`](https://github.com/jhauraw/axiom/blob/master/exampleSite/config.toml)). Most of the options are detailed in the official [Hugo Documentation](https://gohugo.io/getting-started/configuration/).

## Hugo Core

Options related to Hugo's Core build settings:

```shell
# Change to your website's URL
# For local dev, change to: http://localhost:1313
# NOTE: NO trailing slash
baseURL = "https://example.com"

# Change to your Brand or Website Title
title = "Axiom A Hugo Theme"

# Default language
# NOTE: lowercase
languageCode = "en-us"
defaultContentLanguage = "en-us"

# Which theme to use. Hugo allows multiple themes to be installed
theme = "axiom"

# Max posts to show in atom feed
rssLimit = 100

# Enable Emoji's in posts
enableEmoji = true

# Length of snippet on post index and structured data
summaryLength = 40

# Output a robots.txt file
# NOTE: See the 'Frontmatter' section below
enableRobotsTXT = true

# Don't automatically mangle titles
pluralizelisttitles = false

# Broken in Hugo currently
footnoteReturnLinkContents = "&#8617;"

# Don't output tags or categories. Remove to re-enable
disableKinds = ["taxonomy", "taxonomyTerm"]
```

There are many more Core options that can be added to suit your needs. Visit the Hugo docs to learn about them.

## Permalinks

Axiom is configured to use the file name slug as the publicly accessible URL:

```shell
[permalinks]
post = "/:filename"
```

The `post` variable name refers to individual files in the `post` content Section. 

## Params

Options related to Hugo's Core param settings:

```shell
[params]
# Sections to include in lists and indexes
mainSections = ["post"]

# Footer copyright start year, prepended to current year
# E.g.: 2000-2020
copyrightYear = 2000
```

There are many more Param options that can be added to suit your needs. Visit the Hugo docs to learn about them.

## Services

Options for third party services, such as analytics, tracking, ads, and APIs.

```shell
[params.services]
# Google Analytics Id
analyticsId = "UA-DEV"
# Google Adwords Account Id. Provided when you setup a Conversion
adwordsId = "AW-DEV"
# Google Adsense
adsenseId = "CA-PUB-DEV"
# Google Adsense Ad Slot, for ad unit shown below Posts
adsenseAdSlotId = "ID-DEV"
# Google Adwords Conversion
adwordsConversionId = "ID-DEV"
# Google Adwords Conversion value
# INTEGER: 00.00
# FORMAT: No quotes
adwordsConversionValue = 0
# Facebook App Id for this property
facebookApp = "FB-DEV"
# Facebook Pixel for this property
facebookPixel = "FB-DEV"
# Disqus Comments Username
disqusUser = "na"
```

Services will continue to be added and improved.

## Fonts

See the _Typography_ section below for details.

```shell
[params.font]
# BOOLEAN: true, false
# DEFAULT: true
theme = false
```

If set to `true`, Axiom will use the font files referenced in `themes/axiom/src/type.css`, link a `type.css` stylesheet in the website's `<head>` section, and preload the font files. You'll need to have the font files either stored locally in an `example.com/static/font/` folder or hosted on a CDN supported by Axiom.

When set to `false`, Axiom will use the Tailwind CSS font-family fallback settings.

Either way, the display will look very similar, unless your eye is trained to typography.

See the _CDN_ section below for options on customizing folder names and locations.

## CDNs

Axiom is designed to be deployed using the latest technologies and best practices. Today that is synonymous with JAMStack, serverless edge deployment, and CDN asset delivery. However, Axiom also supports traditional web server setups with NGINX or Apache. In regards to asset delivery, Axiom supports CDNs or local file storage.

> Paths: Axiom builds all the file paths for you behind the scenes. This means that when setting a Feature image in a page or post, you need only set the filename or public_id. The `[params.path]` config section below will then be applied to the asset. The EXECPTION to this rule is when using vanilla Markdown or non-Axiom shortcodes to insert assets. Axiom cannot get in the middle of that process to build up the path. In such cases, just prepend the same relative path values set here.

```shell
[params.cdn]
# Asset delivery provider
# VALUES: "local", "cloudinary"
# DEFAULT: local
provider = "local"
# Asset types. Used for CDNs which give different URLs for each asset type
# VALUES: image, video, raw
# DEFAULT: image
type = "image"

# Folders where assets are stored, applies to both local and CDNs
# NOTE: trailing slash
[params.path]
image = "image/"
video = "video/"
author = "image/author/"
brand = "image/brand/"
font = "font/"
pdf = "pdf/"
# When 'provider=local', applies to asset paths
# BOOLEAN: true, false
# DEFAULT: false
localAbsURL = false

# Cloudinary CDN
[params.cloudinary]
# Base URL for your account with "cloud name" at end
# NOTE: trailing slash
host = "https://res.cloudinary.com/examplecom/"
# URL versioning, e.g., "v12345/"
version = ""
# Cloudinary Internal paths
# NOTE: DON'T EDIT!
image = "image/upload/"
raw = "raw/upload/"
video = "video/upload/"

# Cloudinary asset transformation presets, primarily for images, these are applied by the theme internally
[params.cloudinary.presets]
# General use, all-around
base = "f_auto,q_auto/"
# Used for content (body) assets on Pages, Posts, and Indexes
page = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
# Feature Image
feature = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
# Page, Post Summary
summary = "w_auto,dpr_auto,c_scale,f_auto,q_auto/"
```

When `provider` is set to one of the supported CDN values, all paths will be output as absolute URLs. The URL structure will be assembled based on each CDNs design. See the `/axiom/layouts/partials/cdn-src.html` file for details.
 
> Alert: All config paths/URLs must end with a trailing slash `/`!

# CDNs
## Serverless Edge Deploy, Assets, Image Transformations

Out-of-the-box, Axiom is configured to support self-hosted assets (images, pdfs, fonts, etc.) or content delivery networks. Currently, Cloudinary is the only CDN implemented. Axiom is also designed to be deployed via CDN to the edge as a JamStack website, for example on Netlify.

# Frontmatter
## Options

__Private__: Exclude a page or post from robots indexing, sitemaps, and feeds.

```yaml
private: true
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

# Figures
## Shortcode with CDN Support

The figure shortcode uses the same API as the built in Hugo shortcode, but has been enhanced to support CDN images with transformations. You only need to pass it the image name (typically a "public id") with or without extension and Axiom will do the rest - no need to pass in a complicated URLs in your Markdown files.

# Typography
## Design and Fonts

TODO.

# Disqus Comments

TODO.

# Google Adsense

TODO.

## Misc.

IDE search scope:

```shell
-*/node_modules/*,-*/resources/*,-*/public/*,-*/assets/*.js,-*/assets/*.css,-*.min.js,-*.min.css,-*-lock.json,-*prism.js,-*alpine.js,-*.*project,-*.*workspace,<project>
```

## License

Creative Commons Attribution-ShareAlike 4.0 International License: [CC-BY-SA-4.0](https://github.com/jhauraw/jhaurawachsman.com/blob/master/LICENSE).
