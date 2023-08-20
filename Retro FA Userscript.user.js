// ==UserScript==
// @name         Retro FA Userscript
// @namespace    furaffinity.net/user/deaathraap
// @version      1.0
// @description  For use in conjunction with the Retro FA theme.
// @match        https://www.furaffinity.net/*
// @grant        none
// @icon         https://www.furaffinity.net/themes/beta/img/banners/fa_logo.png
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove the last letter from divs with class "notification-container inline"
    function removeLastLetterFromNotifications() {
        const notificationDivs = document.querySelectorAll('a.notification-container.inline');
        notificationDivs.forEach(div => {
            const text = div.textContent.trim();
            const shortenedText = text.substring(0, text.length - 1);
            div.textContent = shortenedText;
        });
    }

    // Function to replace the src attribute of the specified img element
    function replaceImgSrc() {
        const imgElement = document.querySelector('img.nav-bar-logo');
        if (imgElement) {
            const iElement = document.createElement('i');
            iElement.classList.add('fa-solid', 'fa-paw', 'fa-nav-logo');
            imgElement.replaceWith(iElement);
            console.log('Replaced image with <i> element');
        }
    }

    // Function to set background image from string inside div with class "section-body userpage-profile"
    function setBackgroundFromDivContent() {
        const sectionDiv = document.querySelector('div.section-body.userpage-profile');
        if (sectionDiv) {
            const content = sectionDiv.textContent;
            const bgRegex = /<bg>(.*?)<\/bg>/;
            const bgMatch = content.match(bgRegex);
            if (bgMatch && bgMatch[1]) {
                const imageUrl = bgMatch[1].trim();
                const formattedImageUrl = `https://${imageUrl}`; // Add "https://" to the URL
                document.documentElement.style.setProperty('background-image', `url("${formattedImageUrl}")`, 'important');
                document.body.style.setProperty('background-image', `url("${formattedImageUrl}")`, 'important');
                console.log('Found background image URL:', formattedImageUrl);
            }

            const colorRegex = /<color>(.*?)<\/color>/;
            const colorMatch = content.match(colorRegex);
            if (colorMatch && colorMatch[1]) {
                const colorHex = colorMatch[1].trim();
                document.documentElement.style.setProperty('--header-color', colorHex);
                console.log('Found header color:', colorHex);
            }

            const darkModeRegex = /<darkmode>/;
            const darkModeMatch = content.match(darkModeRegex);
            if (darkModeMatch) {
                document.documentElement.style.setProperty('--main-text-color', 'var(--main-text-color-darkmode)');
                document.documentElement.style.setProperty('--body-color', 'var(--body-color-darkmode)');
                document.documentElement.style.setProperty('--subheader-color', 'var(--subheader-color-darkmode)');
                document.documentElement.style.setProperty('--body-layer', 'var(--body-layer-darkmode)');
                console.log('Dark mode activated');
            }
        }
    }

    // Function to add a script tag to the head of the HTML
    function addFontAwesomeScript() {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://kit.fontawesome.com/800e31c3a2.js';
        scriptTag.crossOrigin = 'anonymous';
        document.head.appendChild(scriptTag);
        console.log('Font Awesome script added');
    }

    function addClassToH2() {
        const h2Elements = document.querySelectorAll('h2'); // Select all <h2> elements
        h2Elements.forEach(h2 => {
            const text = h2.textContent.trim();
            if (text.includes('Featured Submission')) {
                h2.classList.add('featured'); // Add a specific class if the content matches
            } else if (text.includes('Gallery')) {
                h2.classList.add('gallery'); // Add another class if the content matches
            } else if (text.includes('Favorites')) {
                h2.classList.add('favorites'); // Add another class if the content matches
            } else if (text.includes('Recent Watchers')) {
                h2.classList.add('watchers'); // Add another class if the content matches
            } else if (text.includes('Recently Watched')) {
                h2.classList.add('watched'); // Add another class if the content matches
            } else if (text.includes('Stats')) {
                h2.classList.add('stats'); // Add another class if the content matches
            } else if (text.includes('Featured Journal')) {
                h2.classList.add('featuredjournal'); // Add another class if the content matches
            } else if (text.includes('User Profile')) {
                h2.classList.add('profile'); // Add another class if the content matches
            }
            // Add more conditions and class assignments as needed
        });
    }

    function addClassToShoutSection() {
        const shoutForms = document.querySelectorAll('.shout-post-form');

        shoutForms.forEach(form => {
            // Find the common ancestor two levels up
            const shoutSection = form.parentElement.parentElement;

            // Add the class "shout-section" to the found ancestor
            if (shoutSection) {
                shoutSection.classList.add('shout-section');
            }
        });
    }

    // Call the functions with your desired parameters
    removeLastLetterFromNotifications();
    const newImageUrl = 'www.nitrome.com/generated-content/images/nitromev2/tile.png'; // Replace with your image URL
    replaceImgSrc(newImageUrl);
    setBackgroundFromDivContent();
    addFontAwesomeScript();
    addClassToH2();
    addClassToShoutSection();
})();