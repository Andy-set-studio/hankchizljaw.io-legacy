---
title: "Stalfos: CSS Framework and boilerplate"
summary: "Stalfos is a CSS framework and boilerplate to help you create lightweight and maintainable front-ends."
sort_order: 2
links:
  - text: "Stalfos documentation site"
    url: "https://stalfos.io"
    is_external: true
  - text: "Stalfos GitHub repository"
    url: "https://github.com/hankchizljaw/stalfos"
    is_external: true
  - text: "Introductory blog post"
    url: "/writing/introducing-stalfos/"
    is_external: true
---
From the Stalfos documentation site: 

> "Stalfos is an open-source, skeletal front-end development starter kit. It provides you with a solid starting-point for working with HTML, Sass and JavaScript. It also provides tools for working with images, fonts and SVG."

I built Stalfos as a boilerplate for building out front-end templates for web projects. It's designed to also continue powering the front-end for the project's lifespan, as a separate entity that lives alongside the main codebase. 

### Built around core CSS

The CSS is the main feature of Stalfos as it provides a solid starting point without encroaching on your design like Bootstrap and Foundation can do. By providing a grid system and core layout components, it prevents you from having to write the core foundations of layout over and over again.

By providing useful mixins and helpers, Stalfos tries to encourage a modular setup for your CSS whilst staying out of the way as much as possible. 

### Built to assist 

Secondary to the CSS framework, Stalfos provides a gulp-based system for dealing with your core assets such as images, SVG and fonts. 

It also provides a mechanism for building static templates with Nunjucks with a handy data system to help prevent repeated markup bloating your template files.

All-in-all, Stalfos is there to help and has been an absolute pleasure to work on over the last couple of years.