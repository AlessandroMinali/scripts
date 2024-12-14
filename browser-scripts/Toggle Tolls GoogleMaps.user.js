// ==UserScript==
// @name        Toggle Tolls GoogleMaps
// @description This is your new file, start writing code
// @match       *://www.google.com/maps/*
// ==/UserScript==

const no_tolls = setInterval(() => {
  let el = document.querySelector('input[name=avoidTolls]');
  var items = document.body.getElementsByTagName("button");
  if (el) {
    if (!el.checked) el.click();
    clearInterval(no_tolls);
    for (var i = 0; i < items.length; ++i) {
      if (items[i].textContent.includes("Close")) {
        items[i].click();
      }
    }
  } else {
    for (var i = 0; i < items.length; ++i) {
      if (items[i].textContent.includes("Options")) {
        items[i].click();
      }
    }
  }
}, 50);