---
draft: true
date: {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
lastmod: {{ dateFormat "2006-01-02T15:00:00Z" now.UTC }}
author: default
title: "{{ replace .TranslationBaseName "-" " " | title }}"
subtitle: "25 words / 125 chars. Used in listing pages for excerpt."
featured: "filename.ext"
featured:
  img: "filename.ext"
  caption: "Caption and Alt. This variant used on regular pages, NOT posts pages."
summary: |
  Summary, and meta description. Optional, automatically generated if not provided.
---

And go...
