!function(root) {
  "use strict";

  var log = true;

  var conditional = document.querySelector('.conditional');

  console.log(conditional);

  var supports = checkRule('@supports', log);
  var supportsSelector = checkSupportsSelector(log);
  var where = checkSelector(':where(*)', log);
  var revert = checkStyle('display', 'revert');
  var unset = checkStyle('display', 'unset');
  var unset = checkStyle('all', 'unset');
  var all = checkStyle('all');

  console.log('------------------------------');

  if (supports && supportsSelector) {

    console.log('YEAH!!! @supports and also @supports selector is supported!');

  } else if (supports && !supportsSelector) {

    console.log('Allright! @supports is supported!');

  } else if (!supports) {

    console.log('Oh No! @supports is not supported!');

    // load('assets/css/modules/','reset.nosupports');

    conditional.setAttribute('href', 'assets/css/reset.legacy.css');

  } else if (!supportsSelector) {

    console.log('Oh No! @supports is not supported!');

    conditional.setAttribute('href', 'assets/css/reset.legacy.css');

  } else if (!supports && !supportsSelector) {

    console.log('Oh No! @supports is not supported!');

    conditional.setAttribute('href', 'assets/css/reset.legacy.css');

  }

}(document)


function load(path, name) {
  var head = document.getElementsByTagName('HEAD')[0];
  var link = document.createElement('link');
  var base = head.getElementsByTagName('link')[0];
  link.rel = 'stylesheet';
  link.media = 'all';
  link.href = path + name + '.css';
  base.parentNode.insertBefore(link, base);
}


/* Feature test CSS Property and value support
/*----------------------------------------------------*/
function checkStyle(prop, value) {

  value = arguments.length === 2 ? value : 'inherit';
  
  var support = api(prop, value);
  if (support) return true;

  var dummy = document.createElement('div');
  var prefixes = ['Webkit', 'Moz', 'O', 'ms'];
  var length = prefixes.length;

  var camel = toCamelCase(prop);
  var capitalized = camel.charAt(0).toUpperCase() + camel.slice(1);

  support = canSetProperty(prop, camel, value);

  while (!support && length--) {
    var prefixed = '-' + prefixes[length].toLowerCase() + '-' + prop;
    support = api(prefixed, value);
    if (!support) {
      camel = prefixes[length] + capitalized;
      support = canSetProperty(prefixed, camel, value);
    }
  }

  console.log(prop, ':', value, '=', support);
  return support;

  /* ---------------------------------- */

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
    return str.toLowerCase().replace(/-([a-z]|[0-9])/ig, function(match, chr) { return chr.toUpperCase(); });
  }

  function canSetProperty(prop, camel, value) {
    var support = camel in dummy.style;
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