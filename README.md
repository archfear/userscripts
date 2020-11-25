## PlayStation 5 Stock Checkers

These userscripts will monitor various sites for Playstation 5 availability. They should run fine under Firefox, Chrome, or Edge. They haven't been tested all that well so I make no guarantees about how reliable they'll be.

For optimal performance, either use a differnt browser that has no extensions installed or create a new browser profile. Here's how to do it in [Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Multiple_profiles) and [Chrome](https://support.google.com/chrome/answer/2364824).

If you want a better chance of having the alert sounds play when the browser is in the background, you'll need to enable background autoplay. To do this:
* For Chrome, start the browser from the terminal with the follow command: `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --autoplay-policy=no-user-gesture-required`
* For Firefox, follow [these steps](https://support.mozilla.org/en-US/kb/block-autoplay#w_always-allow-or-block-media-autoplay)

In addition to this script, I'd recommend keeping an eye on these Twitter accounts:
* [@linuswilson](https://twitter.com/linuswilson)
* [@dealvibes](https://twitter.com/dealvibes/)
* [@wario64](https://twitter.com/wario64)

### Installation
1. Install the [Tampermonkey](https://www.tampermonkey.net/index.php), [Violentmonkey](https://violentmonkey.github.io/) or [Greasemonkey](https://www.greasespot.net/) browser extensions.
2. Click on the links below for each of the stores that you want to run the script for:
* [Adorama](https://github.com/archfear/userscripts/raw/main/Adorama%20PS5%20Stock%20Notifier.user.js)
* [Amazon](https://github.com/archfear/userscripts/raw/main/Amazon%20PS5%20Stock%20Notifier.user.js)
* [B&H](https://github.com/archfear/userscripts/raw/main/B%26H%20PS5%20Stock%20Notifier.user.js)
* [Best Buy](https://github.com/archfear/userscripts/raw/main/Best%20Buy%20PS5%20Stock%20Notifier.user.js)
* [GameStop](https://github.com/archfear/userscripts/raw/main/GameStop%20PS5%20Stock%20Notifier.user.js)
* [Kohl's](https://github.com/archfear/userscripts/raw/main/Kohl's%20PS5%20Stock%20Notifier.user.js)
* [Newegg](https://github.com/archfear/userscripts/raw/main/Newegg%20PS5%20Stock%20Notifier.user.js)
* [PlayStation Direct](https://github.com/archfear/userscripts/raw/main/PlayStation%20Direct%20PS5%20Stock%20Notifier.user.js)
* [Target](https://github.com/archfear/userscripts/raw/main/Target%20PS5%20Stock%20Notifier.user.js)
* [Walmart](https://github.com/archfear/userscripts/raw/main/Walmart%20PS5%20Stock%20Notifier.user.js)
3. Open a tab for each of the store's PS 5 pages by clicking the links below. Be sure to leave them open.
* [Adorama](https://www.adorama.com/l/Computers/Gaming/Console-Gaming/PlayStation-5/PlayStation-5-Consoles)
* [Amazon](https://smile.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG)
* [B&H](https://www.bhphotovideo.com/c/product/1595083-REG/sony_3005718_playstation_5_gaming_console.html)
* [Best Buy](https://www.bestbuy.com/site/sony-playstation-5-console/6426149.p?skuId=6426149)
* [GameStop](https://www.gamestop.com/video-games/playstation-5/consoles/products/playstation-5/11108140.html)
* [Kohl's](https://www.kohls.com/catalog/playstation-video-gaming-consoles.jsp?CN=Brand:PlayStation+Product:Video%20Gaming%20Consoles&PPP=48&kls_sbp=32192532708608414760939013836824718856&pfm=browse%20refine)
* [Newegg](https://www.newegg.com/PlayStation-PS5-Systems/BrandSubCat/ID-1541-3762)
* [PlayStation Direct](https://direct.playstation.com/en-us/ps5)
* [Target](https://www.target.com/p/playstation-5-console/-/A-81114595)
* [Walmart](https://www.walmart.com/ip/PlayStation-5-Console/363472942)
4. For each store, create an account, log in, and set a default payment method.

### Customization
* To change the time between page reloads, edit the `refreshDelay` variable in each script. Lower numbers can really slow down your machine. I lower the number for a specific site only if I'm expecting stock to appear soon.
* If you find the sound too annoying, you can change it by updating the mp3 URL in the scripts.
