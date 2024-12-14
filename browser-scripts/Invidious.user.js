// ==UserScript==
// @name         Invidious
// @description  Converts youtube to invidious instance
// @match        *://www.youtube.com/*
// @run-at       document-start
// ==/UserScript==

function getNewPagePlease(url){
  // return 'https://yewtu.be' + url.split('youtube.com').pop();
  return 'https://cal1.iv.ggtyler.dev' + url.split('youtube.com').pop();
}

window.location.replace(getNewPagePlease(window.location.href));