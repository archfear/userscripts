// ==UserScript==
// @name         B&H PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Adorama
// @author       archfear
// @match        https://www.bhphotovideo.com/c/product/1595083-REG/sony_3005718_playstation_5_gaming_console.html*
// @grant        GM_notification
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.bhphotovideo.com/c/product/1595083-REG/sony_3005718_playstation_5_gaming_console.html

var player = document.createElement('audio');
player.src = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3';
player.preload = 'auto';

function notifyMe() {
    document.title = "IN STOCK - " + document.title;
    GM_notification({
        title: 'PS5 In Stock On B&H',
        text: 'PS5 In Stock On B&H',
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    player.play();
}

var refreshDelay = 120; // seconds

if (!/Notify when available/i.test(document.body.innerHTML)) {
  notifyMe();
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
