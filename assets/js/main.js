/* Feature Detection
/* ---------------------------------- */

!function(d){"use strict";d.documentElement.className=d.documentElement.className.replace("no-js","js"),("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)&&(document.documentElement.className=document.documentElement.className.replace("no-touch","touch"))}(document);

/* ---------------------------------- */

cssVars({ shadowDOM : true });

/* ---------------------------------- */

// !function(root,path) {

//   var where = where(root.documentElement);
//   var all = property('all', root.documentElement);
//   var unset = value('unset');
//   var revert = value('revert');

//   if(!where) {
//     if (all && unset && revert) load('base.legacy');
//     if (all && unset && !revert) load('base.legacy.nr');
//     if (!all && unset && !revert)load('base.legacy.na.nr');
//     if (all && !unset && !revert) load('base.legacy.nu.nr');
//     if (!all && !unset && !revert) load('base.legacy.na.nu.nr');
//   }

//   function value(value) {
//     var dummy = root.createElement('p');
//     dummy.style['display'] = value;
//     if (dummy.style['display']) {
//       console.log(value +' is supported');
//       return true;
//     }
//     console.log(value +' is not supported');
//     return false;
//   }
//   function property(property, html) {
//     if (property in html.style) {
//       console.log(property +' is supported');
//       return true;
//     }
//     console.log(property +' is not supported');
//     return false;
//   }
//   function where(element) {
//     var content = window.getComputedStyle(element, ':before').content;
//     if (!content || content === 'none') {
//       console.log(':where is not supported'); 
//       return false;
//     }
//     console.log(':where is supported');
//     return true;
//   }
//   function load(name) {
//     var head = root.getElementsByTagName('head')[0];
//     var link = root.createElement('link');
//     var base = head.getElementsByTagName('link')[0];
//     link.rel = 'stylesheet';
//     link.media = 'all';
//     link.href = path + name + '.css';
//     base.parentNode.insertBefore(link, base);
//   }

// }(document,'assets/css/legacy/');

/* Add Class Function
/* ---------------------------------- */

// function hasClass(el, className) {
//   if (el.classList) return el.classList.contains(className)
//   else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
//   }
//   function addClass(el, className) {
//   if (el.classList) el.classList.add(className)
//   else if (!hasClass(el, className)) el.className += " " + className
//   }

// function testValue(property, value) {
//   var root = document.documentElement;
//   if (property in root.style) {
//     console.log(property +' is supported');
//     // Property is Supported
//     var dummy = document.createElement('p');
//     dummy.style[property] = value;
//     if (dummy.style[property]) {
//       console.log(value +' is supported'); console.log(dummy);
//       // Value is Supported
//       return true;
//     } else {
//       console.log(value +' is not supported');
//       // Value is NOT Supported
//       return false;
//     }
//   } else {
//     console.log(property +' is not supported');
//     // Property is NOT Supported
//     return false;
//   }
// }

// function testProperty(property) {
//   document.createElement('p').style[property];
//   if (property in document.documentElement.style)
//   return true;
//   addClass(document.documentElement, 'no-' + property.toLowerCase()); 
//   return false;
// }


// var cssPropertySupported = (function(){
//   var mem = {}; // save test results for efficient future calls with same parameters

//   return function cssPropertySupported(prop, values) {
//     if( mem[prop+values] )
//       return mem[prop+values];

//     var element = document.createElement('p'),
//         index = values.length,
//         name,
//         result = false;

//     try {
//         while (index--) {
//           name = values[index];
//           element.style.display = name;

//           if (element.style.display === name){
//             result = true;
//             break;
//           }
//         }
//     }
//     catch (pError) {}

//     mem[prop+values] = result;
//     return result;
//   }
// })();


// ///////// TEST: ////////////////////
// console.log(
// cssPropertySupported('display', ['-ms-flexbox', '-webkit-box', 'flex'])
// )