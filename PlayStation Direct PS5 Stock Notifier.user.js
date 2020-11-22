// ==UserScript==
// @name         PlayStation Direct PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Playstation Direct
// @author       archfear
// @match        https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816*
// @grant        GM_notification
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816

var player = document.createElement('audio');
player.src = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3';
player.preload = 'auto';

function notifyMe() {
    document.title = "IN STOCK - " + document.title;
    GM_notification({
        title: 'PS5 In Stock On PlayStation Direct',
        text: 'PS5 In Stock On PlayStation Direct',
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    player.play();
}

var refreshDelay = 120; // seconds

if (!/Out of Stock/i.test(document.body.innerHTML)) {
  notifyMe();
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
