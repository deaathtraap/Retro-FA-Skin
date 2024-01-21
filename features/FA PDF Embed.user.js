// ==UserScript==
// @name         FA PDF Embed
// @namespace    http://furaffinity.net/user/deaathraap
// @version      1.0
// @description  Embeds a PDF viewer into Furaffinity story submission pages.
// @author       Deaathtraap
// @match        https://www.furaffinity.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=furaffinity.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function replaceDivWithEmbeddedPDF(divSelector) {
        var targetDiv = document.querySelector(divSelector);

        if (targetDiv) {
            var allLinks = document.querySelectorAll('a');
            var pdfUrl = null;

            for (var i = 0; i < allLinks.length; i++) {
                if (allLinks[i].textContent.includes('Download') && allLinks[i].href.endsWith('.pdf')) {
                    pdfUrl = allLinks[i].href;
                    break;
                }
            }

            if (pdfUrl) {
                var iframe = document.createElement('iframe');
                iframe.src = "https://drive.google.com/viewerng/viewer?embedded=true&url=" + pdfUrl;
                iframe.style.width = '100%';
                iframe.style.height = '94.9vh'; // You can adjust the height as needed
                // Add sandbox attribute to the iframe
                iframe.sandbox = 'allow-same-origin allow-scripts allow-forms';

                targetDiv.parentNode.replaceChild(iframe, targetDiv);
            }
        }
    }

    replaceDivWithEmbeddedPDF('.aligncenter.submission-area.submission-writing');
})();
