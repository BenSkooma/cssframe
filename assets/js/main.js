/* Feature Detection
/* ---------------------------------- */

!function(d){"use strict";d.documentElement.className=d.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(document);

// checkSupportsNot(document.documentElement);

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

// function checkSupportsNot(html) {

//   if(!cssApplied(html)) addClass(html, 'no-supports-not');

//   function cssApplied(element) {
//     var content = window.getComputedStyle(element, '::before').content;
//     if (!content || content === 'none') return false;
//     return true;
//   }

//   function hasClass(el, className) {
//     if (el.classList)
//       return el.classList.contains(className)
//     else
//       return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
//   }
  
//   function addClass(el, className) {
//     if (el.classList)
//       el.classList.add(className)
//     else if (!hasClass(el, className)) el.className += " " + className
//   }

// }