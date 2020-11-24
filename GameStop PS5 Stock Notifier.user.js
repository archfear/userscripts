// ==UserScript==
// @name         GameStop PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Plays a sound and desktop notification when the PS5 is in stock at GameStop
// @author       archfear
// @match        https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html*
// @updateURL    https://github.com/archfear/userscripts/raw/main/GameStop%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/GameStop%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html?condition=New

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

if (!document.body.innerHTML.includes('Not Available')) {
  notify('GameStop');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
