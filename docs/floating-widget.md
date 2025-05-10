---
sidebar_position: 3
---

# Floating Widget

The floating widget is a non-intrusive button that appears in a corner of your site and expands into a modal when clicked.

## Configuration

Initialize the floating widget with the `RevealWidget.init()` method:

```javascript
const widgetInstance = RevealWidget.init({
  interviewId: "your-interview-id",
  position: "bottom-right",
  theme: "light",
  primaryColor: "#4a90e2",
  autoOpenOnScroll: false,
  scrollPercentage: 60,
  interviewee: "optional-interviewee-id",
  language: "english"
});
```

### Configuration Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `interviewId` | String | Required | The ID of your Reveal interview |
| `position` | String | `"bottom-right"` | Widget placement: `"bottom-right"`, `"bottom-left"`, `"top-right"`, `"top-left"` |
| `theme` | String | `"light"` | Widget theme: `"light"` or `"dark"` |
| `primaryColor` | String | — | Custom primary color (hex/RGB/name) |
| `autoOpenOnScroll` | Boolean | `false` | Whether to automatically open the widget when user scrolls to a specified page depth |
| `scrollPercentage` | Number | `60` | Page scroll percentage (0-100) to trigger auto-open |
| `interviewee` | String | — | Identifier for the interview participant |
| `language` | String | `"english"` | Language for the interview session: `"english"` or `"portuguese"` |

## Methods

```javascript
// Remove the widget from the page
widgetInstance.close();
```

## Examples

### Basic Implementation

```html
<script>
  document.addEventListener('DOMContentLoaded', function() {
    RevealWidget.init({
      interviewId: "your-interview-id"
    });
  });
</script>
```

### Custom Styled Widget

```html
<script>
  RevealWidget.init({
    interviewId: "your-interview-id",
    position: "bottom-left",
    theme: "dark",
    primaryColor: "#FF5733"
  });
</script>
```

### Auto-opening Widget

```html
<script>
  RevealWidget.init({
    interviewId: "your-interview-id",
    autoOpenOnScroll: true,
    scrollPercentage: 40
  });
</script>
```

### Portuguese Language Widget

```html
<script>
  RevealWidget.init({
    interviewId: "your-interview-id",
    language: "portuguese"
  });
</script>
``` 