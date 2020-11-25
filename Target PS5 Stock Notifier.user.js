// ==UserScript==
// @name         Target PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Plays a sound and desktop notification when the PS5 is in stock at Target
// @author       archfear
// @match        https://www.target.com/p/playstation-5-console/-/A-81114595*
// @match        https://www.target.com/p/playstation-5-digital-edition-console/-/A-81114596*
// @updateURL    https://github.com/archfear/userscripts/raw/main/Target%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/Target%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.target.com/p/playstation-5-console/-/A-81114595

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

if (/(Pick it up)|(Ship it)/i.test(document.body.innerHTML)) {
  notify('Target');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
