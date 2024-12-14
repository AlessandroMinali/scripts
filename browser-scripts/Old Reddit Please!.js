// ==UserScript==
// @name         Old Reddit Please!
// @version      1.3
// @description  Converts reddit.com links to old.reddit.com links
// @author       Kain (ksir.pw)
// @match        *://*.reddit.com/*
// @run-at       document-start
// ==/UserScript==

function getNewPagePlease(url){
  return 'https://old.reddit.com' + url.split('reddit.com').pop();
}

if (window.location.host.split('.')[0] != 'old') {
  window.location.replace(getNewPagePlease(window.location.href));
}
