/* Feature Detection
/* ---------------------------------- */

!function(d){"use strict";d.documentElement.className=d.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(document);

/* ---------------------------------- */

cssVars({
  rootElement   : document,
  shadowDOM     : false,
  include       : 'link[rel=stylesheet],style,import',
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

/* ---------------------------------- */