// ==UserScript==
// @name        Leaving Soon Criterion Channel
// @description Open up movies that are watch-listed
// @match       *://www.criterionchannel.com/leaving*
// ==/UserScript==

if (window.location.href.split("/").length == 4) {
const __t = setInterval(function() {
try {
  window.scrollTo(0, document.body.scrollHeight);
  document.querySelector('a[data-load-more]:not(.is-hidden)').click()
} catch (_) {
  clearInterval(__t);
  if (document.querySelectorAll('button[title*=Remove]').length) {
    alert(document.querySelectorAll('button[title*=Remove]').length + ' movies found!');
    document.querySelectorAll('button[title*=Remove]').forEach((el) => {
      window.open(el.closest('a').href, '_blank');
    })
  }
}
}, 3000);
}