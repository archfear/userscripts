// ==UserScript==
// @name         Target PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Amazon
// @author       archfear
// @match        https://www.target.com/p/playstation-5-console/-/A-81114595*
// @grant        GM_notification
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.target.com/p/playstation-5-console/-/A-81114595

var player = document.createElement('audio');
player.src = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3';
player.preload = 'auto';

function notifyMe() {
    document.title = "IN STOCK - " + document.title;
    GM_notification({
        title: 'Target In Stock On Amazon',
        text: 'Target In Stock On Amazon',
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    player.play();
}

var refreshDelay = 120; // seconds

if (/(Pick it up)|(Ship it)/i.test(document.body.innerHTML)) {
  notifyMe();
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
