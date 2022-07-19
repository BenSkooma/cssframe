




































// function load(path, name) {
//   var head = document.getElementsByTagName('HEAD')[0];
//   var link = document.createElement('link');
//   var base = head.getElementsByTagName('link')[0];
//   link.rel = 'stylesheet';
//   link.media = 'all';
//   link.href = path + name + '.css';
//   base.parentNode.insertBefore(link, base);
// }


/* Feature test CSS Property and value support
/*----------------------------------------------------*/
// function checkStyle(prop, value) {

//   value = arguments.length === 2 ? value : 'inherit';
  
//   // var support = api(prop, value);
//   // if (support) return true;

//   if (window.CSS && CSS.supports) return api(prop, value);

//   var dummy = document.createElement('div');
//   var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
//   var length = prefixes.length;

//   var camel = toCamelCase(prop);
//   var capitalized = camel.charAt(0).toUpperCase() + camel.slice(1);

//   support = canSetProperty(prop, camel, value);

//   while (!support && length--) {
//     var prefixed = '-' + prefixes[length].toLowerCase() + '-' + prop;
//     support = api(prefixed, value);
//     if (!support) {
//       camel = prefixes[length] + capitalized;
//       support = canSetProperty(prefixed, camel, value);
//     }
//   }

//   console.log(prop, ':', value, '=', support);
//   return support;

//   /* ---------------------------------- */

//   function api(prop, value) {
//     var result = CSS.supports(prop, value);
//     if (value === 'inherit') {
//       console.log('API', prop, '=', result);
//     } else {
//       console.log('API', prop, ':', value, '=', result);
//     }
//     return result;
//   }

//   function toCamelCase(str) {
//     return str.toLowerCase().replace(/-([a-z]|[0-9])/ig, function(match, chr) { return chr.toUpperCase(); });
//   }

//   function canSetProperty(prop, camel, value) {
//     var support = camel in dummy.style;
//     if (value === 'inherit') return support;
//     dummy.style.cssText = prop + ':' + value;
//     return support && dummy.style[camel] !== '';
//   }
  
// }



/* Feature test CSS at-rule support
/*----------------------------------------------------*/
// function checkRule(value, log) {
//   var rule = value;
//   var rule_prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''];
//   var support = false;
//   var length = rule_prefixes.length;
//   rule = rule.replace(/^@/, '').toUpperCase().split('-').join('_') + '_RULE';
//   while (!support && length--) support = (rule_prefixes[length] + rule) in CSSRule;
//   if (log) console.log(value, '=',  support);
//   return support;
// }

/* Feature test CSS.API @supports selector() support
/*----------------------------------------------------*/
// function checkSupportsSelector(log) {

//   if (window.CSS && CSS.supports) {
//     var result = CSS.supports('selector(*)');
//     if (log) console.log('API', '@supports selector(*) =', result);
//     return result;
//   } else { return false; }
// }

/* Feature test CSS selector support
/*----------------------------------------------------*/
// function checkSelector(selector, log) {

//   if (window.CSS && CSS.supports) return api(selector);

//   var head = document.head || document.documentElement;
//   var style = document.createElement('style');

//   head.insertBefore(style, head.firstChild);

//   var sheet = style.sheet;
//   var result = append(selector);

//   if (log) console.log(selector, '=', result);

//   return result;

//   function api(selector) {
//     var support = CSS.supports('selector('+ selector +')');
//     if (log) console.log('API', selector, '=', support);
//     return support;
//   }

//   function append(selector) {
//     try {
//       sheet.insertRule(selector + '{}', 0);
//       sheet.deleteRule(0);
//       return true;
//     } catch (e) {
//       return false;
//     }
//   }
// }





















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

//          (pError) {}

//     mem[prop+values] = result;
//     return result;
//   }
// })();


// ///////// TEST: ////////////////////
// console.log(
// cssPropertySupported('display', ['-ms-flexbox', '-webkit-box', 'flex'])
// ) if (element.style.display === name){
//             result = true;
//             break;
//           }
//         }
//     }
//     catch 