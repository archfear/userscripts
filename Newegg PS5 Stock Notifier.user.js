// ==UserScript==
// @name         Newegg PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Plays a sound and desktop notification when the PS5 is in stock on Newegg
// @author       archfear
// @match        https://www.newegg.com/PlayStation-PS5-Systems/BrandSubCat/ID-1541-3762*
// @match        https://www.newegg.com/p/N82E16868110291*
// @match        https://www.newegg.com/p/N82E16868110292*
// @match        https://www.newegg.com/p/N82E16868110293*
// @updateURL    https://github.com/archfear/userscripts/raw/main/Newegg%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/Newegg%20PS5%20Stock%20Notifier.user.js
// @run-at       document-end
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.newegg.com/PlayStation-PS5-Systems/BrandSubCat/ID-1541-3762

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

if (!document.body.innerHTML.includes('CURRENTLY SOLD OUT') && !document.body.innerHTML.includes('OUT OF STOCK')) {
    notify('Newegg');
} else {
    setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
