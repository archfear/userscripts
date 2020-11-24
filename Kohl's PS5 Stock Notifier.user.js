// ==UserScript==
// @name         Kohl's PS5 Stock Notifier
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Plays a sound and desktop notification when the PS5 is in stock at Kohl's
// @author       archfear
// @match        https://www.kohls.com/product/prd-4819741/product.jsp*
// @match        https://www.kohls.com/catalog/playstation-video-gaming-consoles.jsp?CN=Brand:PlayStation+Product:Video%20Gaming%20Consoles&PPP=48&kls_sbp=32192532708608414760939013836824718856&pfm=browse%20refine
// @updateURL    https://github.com/archfear/userscripts/raw/main/Kohl's%20PS5%20Stock%20Notifier.user.js
// @downloadURL  https://github.com/archfear/userscripts/raw/main/Kohl's%20PS5%20Stock%20Notifier.user.js
// @grant        GM_notification
// @noframes
// ==/UserScript==

// LEAVE THE BROWSER ON THIS PAGE: https://www.kohls.com/catalog/playstation-video-gaming-consoles.jsp?CN=Brand:PlayStation+Product:Video%20Gaming%20Consoles&PPP=48&kls_sbp=32192532708608414760939013836824718856&pfm=browse%20refine

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

var refreshDelay = 300; // seconds

if (document.body.innerHTML.includes('PlayStation 5')) {
  notify("Kohl's");
} else {
  setTimeout(function(){ location.reload(); }, refreshDelay*1000);
}
