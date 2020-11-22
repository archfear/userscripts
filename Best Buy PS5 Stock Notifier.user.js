// ==UserScript==
// @name         Best Buy PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Plays a sound and desktop notification when the PS5 is in stock on Adorama
// @author       archfear
// @match        https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?*skuId=6426149*
// @grant        GM_notification
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149

var player = document.createElement('audio');
player.src = 'https://archfear-static.s3-us-west-2.amazonaws.com/railroad_crossing_bell.mp3';
player.preload = 'auto';

function notifyMe() {
    document.title = "IN STOCK - " + document.title;
    GM_notification({
        title: 'PS5 In Stock At Best Buy',
        text: 'PS5 In Stock At Best Buy',
        silent: false,
        onclick: function() {
            window.focus();
        },
        timeout: 0
    });
    player.play();
}

var refreshDelay = 30; // seconds

if (!/Sold Out/i.test(document.body.innerHTML)) {
  notifyMe();
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
