// ==UserScript==
// @name         Newegg PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Newegg
// @author       archfear
// @match        https://www.newegg.com/p/N82E16868110292*
// @run-at       document-end
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.newegg.com/p/N82E16868110292

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

if (!document.body.innerHTML.includes('CURRENTLY SOLD OUT')) {
    notify('Newegg');
} else {
    setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
