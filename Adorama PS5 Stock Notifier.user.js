// ==UserScript==
// @name         Adorama PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Adorama
// @author       archfear
// @match        https://www.adorama.com/so3005718.html*
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.adorama.com/so3005718.html

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

if (/Please verify you are a human/i.test(document.body.innerHTML)) {
    notify('Adorama', "Verify that you're human", 'https://archfear-static.s3-us-west-2.amazonaws.com/door_bell.mp3');
} else if (/Temporarily not available/i.test(document.body.innerHTML)) {
    setTimeout(function(){ location.reload(); }, refreshDelay*1000);
} else {
    notify('Adorama');
}
