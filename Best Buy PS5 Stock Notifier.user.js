// ==UserScript==
// @name         Best Buy PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Plays a sound and desktop notification when the PS5 is in stock at Best Buy
// @author       archfear
// @match        https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?*skuId=6426149*
// @match        https://www.bestbuy.com/site/sony-playstation-5-digital-edition-console/6430161.p?*skuId=6430161*
// @updateURL    https://github.com/archfear/userscripts/raw/main/Best%20Buy%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/Best%20Buy%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149

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

if (!/Sold Out/i.test(document.body.innerHTML)) {
  notify('Best Buy');
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
