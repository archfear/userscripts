// ==UserScript==
// @name         B&H PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on B&H
// @author       archfear
// @match        https://www.bhphotovideo.com/c/product/1595083-REG/sony_3005718_playstation_5_gaming_console.html*
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.bhphotovideo.com/c/product/1595083-REG/sony_3005718_playstation_5_gaming_console.html

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

if (!/Notify when available/i.test(document.body.innerHTML)) {
  notify('B&H');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
