// ==UserScript==
// @name         Quick Revives
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Skips confirmation prompt for reviving
// @author       Pyrit[2111649]
// @match        https://www.torn.com/profiles.php*
// @grant        none
// ==/UserScript==

XMLHttpRequest.prototype.origOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    if(/action=revive/.test(url)) {
        const ID = location.href.match(/[0-9]+/)[0];
        url = `/revive.php?action=revive&step=revive&ID=${ID}&rfcv=undefined`;
    }
    this.origOpen(method, url);
}