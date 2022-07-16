// var supported = false;

// if (window.CSS) {
//     supported = window.CSS.supports("display","flex");
// } else {
//     alert('no-where');
// }

if (window.CSS) {

  console.log('CSS supported');

  var test = CSS.supports('selector(:where(*))');

  if (test) {

    console.log ("where: " + test);

  } else {

    console.log ("NOPE.... where: " + test);

    load('assets/css/modules/','js.reset.nowhere');

  }

} else {
  console.log('CSS not supported');
}


function load(path, name) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  var base = head.getElementsByTagName('link')[0];
  link.rel = 'stylesheet';
  link.media = 'all';
  link.href = path + name + '.css';
  base.parentNode.insertBefore(link, base);
}


// const test = CSS.supports('selector(:where(*)');
// console.log ("where " + test);



// if (window.CSS) {
//   const smoothscroll = CSS.supports ("scroll-behavior","smooth");
//   console.log ("smoothscroll " + smoothscroll);
// } else {
//   console.log('no support');
// }

