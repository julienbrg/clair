# Axiom - A Hugo Theme

Axiom is designed to make the readers of your content and the search engines happy. A typical "Article" with Adsense ads, web fonts, syntax highlighting, and large Hero image has a __Mobile PageSpeed__ of __95__ running on the lowest tier cloud server plan.

SEO and Social Media features include Article sharing via Facebook and Twitter (without heavy Javascript libraries), Google Structured Data `ld+json` with a full `Schema.org Article` fieldset, Open-Graph tags, Serverless CDN support (Netlify), Asset CDN support (Cloudinary) with image transformations for responsive images, ATOM feed Syndication XML format, asset preloading, third-party prefetching, SVG icons, syntax highlighting with Prism.js, custom 404 error page, custom CSS/JS support, and a full Multilingual implementation. Config includes isolated `development` and `production` environments so tracker's like Analytics don't fire false positives. Built with Tailwind CSS, Alpine JS (not used but included), and an NPM Scripts (task-runner-free) build process, the Axiom Hugo theme is feature packed.

# Support / Questions

Please refer to the official [Hugo Documentation](https://gohugo.io/documentation/) and the [Hugo Community Discourse](https://discourse.gohugo.io/) to find answers and solutions. If you need help with something Axiom specific, please ask your question via Twitter, Stack Overflow, or - as a last resort - email. For a full list of options, visit our [Contact](https://www.jhaurawachsman.com/contact/) page. Please don't open a Github Issue unless it is related to specific code within Axiom. Hugo error messages generally are due to improper settings in the Config file added after installation.

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

## Via Submodule

Install Axiom as a Git Submodule:

```shell
# Add submodule to the 'themes' directory
example.com % git submodule add https://github.com/jhauraw/axiom.git themes/axiom
example.com % git submodule init
example.com % git submodule update
```

To update the theme in the future:

```shell
example.com % git submodule update --remote themes/axiom
```

Submodules have the advantage of being much easier to update and keep in sync.

## Via Clone

Install Axiom as a Git clone:

```shell
example.com % git clone --recurse-submodules https://github.com/jhauraw/axiom.git themes/axiom
```

> Optionally, remove the .git directory. To update the theme in the future, you'll need to delete the theme and re-clone it, per above.

# Example Website
## Quick Start

If you don't have an existing website, you can use the provided `exampleSite` as a starting point, by copying the entire directory contents:

```shell
example.com % cp -r themes/axiom/exampleSite/ .
```

This creates a fully functioning Hugo website that can be deployed as is from the `public` directory (after running the `hugo` build command).

# Setup
## Config File

The Axiom `exampleSite` _Config_ file ([`config.toml`](https://github.com/jhauraw/axiom/blob/master/exampleSite/config.toml)) provides a starting point for theme customization and setup.

Copy `config.toml` into the root directory of your website:

> If you've copied the `exampleSite` in the step above you can skip this step. If you already have a config file, you'll need to manually add your settings back into Axiom's config file or vice-versa.

```shell
example.com % cp themes/axiom/exampleSite/config.toml .
```

Be sure to backup or commit your Config file!

# Config Options

Options to customize Axiom, starting from the top of the Config file. Most of the options are detailed in the Hugo Configuration Documentation.

## Core

Options related to Hugo's Core build settings:

```toml
# Change to your website's URL
# For local dev, change to: http://localhost:1313
# NOTE: NO trailing slash
baseURL = "https://example.com"

# Change to your Brand or Website Title
title = "Axiom A Hugo Theme"

# Default language
# NOTE: lowercase
# ALERT: If you change these you must add a language in the Config [languages] table, and an i18n language file
languageCode = "en-us"
defaultContentLanguage = "en-us"

# Which theme to use. Hugo allows multiple themes to be installed
theme = "axiom"

# Canonify relative URLs using baseURL
canonifyURLs = false

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

There are many more Core options that can be added to suit your needs. See the Hugo Configuration Documentation for more information.

## Permalinks

Axiom is configured to use the file name slug as the publicly accessible URL:

```shell
[permalinks]
post = "/:filename"
```

The `post` variable name refers to individual files in the `post` content Section.

## Params

Options related to Hugo's Param settings:

```toml
[params]
# Sections to include in lists and indexes
mainSections = ["post"]

# Footer copyright start year, prepended to current year
# E.g.: 2000-2020
copyrightYear = 2000
```

There are many more Param options that can be added to suit your needs. See the Hugo Configuration Documentation for more information.

## Services

Options for third party services, such as analytics, tracking, ads, and APIs:

```toml
[params.services]
# Google Analytics Id
analyticsId = "UA-DEV"
# Google Adwords Id, provided when you setup a Conversion
adwordsId = "AW-DEV"
# Google Adsense Id
adsenseId = "CA-PUB-DEV"
# Google Adsense Ad Slot Id, for ad unit shown below Posts
adsenseAdSlotId = "ID-DEV"
# Google Adsense Lazy Load
# DEFAULT: false
adsenseLazy = false
# Google Adwords Conversion Id
adwordsConversionId = "ID-DEV"
# Google Adwords Conversion value
# INTEGER (no quotes): 00.00
adwordsConversionValue = 0
# Facebook App Id
facebookApp = "FB-DEV"
# Facebook Pixel Id
facebookPixel = "FB-DEV"
# Disqus Comments Username
disqusUser = "na"
```

Services will continue to be added and improved.

## Paths

Axiom builds all the file paths for you behind the scenes. This means that when setting a Feature image in a Page or Post, you need only set the `filename.ext` or `public_id` (uuid). The paths set below will then be applied to the asset. The EXCEPTION to this rule is when using vanilla Markdown or non-Axiom shortcodes to insert assets. Axiom cannot get in the middle of that process to build up the path. In such cases, just prepend the same relative path values set here:

```toml
# Folders where assets are stored, applies to both local and CDNs
# NOTE: trailing slash
[params.path]
image = "image/"
video = "video/"
author = "image/author/"
brand = "image/brand/"
font = "font/"
pdf = "pdf/"
```

Local storage of assets refers to the Hugo website _Static_ directory (`/static/`), and the paths above would be directories nested inside Static.

For CDNs, it's typical to set the `image` path to `""` and remove it from the `author` and `brand` paths. The CDN storage bucket acts as a surrogate for the `image/` path.

## CDNs

Axiom is designed to be deployed using the latest technologies and best practices. Today that is synonymous with JAMStack, serverless edge deployment, and CDN asset delivery. However, Axiom also supports traditional web server setups with NGINX or Apache. In regards to asset delivery, Axiom supports CDNs or local file storage:

```toml
[params.cdn]
# Asset delivery provider
# VALUES: "local", "cloudinary"
# DEFAULT: local
provider = "local"
# Asset types. Used for CDNs which give different URLs for each asset type
# VALUES: image, video, raw
# DEFAULT: image
type = "image"

# Cloudinary CDN
[params.cloudinary]
# Base URL for your account, replace CLOUD_NAME.
# NOTE: trailing slash
host = "https://res.cloudinary.com/CLOUD_NAME/"
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

When `provider` is set to one of the supported CDN values, all paths will be output as absolute URLs. The URL structure will be assembled based on each CDN's design. See the `/axiom/layouts/partials/cdn-src.html` file for details.

> Alert: All config paths/URLs must end with a trailing slash `/`!

## Images

Image config options set defaults used in meta tags and fallbacks:

```toml
[params.img]
# Dimensions of 'Feature' image
width = "2048"
height = "1024"
# Default 'Feature' image name, used for Structured Data and Open-Graph for Pages/Posts without a Feature
default = "page-default.webp"
```

Choose a default image that represents the overall theme of the brand or website.

## Fonts

See the _Typography_ section below for more details.

The Font section controls if the  _Type CSS_ (`/assets/type.css`) stylesheet is used, and if font files are preloaded:

```toml
[params.font]
# Font files MIME type
# DEFAULT: ""
type = "font/woff"
# List of font files from 'type.css' to preload. Setting to empty, disables Type CSS
# DEFAULT: []
  files = ["title-400-font.woff", "sans-400-font.woff", "serif-italic-400-font.woff"]
```

If the `files` array is populated, Axiom will preload the list of font files, and link the Type CSS stylesheet in the website's `<head>` section. You'll need to have the font files either stored locally in an `example.com/static/font/` directory or hosted on a CDN supported by Axiom.

If you have many font files added in the Type CSS file, you don't have to preload them all. You can list a subset of the most important ones in the Config, and let the others load normally. As long as at least one font file is in the `files` array, the Type CSS features will be enabled.

An Example [Type CSS file](/exampleSite/assets/EXAMPLE-TYPE.css) is included in the Example Site assets directory.

> Note: Begin each URL with the `{{ .host }}` variable so that proper paths/URLs are substituted on build.

If the `files` array is empty, Axiom will use the Tailwind CSS font-family fallback settings. Either way, the display will look very similar, unless your eye is trained to typography.

If you're not using the Type CSS features, you can delete the corresponding files in the _Assets_ directory (`/assets/type.css` and `/assets/EXAMPLE-TYPE.css`) to prevent Hugo from copying empty files on build.

## Branding

Config options related to your brand or website:

```toml
[params.brand]
domain = "example.com"
email = "info@example.com"
github = "example"
facebook = "example"
twitter = "example"
instagram = "example"
youtube = "example"
pinterest = "example"
linkedin = "example"
# Stack Overflow Id
stacko = "10101010"
# Favicons. Store .ico at root of site (/static/) or CDN, and .png in params.path.brand location
faviconIco = "favicon.ico"
faviconAlt = "favicon.png"
# High-res square version of your Icon or Logo
# RECOMMENDED: 2048x2048 pixels
icon1To1 = "icon-1-1.png"
# High-res rectangular version of your Icon or Logo
# RECOMMENDED: 2048x1024 pixels
icon2To1 = "icon-2-1.png"
# SVG or IMG. 1:1 Ratio (square) is best, but 2:1 (rectangle will work)
# SVG: add css class "fill-current" to use theme colors, e.g.: <svg class="fill-current"
# VALUE: full SVG or IMG element
logo = "<svg class=\"fill-current\" viewBox=\"0 0 32 32\"><path d=\"M16,25 L32,25 L32,7 L28,7 L28,21 L26,21 L26,13 L22,13 L22,21 L18,21 L18,7 L16,7 L7,7 L7,11 L14,11 L14,21 L0,21 L0,25 L16,25 Z\"/></svg>"
```

> Remember to place all Brand image assets at the location set in the `params.path` `brand` variable.

## Menus

Axiom comes with three configurable menus. Refer to the Hugo Menus Documentation to learn how to add or remove links:

```toml
[menu]
[[menu.main]]
[[menu.mobile]]
[[menu.foot]]
```

> NOTE: Be careful adding too many items to the menus, as this could degrade mobile user experience.

## Languages

Axiom is multi-language ready:

```toml
[languages]
[languages."en-us"]
weight = 1
languageName = "US English"
```

> NOTE: If additional languages are added, be sure to create the corresponding lang file in the `i18n` directory, and menus in the Config file.

Refer to the Hugo Multilingual Documentation to learn how to add additional language support.

# Theme Features

# CDNs
## Serverless Edge Deploy, Assets, Image Transformations

Out-of-the-box, Axiom is configured to support self-hosted assets (images, pdfs, fonts, etc.) or content delivery networks. Currently, Cloudinary is the only CDN implemented. Axiom is also designed to be deployed via CDN to the edge as a JamStack website, for example on Netlify.

# Frontmatter
## Content Enhancements

__Private__: Optional. Exclude a page or post from robots indexing, sitemaps, and feeds:

```toml
+++
private = true
+++
```

Useful for pages such as 404, Privacy Policy, or Disclosures that you don't want indexed.

__Feature__: Optional. Add a featured image to the Index, Page, or Post:

```toml
+++
feature = "filename.ext"
# Optional 'Caption'
caption = "Caption text (will also be used for alt)."

# Using 'public_id' (uuid), instead of filename
feature = "5e39e315-c06c-4d81-9b4a-35fca661621c"
+++
```

> Remember to output the image and store it locally or on a CDN first.

__Author__: Optional. Author of the content:

```toml
+++
# VALUE: Author Id
author = "default"
+++
```

See the Author section below for details on configuration.

__Subtitle__: Optional. Short blurb enhancing the Title. Used in Structured Data "alternativeHeadline" field:

```toml
+++
subtitle = "25 words / 125 chars."
+++
```

SEO potential, write something relevant.

__Summary__: Optional. Description of Page, Post content. Used Summary index pages, Open-Graph and Structured Data "description" fields:

```toml
+++
summary = "Summary, and meta description. Optional, automatically generated if not provided."
+++
```

SEO potential, write something relevant.

# Archetypes
## Generators

TODO.

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

```html
[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.
```

For citations to work, Hugo _Config_ file (`config.toml`) needs the Goldmark Renderer setting `unsafe = true`. This is not specific to this theme, but part of how Hugo treats HTML in Markdown content:

```toml
[markup]
[markup.goldmark]
[markup.goldmark.renderer]
unsafe = true
```

If you prefer not to turn on this setting, there is a `blockquote` shortcode provided, which offers a cleaner API. The first parameter is required, while the other two are optional:

```markup
# Definition
{{< blockquote "Quote text" "Footer text" "Cite text" >}}

# Example
{{< blockquote "You can trade hours for dollars or ideas for millions." "Cactus Jack on" "The Shark Tank" >}}
```

# Figures
## Image Component

Axiom comes with a custom Figure shortcode which uses the same API as the built in Hugo shortcode, but has been enhanced to support CDN images with transformations. You only need to pass it the image name (e.g., `filename.ext`, `public_id` [uuid]) with or without extension and Axiom will do the rest - no need to copy/paste complicated URLs in your Markdown files.

See the Hugo Figure Shortcode Documentation for all of the options.

# Typography
# Design and Style

TODO.

# Authors
## Content Attribution

Axiom supports multiple content authors for your Posts. You can set individual Author contact data and profile images. To configure Authors, edit the _Authors_ data file (`/data/author.toml`) and output and Author profile image locally or on a CDN. Recommended size is `256x256` pixels.

See the Hugo Data File Documentation for more information.

# Sharing
## Social Media

TODO.

# Comments
## Disqus

TODO.

# Ads
## Google Adsense

Axiom is ready for Ads if you choose to serve them. There is a single responsive Ad Slot at the bottom of the Post content. If you set an Adsense Id in the _Services_ Config (`params.services` `adsenseId`), Ads will be activated, otherwise all Ads related javascript and code will not be output.

# Customization
## CSS and JS

Axiom is setup so you can use your own custom CSS and JS files. To take advantage of this feature, create the files in the _Assets_ directory (`/assets/`) and Axiom will do the rest, including preloading them for better performance. Name each file `custom.css` and `custom.js`.

The Example site Assets directory contains a pair of empty custom CSS and JS files to get you started.

If you're not using the Custom CSS and JS features, you can delete the corresponding files (`/assets/custom.css` and `/assets/custom.js`) to prevent Hugo from copying empty files on build.

# Misc.

IDE search scope:

```shell
-*/node_modules/*,-*/resources/*,-*/public/*,-*/assets/*.js,-*/assets/*.css,-*.min.js,-*.min.css,-*-lock.json,-*prism.js,-*alpine.js,-*.*project,-*.*workspace,<project>
```

# License

Creative Commons Attribution-ShareAlike 4.0 International License: [CC-BY-SA-4.0](https://github.com/jhauraw/jhaurawachsman.com/blob/master/LICENSE).

Copyright 2020 [Jhaura Wachsman](https://www.jhaurawachsman.com/)
