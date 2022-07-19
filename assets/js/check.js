var log = true;

var fallback_css = 'assets/css/reset.legacy.js.css';
var conditional = document.getElementById("conditional");
var supports = checkRule('@supports', log);
var where = checkSelector(':where(*)', log);
var applied = cssApplied(document.documentElement);

if (!supports || !where && !applied) conditional.setAttribute('href', fallback_css);

function cssApplied(element) {
  var content = window.getComputedStyle(element, '::before').content;
  if (!content || content === 'none') return false;
  return true;
}

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

function checkSelector(selector, log) {
  if (window.CSS && CSS.supports) return api(selector);
  var head = document.head || document.documentElement;
  var style = document.createElement('style');
  head.insertBefore(style, head.firstChild);
  var sheet = style.sheet;
  var result = append(selector);
  if (log) console.log(selector, '=', result);
  return result;
  function api(selector) {
    var support = CSS.supports('selector('+ selector +')');
    if (log) console.log('API', selector, '=', support);
    return support;
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