// ==UserScript==
// @name         9anime Popup Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  blocks those annoying ass popups when you try to click on pause or whatever
// @author       github.com/nectarboy
// @match        https://9anime.ru/*
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

// alert('piss!');
window.open = function() {
    return window; // ig return itself
};
// That was simple as fuck ...