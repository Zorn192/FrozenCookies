// ==UserScript==
// @name           Frozen Cookies Z
// @version        github-zorn192
// @description    Userscript to load Frozen Cookies written by Icehawk78, forked by Lordshinjo
// @author         Lordshinjo
// @homepage       https://github.com/Zorn192/FrozenCookies
// @include        http://orteil.dashnet.org/cookieclicker/
// @updateURL      http://zorn192.github.io/FrozenCookies/fc_userscript_loader.user.js
// @downloadURL    http://zorn192.github.io/FrozenCookies/fc_userscript_loader.user.js
// @run-at         document-start
// ==/UserScript==

// Master:    http://zorn192.github.io/FrozenCookies/fc_userscript_loader.user.js


function LoadFrozenCookies() {
    Game.LoadMod('https://rawgit.com/Chevron42/FrozenCookies/master/frozen_cookies.js');
}

window.addEventListener("load", LoadFrozenCookies, false);
