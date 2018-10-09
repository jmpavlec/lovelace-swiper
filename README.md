# lovelace-swiper

Swiping left/right on mobile devices will change the active tab.

## Instalation

1. Copy `lovelace-swiper.js` in to `/www/lovelace-swiper`

2. Add the resource in `ui-lovelace.yaml`
```yaml
resources:
  - url: /local/lovelace-swiper/lovelace-swiper.js?v=1.0.0
    type: js
```

### Notes
Help is needed on this! I've never done anything with polymer, so it was really hard for me to figure out how to access things inside a "shadowRoot".  It would also be cool if there was a smoother way to switch these tabs without reloading the page, but maybe that's not how lovelace works overall.  This setup just changes your window location to each tab.

### TODO
* Add configuration for continuous swipe

