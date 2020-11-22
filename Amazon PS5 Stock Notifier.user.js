// ==UserScript==
// @name         Amazon PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Amazon
// @author       archfear
// @match        https://*.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG*
// @grant        GM_notification
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://smile.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG

var player = document.createElement('audio');
player.src = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3';
player.preload = 'auto';

function notifyMe() {
    document.title = "IN STOCK - " + document.title;
    GM_notification({
        title: 'PS5 In Stock On Amazon',
        text: 'PS5 In Stock On Amazon',
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    player.play();
}

var refreshDelay = 120; // seconds

if (document.body.innerHTML.includes('$499.99')) {
  notifyMe();
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
