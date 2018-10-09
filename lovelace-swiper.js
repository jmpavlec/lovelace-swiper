document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

tabs = document.querySelectorAll('home-assistant')[0].shadowRoot.querySelector('home-assistant-main').shadowRoot.querySelector('app-drawer-layout').querySelector('iron-pages').querySelector('partial-panel-resolver').shadowRoot.querySelector('#panel').querySelector('ha-panel-lovelace').shadowRoot.querySelector('hui-root').shadowRoot.querySelector('ha-app-layout').querySelector('paper-tabs').querySelectorAll('paper-tab')

function getTouches(evt) {
  return evt.touches ||             // browser API
    evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
  xDown = getTouches(evt)[0].clientX;
  yDown = getTouches(evt)[0].clientY;
};

function handleTouchMove(evt) {
  if (!xDown || !yDown) {
    return;
  }

  var xUp = evt.touches[0].clientX;
  var yUp = evt.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      tabs.forEach(
        function (currentValue, currentIndex, listObj) {
          if (currentValue.classList.contains('iron-selected')) {
            new_tab = currentIndex + 1
            if (new_tab == tabs.length - 1) { new_tab = 0 }
            window.location = '/lovelace/' + new_tab
          }
        }
      );
    } else {
      /* right swipe */
      tabs.forEach(
        function (currentValue, currentIndex, listObj) {
          if (currentValue.classList.contains('iron-selected')) {
            new_tab = currentIndex - 1
            if (new_tab == -1){ new_tab = tabs.length - 1 }
            window.location = '/lovelace/' + new_tab
          }
        }
      );
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }
  /* reset values */
  xDown = null;
  yDown = null;
};
