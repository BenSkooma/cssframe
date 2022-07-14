/* Feature Detection
/* ---------------------------------- */
!function(a,b){"use strict";b.documentElement.className=b.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(window,document);

!function(result, html){"use strict";if(!result || result === 'none') addClass(html, 'no-where')} (window.getComputedStyle(document.documentElement,':before').content, document.documentElement);

/* CSS-Vars-Ponyfill Config
/* ---------------------------------- */
cssVars({
  rootElement   : document,
  shadowDOM     : false,
  include       : 'link[rel=stylesheet],style',
  exclude       : '',
  variables     : {},
  onlyLegacy    : true,
  preserveStatic: true,
  preserveVars  : false,
  silent        : false,
  updateDOM     : true,
  updateURLs    : true,
  watch         : false
});

/* Add Class Function
/* ---------------------------------- */

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className)
  else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }
  function addClass(el, className) {
  if (el.classList) el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
  }