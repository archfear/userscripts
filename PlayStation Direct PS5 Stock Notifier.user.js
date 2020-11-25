// ==UserScript==
// @name         PlayStation Direct PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Plays a sound and desktop notification when the PS5 is in stock on Playstation Direct
// @author       archfear
// @match        https://direct.playstation.com/en-us/consoles/console/playstation5-console.3005816*
// @match        https://direct.playstation.com/en-us/consoles/console/playstation5-digital-edition-console.3005817*
// @match        https://direct.playstation.com/en-us/ps5
// @match        https://direct-queue.playstation.com*
// @updateURL    https://github.com/archfear/userscripts/raw/main/PlayStation%20Direct%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/PlayStation%20Direct%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://direct.playstation.com/en-us/ps5

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

console.log(document.body.innerHTML);
if (window.location.href.includes('https://direct-queue.playstation.com')) {
  notify('PlayStation Direct', 'You are in the queue');
} else if (document.body.innerHTML.includes('Session has expired due to inactivity.')) {
  notify('PlayStation Direct', 'Session has expired due to inactivity.', 'https://archfear-static.s3-us-west-2.amazonaws.com/door_bell.mp3');
} else if (window.location.href.includes('https://direct.playstation.com/en-us/ps5')) {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
} else if (!/Out of Stock/i.test(document.body.innerHTML)) {
  notify('PlayStation Direct');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
