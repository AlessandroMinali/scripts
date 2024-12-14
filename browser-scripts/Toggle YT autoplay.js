// ==UserScript==
// @name        Toggle YT autoplay
// @description This is your new file, start writing code
// @match       *://music.youtube.com/*
// ==/UserScript==

const no_auto = setInterval(() => {
  let el = document.querySelector('#automix')
  if (el) {
    if (el.checked) el.click();
    clearInterval(no_auto);
  }
}, 500);