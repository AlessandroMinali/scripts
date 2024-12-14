// ==UserScript==
// @name        Random Select Criterion Movie
// @description Select which movie to watch next from My list
// @match       *://www.criterionchannel.com/my-list*
// ==/UserScript==

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

const __t = setInterval(function() {
try {
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector('a[data-load-more]:not(.is-hidden)').click()
} catch (_) {
  clearInterval(__t);
  let el = document.querySelectorAll('.browse-item-link');
  confirm(`Movies left: ${el.length}. 2/day: ${el.length/2}. 3/day: ${Math.round(el.length/3)}`);
  window.open(Array.from(el).sample().href)
}
}, 3000);