/* Feature Detection
/* ---------------------------------- */
/* js + touch */
!function(d){"use strict";d.documentElement.className=d.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(document);
/* :where() */
!function(result,html){"use strict";if(!result||result==='none')addClass(html,'no-where')}(window.getComputedStyle(document.documentElement,':before').content,document.documentElement);


// testProperty('all');

// testValue('unset', 'unset', 'all');

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


testValue('display', 'unset');


function testValue(property, value) {

  var root = document.documentElement;

  console.log(root.style);

  if (property in root.style) {

    console.log(property +' is supported');

    // Property is Supported

    var dummy = document.createElement('p');

    dummy.style[property] = value;
    
    if (dummy.style[property]) {

      console.log(value +' is supported'); console.log(dummy);

      // Value is Supported

    } else {

      console.log(value +' is not supported');

      // Value is NOT Supported

    }

  } else {

    console.log(property +' is not supported');

    // Property is NOT Supported

  }

}

// function testValue(id, value, property) {
//   var dummy = document.createElement('p');
//   var html = document.documentElement;
//   dummy.style[property] = value;

//   if (dummy.style[property]) {
//     html.classList.add(id);
//     return true;
//   }

//   html.classList.add('no-' + id);
//   return false;
// }


function testProperty(property) {
  document.createElement('p').style[property];
  if (property in document.documentElement.style)
  return true;
  addClass(document.documentElement, 'no-' + property.toLowerCase()); 
  return false;
}

// function testProperty(property) {
//   var html = document.documentElement;

//   if (property in html.style) {
//     html.classList.add(property.toLowerCase());
//     return true;
//   }

//   html.classList.add('no-' + property.toLowerCase());
//   return false;
// }