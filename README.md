<h1 align="center">
  <a href="https://quilljs.com/" title="Quill">Quill Rich Text Editor</a>
</h1>
<p align="center">
  <a href="https://quilljs.com/" title="Quill"><img alt="Quill Logo" src="https://quilljs.com/assets/images/logo.svg" width="180"></a>
</p>
<p align="center">
  <a title="Documentation" href="https://quilljs.com/docs/quickstart"><strong>Documentation</strong></a>
  &#x2022;
  <a title="Development" href="https://github.com/slab/quill/blob/main/.github/DEVELOPMENT.md"><strong>Development</strong></a>
  &#x2022;
  <a title="Contributing" href="https://github.com/slab/quill/blob/main/.github/CONTRIBUTING.md"><strong>Contributing</strong></a>
  &#x2022;
  <a title="Interactive Playground" href="https://quilljs.com/playground/"><strong>Interactive Playground</strong></a>
</p>
<p align="center">
  <a href="https://github.com/slab/quill/actions" title="Build Status"><img src="https://github.com/slab/quill/actions/workflows/main.yml/badge.svg" alt="Build Status"></a>
  <a href="https://npmjs.com/package/quill" title="Version"><img src="https://img.shields.io/npm/v/quill.svg" alt="Version"></a>
  <a href="https://npmjs.com/package/quill" title="Downloads"><img src="https://img.shields.io/npm/dm/quill.svg" alt="Downloads"></a>
</p>

<hr/>

[Quill](https://quilljs.com/) is a modern rich text editor built for compatibility and extensibility. It was created by [Jason Chen](https://twitter.com/jhchen) and [Byron Milligan](https://twitter.com/byronmilligan) and actively maintained by [Slab](https://slab.com).

## Changelog

### Version 2.0.4-wisej

#### Major Fixes

##### Selection Handling Improvements
- Fixed Chrome-specific selection issues with Ctrl+A/Cmd+A
- Added proper type for `range` parameter in keyboard module
- Enhanced selection behavior to work consistently across browsers
- Fixed selection range calculation in Chrome

##### UI and Layout Enhancements
1. Dynamic Toolbar Improvements
   - Implemented responsive toolbar calculation
   - Fixed toolbar overflow issues in constrained containers
   - Added proper flex-wrap support for toolbar items
   - Enhanced toolbar item spacing and alignment

2. Container Overflow Handling
   - Fixed editor container overflow behavior
   - Added proper height and width calculations
   - Implemented scrolling behavior for overflow content
   - Set `width: 100%` and `height: 100%` for better container sizing
   - Added `overflow: auto` to handle content overflow gracefully

#### TypeScript Fixes

##### Fixed Type Safety in Range Parameters
- Added proper type annotations for `Range` constructor calls across test files
- All `Range` constructors now explicitly specify both `index` and `length` parameters
- Fixed implicit 'any' type warnings in keyboard bindings

##### Added Missing Event Source Parameters
- Added `Emitter.sources.USER` parameter to all `setRange` calls in test files
- This properly specifies the source of range changes as user interactions
- Affects multiple test files in the codebase

##### UI Improvements
- Added white background color to the Quill toolbar for better visibility
- Enhanced toolbar styling for better visual consistency

#### Browser Compatibility
- Fixed Chrome-specific issues with text selection
- Improved Ctrl+A/Cmd+A behavior across browsers
- Enhanced toolbar rendering in different viewport sizes

To get started, check out [https://quilljs.com/](https://quilljs.com/) for documentation, guides, and live demos!

## Quickstart

Instantiate a new Quill object with a css selector for the div that should become the editor.

```html
<!-- Include Quill stylesheet -->
<link
  href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
  rel="stylesheet"
/>

<!-- Create the toolbar container -->
<div id="toolbar">
  <button class="ql-bold">Bold</button>
  <button class="ql-italic">Italic</button>
</div>

<!-- Create the editor container -->
<div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br /></p>
</div>

<!-- Include the Quill library -->
<script src="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js"></script>

<!-- Initialize Quill editor -->
<script>
  const quill = new Quill("#editor", {
    theme: "snow",
  });
</script>
```

Take a look at the [Quill](https://quilljs.com/) website for more documentation, guides and [live playground](https://quilljs.com/playground/)!

## Download

```shell
npm install quill
```

### CDN

```html
<!-- Main Quill library -->
<script src="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.js"></script>

<!-- Theme included stylesheets -->
<link
  href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.snow.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.bubble.css"
  rel="stylesheet"
/>

<!-- Core build with no theme, formatting, non-essential modules -->
<link
  href="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.core.css"
  rel="stylesheet"
/>
<script src="https://cdn.jsdelivr.net/npm/quill@2/dist/quill.core.js"></script>
```

## Community

Get help or stay up to date.

- [Contribute](https://github.com/slab/quill/blob/main/.github/CONTRIBUTING.md) on [Issues](https://github.com/slab/quill/issues)
- Ask questions on [Discussions](https://github.com/slab/quill/discussions)

## License

BSD 3-clause
