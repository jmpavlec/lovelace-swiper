# lovelace-swiper

Swiping left/right on mobile devices will change the active tab.

## Installation

1. Copy `lovelace-swiper.js` in to `/www/lovelace-swiper`

2. Add the resource in `ui-lovelace.yaml`
```yaml
resources:
  - url: /local/lovelace-swiper/lovelace-swiper.js?v=1.1.0
    type: js
```

### Configuration
* Modify the `swiperWrapAround` variable at the top if you don't want it to wrap around. Default allows it to wrap around.
* Modify the `swiperHorizontalSwipeIgnore` variable at the top of the script to adjust the sensitivity of the swipe.