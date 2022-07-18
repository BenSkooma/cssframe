!function(root) {
  "use strict";

  var log = true;



  var supports = checkRule('@supports', log);
  var supportsSelector = checkSupportsSelector(log);
  // var where = checkSelector(':where(*)', log);
  // var revert = checkStyle('color', 'revert');
  // var unset = checkStyle('color', 'unset');
  // var all = checkStyle('all');

  // var all = property('box-sizing');

  checkStyle('box-sizing', 'border-box');

  // console.log(checkStyle('box-sizing', 'content-box'));

  console.log('------------------------------');

  if (supports && supportsSelector) {

    console.log('YEAH!!! @supports and also @supports selector is supported!');

  } else if (supports && !supportsSelector) {

    console.log('Allright! @supports is supported!');

  } else if (!supports) {

    console.log('Oh No! @supports is not supported!');

  }

}(document)


  function property(property) {
    if (property in document.documentElement.style) {
      console.log(property +' is supported');
      return true;
    }
    console.log(property +' is not supported');
    return false;
  }





function checkStyle(prop, value) {

  value = arguments.length === 2 ? value : 'inherit';

  var support = api(prop, value);

  // if (support) return true;

  var dummy = document.createElement('div');
  var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
  var length = prefixes.length;
  var camelRe = /-([a-z]|[0-9])/ig;
  // var camelRe = /[^a-zA-Z0-9]+(.)/g;

  // console.log(prop, value);

  var camel = toCamelCase(prop);
  
  // console.log(camel);

  var capitalized = camel.charAt(0).toUpperCase() + camel.slice(1);
  
  // console.log(capitalized);

  // console.log(prop, camel, value);

  console.log('.................');

  support = canSetProperty(prop, camel, value);

  // console.log(support);

  while (!support && length--) {

    var prefix = prefixes[length] + capitalized;

    console.log(prefix);

    // console.log('in while');

    // var prefixed = '-' + prefixes[length].toLowerCase() + '-' + prop;

    // console.log(prefixed);
    
    // support = api(prefixed, value);
    
    // if (!support) {
    //   camel = prefixes[length] + capitalized;
    //   console.log(prefixed, camel, value);
    //   support = canSetProperty(prefixed, camel, value);
    // }
    
    // console.log(prop, ':', value, '=', support);
    // return support;

  }


  function api(prop, value) {
    if (window.CSS && CSS.supports) {
      var result = CSS.supports(prop, value);
      if (value === 'inherit') {
        console.log('API', prop, '=', result);
      } else {
        console.log('API', prop, ':', value, '=', result);
      }
      return result;
    }
    return false;
  }

  function toCamelCase(str) {
    return str.toLowerCase().replace(camelRe, function(match, chr) { return chr.toUpperCase(); });
  }

  function canSetProperty(prop, camel, value) {

    // console.log('.................');
    console.log(dummy.style);

    //   function property(property, html) {
//     if (property in html.style) {
//       console.log(property +' is supported');
//       return true;
//     }
//     console.log(property +' is not supported');
//     return false;
//   }

    // if (prop in document.documentElement.style) {
    //   console.log(prop, 'is supported');
    //   return true;
    // }

    var support = camel in dummy.style;

    // console.log(camel);

    if (value === 'inherit') return support;

    dummy.style.cssText = prop + ':' + value;
    return support && dummy.style[camel] !== '';
  }


  
}










/* Feature test CSS at-rule support
/*----------------------------------------------------*/
function checkRule(value, log) {
  var rule = value;
  var rule_prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''];
  var support = false;
  var length = rule_prefixes.length;
  rule = rule.replace(/^@/, '').toUpperCase().split('-').join('_') + '_RULE';
  while (!support && length--) support = (rule_prefixes[length] + rule) in CSSRule;
  if (log) console.log(value, '=',  support);
  return support;
}

/* Feature test CSS.API @supports selector() support
/*----------------------------------------------------*/
function checkSupportsSelector(log) {
  if (window.CSS && CSS.supports) {
    var result = CSS.supports('selector(*)');
    if (log) console.log('API', '@supports selector(*) =', result);
    return result;
  } else { return false; }
}

/* Feature test CSS selector support
/*----------------------------------------------------*/
function checkSelector(selector, log) {

  if (api(selector)) return true;

  var head = document.head || document.documentElement;
  var style = document.createElement('style');

  head.insertBefore(style, head.firstChild);

  var sheet = style.sheet;
  var result = append(selector);

  if (log) console.log(selector, '=', result);

  return result;

  function api(selector) {
    if (window.CSS && CSS.supports) {
      var support = CSS.supports('selector('+ selector +')');
      if (log) console.log('API', selector, '=', support);
      return true;
    } else {
      return false;
    }
  }

  function append(selector) {
    try {
      sheet.insertRule(selector + '{}', 0);
      sheet.deleteRule(0);
      return true;
    } catch (e) {
      return false;
    }
  }
}