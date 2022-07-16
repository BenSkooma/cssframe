// function isAtRuleSupported(rule) {
//   var support = false;
//   // Create an array of vendor prefixes
//   var prefixes = ['MOZ_', 'WEBKIT_', 'O_', 'MS_', ''], length = prefixes.length;
//   // Convert the rule to a form compatible with the `CSSRule` type constants
//   rule = rule.replace(/^@/, '').toUpperCase().split('-').join('_') + '_RULE';
//   while (!support && length--) {
//       // Starting with the unprefixed version, iterate over all the vendor
//       // prefixes to determine browser support
//       support = (prefixes[length] + rule) in window.CSSRule;
//   }
//   return support;
// }


  console.log(window.CSSSupportsRule);

  console.log(isAtRuleSupported('@supports'));



// var supported = false;

// if (window.CSS) {
//     supported = window.CSS.supports("display","flex");
// } else {
//     alert('no-where');
// }







// if (window.CSS) {

//   console.log('CSS supported');


//   console.log('selector: ' + selector(document.documentElement));






//   var test = CSS.supports('selector(:where(*))');

//   if (test) {

//     console.log ("where: " + test);

//   } else {

//     console.log ("NOPE.... where: " + test);

//     load('assets/css/modules/','js.reset.nowhere');

//   }

// } else {
//   console.log('CSS not supported');
// }


// function selector(element) {

//   var content = window.getComputedStyle(element, '::after').content;
  
//   if (!content || content === 'none') return false;

//   return true;
// }


// function load(path, name) {
//   var head = document.getElementsByTagName('head')[0];
//   var link = document.createElement('link');
//   var base = head.getElementsByTagName('link')[0];
//   link.rel = 'stylesheet';
//   link.media = 'all';
//   link.href = path + name + '.css';
//   base.parentNode.insertBefore(link, base);
// }


// const test = CSS.supports('selector(:where(*)');
// console.log ("where " + test);



// if (window.CSS) {
//   const smoothscroll = CSS.supports ("scroll-behavior","smooth");
//   console.log ("smoothscroll " + smoothscroll);
// } else {
//   console.log('no support');
// }

