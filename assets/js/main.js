/* Feature Detection : js,touch
/* ---------------------------------- */
!function(a,b){"use strict";b.documentElement.className=b.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(window,document);

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