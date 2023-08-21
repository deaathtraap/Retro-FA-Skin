/* ==UserStyle==
@name           Retro FA Beta
@namespace      furaffinity.net/user/deaathtraap
@version        0.1.1
@description    A total FA style overhaul.
@author         Deaathtraap
==/UserStyle== */
@import url('https://fonts.googleapis.com/css2?family=Silkscreen:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
@-moz-document domain("furaffinity.net") {
    /* Styling the notification container */
    :root {
        --header-color: #E99C20;
        --header-highlight: #ffdda6;

        --header-text-color: white;
        --a-color: black;

        --main-text-color: #4d4d4d;
        --main-text-color-darkmode: #e6e6e6;

        --body-color: white;
        --body-color-darkmode: #2b2b2b;

        --body-layer: #e3e3e3;
        --body-layer-darkmode: #4d4d4d;

        --subheader-color: #2b2b2b;
        --subheader-color-darkmode: #202020;

        --inner-shadow-color: rgba(0, 0, 0, 0.35);
        --shadow-distance: -4px 4px;

        --font-title: 'Bungee', cursive;
        --font-main: 'Karla', sans-serif;

        --col-sub: #14a5ee;
        --col-com: #da4444;
        --col-fav: #ffcd21;
        --col-jrn: #A6DA44;
        --col-wat: #875bf2;
        --col-not: #70eae5;

        --section-rounding: 4px;
    }

    .notification-container {
        width: fit-content;
        /* Adjust the width as needed */
        min-width: 28px;

        height: 36px;
        /* Adjust the height as needed */
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
        /*background-color: #FF9900; /* Change the color as desired */
        color: white !important;
        /* Change the text color as desired */
        font-family: var(--font-title);
        text-decoration: none !important;
        /* Remove underline */
        box-shadow: inset 0px 0px 0px 0px var(--inner-shadow-color);
        transition-duration: .2s;
        text-shadow: var(--inner-shadow-color) 0px 2px 0px;
        margin-top: 5px;

        padding: 0 4px;
    }

    /* Optional hover effect */
    .notification-container:hover {
        transform: translateY(-3px);
        box-shadow: inset 0px -3px 0px 0px var(--inner-shadow-color);
        height: 39px;
        text-shadow: var(--inner-shadow-color) 0px 2px 0px !important;
    }

    #ddmenu .message-bar-desktop {
        height: 100%;
    }

    /* Color based on href attribute */
    .notification-container[href*="/msg/submissions"] {
        background-color: var(--col-sub);
    }
    .notification-container[href*="/msg/others/#watches"] {
        background-color: var(--col-wat);
    }
    .notification-container[href*="/msg/others/#comments"] {
        background-color: var(--col-com);
    }
    .notification-container[href*="/msg/others/#favorites"] {
        background-color: var(--col-fav);
    }
    .notification-container[href*="/msg/others/#journals"] {
        background-color: var(--col-jrn);
    }
    .notification-container[href*="/msg/pms"] {
        background-color: var(--col-not);
    }

    .notification-container[href*="/msg/submissions"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f03e";
        margin-left: 4px;
        font-weight: 900;
    }
    .notification-container[href*="/msg/others/#watches"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f118";
        margin-left: 4px;
        font-weight: 900;
    }
    .notification-container[href*="/msg/others/#comments"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f27a";
        margin-left: 4px;
        font-weight: 900;
    }
    .notification-container[href*="/msg/others/#favorites"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f005";
        margin-left: 4px;
        font-weight: 900;
    }
    .notification-container[href*="/msg/others/#journals"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f02d";
        margin-left: 4px;
        font-weight: 900;
    }
    .notification-container[href*="/msg/pms"]:after {
        font-family: "Font Awesome 5 Free";
        content: "\f249";
        margin-left: 4px;
        font-weight: 900;
    }
}

@-moz-document domain("furaffinity.net") {
    /* Styling the header */
    .top-heading {
        font-family: var(--font-title);
        text-shadow: var(--inner-shadow-color) 0px 2px 0px;
    }

    #ddmenu {
        background-color: var(--header-color);
        box-shadow: inset 0px -4px 0px 0px var(--inner-shadow-color);
        border: none;
    }

    #ddmenu .nav-bar-logo {}

    /* Remove any vertical spacing inside the <a> element */
    .lileft.hideonmobile a i {
        display: block;
        font-size: 36px;
        /* Adjust this size as needed */
        line-height: 1;
        /* Reset line-height */
        margin: 5px 0;

        transform: rotate(20deg);
    }

    #searchbox input[type=search] {
        height: 36px;
        margin-top: 6px;

        border-radius: var(--section-rounding);

        background-color: var(--inner-shadow-color);

        box-shadow: inset 0px 4px 0px 0px var(--inner-shadow-color);

        transition-duration: .2s;
    }
    #searchbox input[type=search]:focus {
        background-color: var(--inner-shadow-color);
    }

    #searchbox input[type=search]::placeholder {
        color: var(--header-text-color);

        transition-duration: .2s;
    }
    #searchbox input[type=search]:focus::placeholder {
        color: #ffffff00;
        transform: translateX(10px);
    }
}

@-moz-document domain("furaffinity.net") {
    /* Styling fonts */
    h2 {
        font-family: var(--font-title);
        color: var(--header-text-color);
        text-shadow: var(--inner-shadow-color) 0px 2px 0px !important;
    }

    h2 a {
        font-family: 'Karla', sans-serif;
        color: var(--main-text-color) !important;

        font-weight: bold;
    }
    h2 a:hover {
        color: var(--header-color) !important;
    }

    .section-body h2 {
        color: var(--main-text-color);
        text-shadow: none !important;

        font-family: var(--font-main);
        font-weight: bold;

        padding-top: 10px;
    }

    h3 a {
        color: var(--header-text-color) !important;
    }
    h3 a:hover {
        color: var(--main-text-color) !important;
    }
    h3 a.current {
        color: var(--header-color) !important;
        font-weight: bold !important;
    }

    h4 {
        color: var(--main-text-color);
    }

    a {
        color: var(--main-text-color) !important;
        font-weight: bold;
    }

    .user-submitted-links a {
        color: var(--a-color);
        font-weight: bold !important;
    }
    .user-submitted-links a:hover {
        color: var(--main-text-color) !important;
    }

    .font-small {
        color: var(--main-text-color);
    }

    .highlight {
        color: var(--main-text-color) !important;
        font-weight: bold;
    }

    .popup_date {
        color: var(--main-text-color) !important;
    }

    section.gallery p a {
        font-family: 'Karla', sans-serif;
        font-size: 12px;
    }

    html,
    body,
    button,
    .button,
    select,
    .textarea,
    .textbox,
    .uploadfield,
    .avataruploadfield {
        font-family: 'Karla', sans-serif !important;
        font-size: 16px!important;

        color: var(--main-text-color);
    }
}

@-moz-document domain("furaffinity.net") {
    /* Styling gallery */
    section.gallery figure.r-general u > a,
    section.gallery figure.r-mature u > a,
    section.gallery figure.r-adult u > a,
    #pageid-userpage .gallery_container .preview_img a:not(.ANY) {
        border: none;
        border-radius: var(--section-rounding);
        box-shadow: none;
    }

    #gallery-latest-submissions,
    section.gallery.s-150 figure.active,
    section.gallery.s-150 figure {
        overflow: visible;
    }

    section.gallery.s-150 figure b u a,
    section.gallery.s-150 figure.active b u a {
        box-shadow: var(--shadow-distance) 0px 0px var(--inner-shadow-color);

        transform: translateY(-7px) rotate(-1deg);

        transition-duration: .2s;
    }
    section.gallery.s-150 figure b u a {
        box-shadow: 0 0 0px 0px #ffffff00;

        transform: translateY(0px) rotate(0deg);

        transition-duration: .2s;
    }

    section.gallery.s-150 figure:not(.active) b u a:hover {
        box-shadow: 0 0 0px 0px #ffffff00;

        transform: translateY(-7px) rotate(-1deg);

        transition-duration: .2s;
    }
}

@-moz-document domain("furaffinity.net") {
    /* Styling body */
    html,
    body {
        background-image: url('https://www.nitrome.com/generated-content/images/icebreakerupdate/tile.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        background-attachment: fixed;

        box-shadow: none;
        overflow: visible !important;
    }

    .textarea:focus {
        background: var(--background-color) !important;
    }

    /* Sections */
    section:not(.gallery) {
        border: none;

        /*border: 2px solid black;*/
        border-radius: var(--section-rounding);

        box-shadow: var(--shadow-distance) 0px 0px var(--inner-shadow-color);
    }
    .section-header {
        border-radius: var(--section-rounding) var(--section-rounding) 0 0;
        background-color: var(--header-color) !important;
    }
    .section-body {
        border-radius: 0 0 var(--section-rounding) var(--section-rounding);
        background-color: var(--body-color) !important;
    }

    /* Message Center */
    #messages-form > section:last-child > .section-body {
        display: none !important;
    }
    #messages-form > section:last-child > .section-header {
        border-radius: var(--section-rounding);
        background-color: var(--subheader-color) !important;
    }

    #messages-comments-submission > .section-header {
        background-color: var(--col-com) !important;
    }
    #messages-shouts > .section-header {
        background-color: var(--col-com) !important;
    }
    #messages-watches > .section-header {
        background-color: var(--col-wat) !important;
    }
    #messages-favorites > .section-header {
        background-color: var(--col-fav) !important;
    }
    #messages-journals > .section-header {
        background-color: var(--col-jrn) !important;
    }

    #messages-comments-submission > .section-header > h2:before {
        font-family: "Font Awesome 5 Free";
        content: "\f27a";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    #messages-shouts > .section-header > h2:before {
        font-family: "Font Awesome 5 Free";
        content: "\f0a1";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    #messages-watches > .section-header > h2:before {
        font-family: "Font Awesome 5 Free";
        content: "\f118";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    #messages-favorites > .section-header > h2:before {
        font-family: "Font Awesome 5 Free";
        content: "\f005";
        margin-right: 4px;
        font-weight: 900;
    }
    #messages-journals > .section-header > h2:before {
        font-family: "Font Awesome 5 Free";
        content: "\f02d";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }

    #columnpage .submission-sidebar,
    #columnpage .sidebar {
        background-color: var(--body-color);
        margin: 10px;
        border-radius: var(--section-rounding);
        box-shadow: var(--shadow-distance) 0px 0px var(--inner-shadow-color);
    }
    .sidebar .sidebarAds {
        margin: 0;
    }
    #controlpanelnav > h3 {
        color: var(--header-color) !important;
    }

    /* Lists */
    #pageid-messagecenter-other div#messagecenter-other #messages-journals ul.message-stream li:hover,
    #pageid-messagecenter-other div#messagecenter-other ul.message-stream li:hover {
        background-color: #00000024 !important;
    }
    #pageid-messagecenter-other div#messagecenter-other ul.message-stream li.stream-notification {
        background-color: #ffc748aa !important;
    }

    #pageid-messagecenter-other div#messagecenter-other #messages-journals ul.message-stream li.checked,
    #pageid-messagecenter-other div#messagecenter-other ul.message-stream li.checked {
        background-color: #ffc748aa !important;
    }

    /* Userpage */
    #page-userpage .userpage-profile,
    #page-userpage .userpage-section-right,
    #page-userpage .userpage-section-left {
        border: none;
    }

    section.userpage-right-column:first-child,
    section.userpage-left-column:first-child {
        padding: 0;
    }
    section.userpage-right-column,
    section.userpage-left-column {
        padding: 0;
    }

    /*.userpage-layout-profile {
    width: calc(100% - 20px);
    margin-left: 10px !important;
}*/
    .userpage-layout-profile-container {
        padding: 0;
    }
    .userpage-profile {
        border-radius: var(--section-rounding) !important;
        padding-top: 10px;
    }

    #page-userpage section:not(.gallery,
    .userpage-layout-profile) {
        margin: 10px 0px;
        padding: 0;
    }

    h2.featured:before {
        font-family: "Font Awesome 5 Free";
        content: "\f091";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.gallery:before {
        font-family: "Font Awesome 5 Free";
        content: "\f03e";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.favorites:before {
        font-family: "Font Awesome 5 Free";
        content: "\f005";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.featuredjournal:before {
        font-family: "Font Awesome 5 Free";
        content: "\f02d";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.profile:before {
        font-family: "Font Awesome 5 Free";
        content: "\f007";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.watchers:before {
        font-family: "Font Awesome 5 Free";
        content: "\f118";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.watched:before {
        font-family: "Font Awesome 5 Free";
        content: "\f598";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }
    h2.stats:before {
        font-family: "Font Awesome 5 Free";
        content: "\f03a";
        margin-right: 6px;
        margin-left: 2px;
        font-weight: 900;
    }

    section.userpage-right-column.shout-section {
        box-shadow: none;
    }

    @media screen and (min-width: 1000px) {
        .userpage-layout-left-col-content {
            margin-right: 5px;
        }
        .userpage-layout-right-col-content {
            margin-left: 5px;
        }

        body {
            margin: 0;
            padding: 0px 80px;
        }

        #ddmenu {
            position: sticky;
        }
    }

    .section-submission,
    .submission-preview,
    .userpage-info-container,
    .user-profile-main {
        background-color: var(--body-color);
        padding-top: 10px;
    }

    userpage-nav-links {
        background-color: var(--subheader-color);
        padding-bottom: 5px;
    }
    userpage-nav-user-details {
        margin-top: 15px;

        display: flex;
        flex-direction: row;
        align-items: baseline;

        text-shadow: var(--inner-shadow-color) 0px 2px 0px !important;

        background: var(--inner-shadow-color);
    }
    userpage-nav-user-details .font-small {
        color: var(--header-text-color);
        margin-left: 5px;
    }

    userpage-nav-avatar img {
        box-shadow: none;
        border: none;
    }
}

@-moz-document domain("furaffinity.net") {
    /* Buttons */
    .align-options-header.section_controls > button,
    .align-options-header.global_controls > button {
        border: none;
        border-radius: var(--section-rounding);

        margin: 0px 0px 0px 4px !important;

        background-color: var(--body-color);

        color: var(--header-color) !important;
        font-weight: bold;

        box-shadow: 0px 0px 0px 0px var(--inner-shadow-color);

        transition-duration: .2s;
    }
    .align-options-header.section_controls > button:hover,
    .align-options-header.global_controls > button:hover {
        transform: translateY(-3px) rotate(-1deg);
        box-shadow: 0px 4px 0px 0px var(--inner-shadow-color);
    }
    .align-options-header.section_controls > button:active,
    .align-options-header.global_controls > button:active {
        transition-duration: 0s;
        transform: translateY(2px) rotate(2deg);
        box-shadow: 0px 0px 0px 0px var(--inner-shadow-color);
    }

    .align-options-header.section_controls,
    .align-options-header.global_controls {
        display: flex;
        justify-content: center;

        margin: -2px -7px 0 0 !important;
    }

    button.nuke {
        border: none;
    }
    button.nuke .svg-icon {
        fill: #ff6363 !important;
    }
}

@-moz-document domain("furaffinity.net") {
    /* Comments */
    .comment_container comment-container {
        border: none;

        margin-bottom: 6px;
    }

    comment-container .comment-content {
        background-color: var(--body-color);
        border-radius: var(--section-rounding);
        z-index: 1;
    }

    comment-container .comment-content > * {
        z-index: 1;
    }

    comment-container .avatar {
        padding-top: 0;
        padding-left: 0;
        padding-bottom: 0;
        padding-right: 6px;

        justify-content: left;

        min-width: 64px;

        z-index: 1;
    }
    comment-container .avatar:after {
        font-family: "Font Awesome 5 Free";
        content: "\f075";
        margin-left: 0px;
        font-weight: 900;
        font-size: 80px;

        transform: translate(-10px, 20px) rotate(58deg);
        z-index: 1;

        pointer-events: none;

        left: 0;

        color: var(--body-color);
    }

    .comment_useravatar {
        box-shadow: none !important;
        border-radius: var(--section-rounding) !important;
    }
    comment-container .avatar a img {
        max-width: 64px;
    }

    comment-container .comment-content comment-title {
        color: var(--main-text-color);
    }

    comment-container .comment-content comment-reply svg,
    comment-container .comment-content comment-anchor svg {
        fill: var(--main-text-color) !important;
    }


    #columnpage .submission-content {
        overflow: visible;
    }
}

@-moz-document domain("furaffinity.net") {
    /* Art Page */
    #submission_page #submissionImg {
        max-height: 93vh;
    }

    #pageid-submission #header {
        padding-top: 0;
    }

    .bbcode.bbcode_quote {
        background-color: var(--body-layer)
    }

    .submission-writing,
    .page-content-type-music .submission-area {
        background-color: var(--body-color) !important;
        border-radius: var(--section-rounding);
        padding: 10px !important;
    }

    /* Folder List */
    .user-folders > ul:not(.default-group) {
        padding-left: 10px;
        border-left: 3px solid var(--header-color);
    }

    .user-folders li {
        width: fit-content;

        transition-duration: .2s;

        padding-left: 0 !important;
    }

    .user-folders li:hover {
        transform: translateX(4px);
        transform-origin: center;
    }

    .user-folders li > a {
        transition-duration: .2s;
    }
    .user-folders li:hover > a {
        color: var(--header-color) !important;

        transition-duration: .2s;
    }

    #columnpage .submission-sidebar,
    #columnpage .sidebar {
        height: fit-content;
    }

    .sidebar .tallRectangleAd,
    #pageid-search .tallRectangleAd,
    #pageid-browse .tallRectangleAd {
        margin-top: 0;
    }
}