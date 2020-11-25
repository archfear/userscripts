// ==UserScript==
// @name         Adorama PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Plays a sound and desktop notification when the PS5 is in stock on Adorama
// @author       archfear
// @match        https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles*
// @match        https://www.adorama.com/so3005718.html*
// @match        https://www.adorama.com/so3005718a.html*
// @match        https://www.adorama.com/so3005719.html*
// @updateURL    https://github.com/archfear/userscripts/raw/main/Adorama%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/Adorama%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles

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
} else if (document.body.includes('Error Occured, try again soon.')) {
    setTimeout(function(){ location.reload(); }, 30*1000);
} else if (/Add to Cart/i.test(document.body.innerHTML)) {
    notify('Adorama');
} else {
    setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
