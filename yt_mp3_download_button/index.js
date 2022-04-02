// ==UserScript==
// @name         YT MP3 Download Button
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  injects a download button under any video!
// @author       github.com/nectarboy
// @match        https://www.youtube.com/watch?v=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

window.onload = function() {
    'use strict';

    function checkIfInfoboxLoaded() {
        var infoDiv = document.getElementById('info-text');

        // failure
        if (infoDiv === null) {
            setTimeout(checkIfInfoboxLoaded, 1000);
        }
        // success
        else {
            createDownloadButton(infoDiv);
        }
    }

    function createDownloadButton(infoDiv) {
        var wrapperDiv = document.createElement('div');
        var downloadButton = document.createElement('button');

        // CSS
        downloadButton.innerHTML = 'Download MP3';
        downloadButton.style.wrapperDiv = '150px';
        downloadButton.style.fontSize = '14px';
        downloadButton.style.backgroundColor = 'green';
        downloadButton.style.color = 'white';
        downloadButton.style.border = '1px solid black';
        downloadButton.style.borderRadius = '2px';

        // functionality
        downloadButton.onclick = function() {
            window.open(
                'https://320ytmp3.com/enmLr2/download?type=ytmp3&url=' + window.location.href,
                '_blank'
            );
        };

        //wrapperDiv.appendChild(downloadButton);
        infoDiv.appendChild(downloadButton);
    }

    checkIfInfoboxLoaded();
};