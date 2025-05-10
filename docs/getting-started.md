---
sidebar_position: 2
---

# Getting Started

## Installation

Add the following script tag to your HTML:

```html
<script src="https://cdn.usereveal.ai/widget/0.0.1/script.js"></script>
```

Once the script is loaded, you can initialize the Reveal Widget using one of the following methods:

- [Floating Widget](floating-widget.md) - A widget that appears in a corner of your page
- [Embedded Component](embedded-component.md) - A component that can be directly embedded into your page

## Basic Usage

Here's a simple example of how to initialize the floating widget:

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    RevealWidget.init({
      interviewId: "your-interview-id"
    });
  });
</script>
```

And here's how to initialize an embedded component:

```html
<div id="reveal-embed-container" style="width: 100%; height: 600px;"></div>

<script>
  RevealWidget.initEmbed({
    interviewId: "your-interview-id"
  });
</script>
```

For detailed configuration options, see the [Floating Widget](floating-widget.md) and [Embedded Component](embedded-component.md) documentation pages. 