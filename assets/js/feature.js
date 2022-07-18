"use strict";


/*
 * Common varilables
 */
var el = document.createElement('div');
var camelRe = /-([a-z]|[0-9])/ig;


/*
 * Convert kebab-case to camel-case
 *
 * @param {String} prop
 * @return {String}
 */
function toCamelCase(prop) {
  return prop.replace(camelRe, function(all, char) {
    (char + '').toUpperCase()
  });
}


/*
 * Check the native `CSS.supports`
 * method if it exists
 *
 * @param {String} prop
 * @param {String} value (optional)
 * @return {Boolean}
 */
function checkNativeSupport(prop, value) {
  if (window.CSS && CSS.supports) {
      return CSS.supports(prop, value);
  }
  return false;
}

/*
 * Determine support by applying the
 * property/value to the test element
 * and checking if the property exists
 * in the style object
 *
 * @param {String} prop
 * @param {String} camel
 * @param {String} value
 * @return {Boolean}
 */
function canSetProperty(prop, camel, value) {
  var support = camel in el.style;
  if (value === 'inherit') {
    return support;
  }
  el.style.cssText = prop + ':' + value;
  return support && el.style[camel] !== '';
}


/*
 * Detect support for CSS properties and
 * their assignable values
 *
 * @param {String} prop
 * @param {String} value (optional)
 * @return {Boolean}
 */
function isStyleSupported(prop, value) {

  value = arguments.length === 2 ? value : 'inherit';

  var support = checkNativeSupport(prop, value);


  if (support) {
    if (arguments.length < 2) {
      console.log(prop + ' =' + support);
    } else {
      console.log(prop, ':', value, '=', support);
    }
    return true;
  }

  var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
  var camel = toCamelCase(prop);
  var capitalized = camel.charAt(0).toUpperCase() + camel.slice(1);
  support = canSetProperty(prop, camel, value);
  var length = prefixes.length;
  while (!support && length--) {
      var prefixed = '-' + prefixes[length].toLowerCase() + '-' + prop;
      support = checkNativeSupport(prefixed, value);
      if (!support) {
          camel = prefixes[length] + capitalized;
          support = canSetProperty(prefixed, camel, value);
      }
  }
  console.log(prop, ':', value, '=', support);
  return support;
}



















/*
 * Append a style element to the DOM
 * for testing selectors with
 */
var root = document.documentElement;
var head = document.head || root;
var style = document.createElement('style');
head.insertBefore(style, head.firstChild);
var sheet = style.sheet;
/*
 * Feature test CSS selector support
 */
function isSelectorSupported(selector) {

  if (cssApi(selector)) return true;

  try {
    sheet.insertRule(selector + '{}', 0);
    sheet.deleteRule(0);
    return true;
  } catch (e) { return false; }


  function cssApi(val) {

    if (window.CSS && CSS.supports) {
      console.log('native check!');
      return CSS.supports(val);
    }
    console.log('no native check ...'); 
    return false;
  }

}





/* Feature test CSS at-rule support */
function isAtRuleSupported(rule) {
  var atRe = /^@/;
  var rule_prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''];
  var support = false;
  var length = rule_prefixes.length;
  rule = rule.replace(atRe, '').toUpperCase().split('-').join('_') + '_RULE';
  while (!support && length--) support = (rule_prefixes[length] + rule) in CSSRule;
  return support;
}





console.log('------------------------------');
console.log('isAtRuleSupported(@supports)');
console.log(isAtRuleSupported('@supports'));
console.log('------------------------------');
console.log('isSelectorSupported(:not(*))');
console.log(isSelectorSupported(':not(*)'));
console.log('------------------------------');
console.log(isStyleSupported('all', 'unset'));
console.log('------------------------------');




// console.log('...............................................................');

// if (window.CSS) {

//   /* CSS */

//   console.log('CSS: true');

//   console.log('CSS.supports: ' + check(CSS.supports('display', 'block')));
//   console.log('SUPPORTS_RULE: ' + check('SUPPORTS_RULE' in window.CSSRule));
//   console.log('CSS.supports(selector): ' + check(CSS.supports('selector(*)')));

// } else { console.log('CSS: false'); }

// console.log('...............................................................');


// function check(cond) {

//   if (cond) return true;

//   return false;

// }