---
sidebar_position: 4
---

# Embedded Component

The embedded component allows you to directly integrate the Reveal Widget into your page layout.

## Configuration

Initialize the embedded component with the `RevealWidget.initEmbed()` method:

```javascript
const embedInstance = RevealWidget.initEmbed({
  interviewId: "your-interview-id",
  targetSelector: "#reveal-embed-container",
  theme: "light",
  primaryColor: "#4a90e2",
  autoLoad: true,
  interviewee: "optional-interviewee-id",
  language: "english"
});
```

### Configuration Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `interviewId` | String | Required | The ID of your Reveal interview |
| `targetSelector` | String | `"#reveal-embed-container"` | CSS selector for your embed container |
| `theme` | String | `"light"` | Component theme: `"light"` or `"dark"` |
| `primaryColor` | String | — | Custom primary color (hex/RGB/name) |
| `autoLoad` | Boolean | `true` | Whether to load content automatically |
| `interviewee` | String | — | Identifier for the interview participant |
| `language` | String | `"english"` | Language for the interview session: `"english"` or `"portuguese"` |

## Methods

```javascript
// Remove the embed from the page
embedInstance.destroy();

// Reload the embed with current configuration
embedInstance.reload();
```

## Examples

### Basic Implementation

```html
<div id="reveal-embed-container" style="width: 100%; height: 600px;"></div>

<script>
  RevealWidget.initEmbed({
    interviewId: "your-interview-id"
  });
</script>
```

### Custom Container

```html
<div id="my-reveal-container" style="width: 100%; height: 500px;"></div>

<script>
  RevealWidget.initEmbed({
    interviewId: "your-interview-id",
    targetSelector: "#my-reveal-container",
    theme: "dark"
  });
</script>
``` 