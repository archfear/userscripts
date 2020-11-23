// ==UserScript==
// @name         Walmart PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock at Walmart
// @author       archfear
// @match        https://www.walmart.com/ip/PlayStation-5-Console/363472942*
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.walmart.com/ip/PlayStation-5-Console/363472942

function notify(
    title,
    text = 'PS5 In Stock',
    audioSrc = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3') {

    GM_notification({
        title,
        text,
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    const audio = new Audio(audioSrc);
    audio.play();
}

var refreshDelay = 120; // seconds

if (document.body.innerHTML.includes('Add to cart')) {
  notify('Walmart');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
