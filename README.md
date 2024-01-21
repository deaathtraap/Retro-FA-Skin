# Retro FA Skin
This is a skin for Furaffinity that makes it look closer to 2000's-early 2010's websites like DeviantArt and Nitrome.

The skin requires two components: the **user style**, and the **user script**. Keep reading for installation instructions.

# 💽 Installation
1. Install the Stylus extension for user styles
   - You can find this by searching "Stylus extension [your browser]". It is available for Chrome, Firefox, Opera, and probably other browsers
2. Install the Greasemonkey/Tampermonkey extension for user scripts
   - If you are using **Firefox**, you want to get Greasemonkey
   - If you are using a **Chromium based browser** (Chrome, Opera, etc.), you want to get Tampermonkey
3. Install the user style AND user script
   - This can be done easily by simply clicking the following links. Stylus and Grease/Tampermonkey will automatically open up the file in an installation window.
   - User Style: https://github.com/deaathtraap/Retro-FA-Skin/raw/main/Retro_FA_Beta.user.css
   - User Script: https://github.com/deaathtraap/Retro-FA-Skin/raw/main/Retro%20FA%20Userscript.user.js

## Profile Customization
This theme supports some profile customization. This will only appear to people using the theme, and currently only applies to your profile page, not your gallery, etc.
### Instructions
   - Go to https://www.furaffinity.net/controls/profile/ and place the following code at the end of your User Profile:
      - `[color=#353b45]<bg>www.site.com/image.png</bg><color>#HEADERCOLOR</color>[/color]`
   - Change `#HEADERCOLOR` to the hex color you want the headers and accents to be. **DON'T** change the `[color=#353b45]` portion, as this exists only to hide the text for people who don't have the theme installed
   - Change `www.site.com/image.png` to the URL for the image you want as your background. This can be almost any image from the internet. **DON'T** include an `https://` at the start, or it will not work
   - You can place the `<darkmode>` tag betwen `</color>` and `[/color]` to make your profile page use the dark theme. _This feature will be rendered obsolete in the future when Dark Mode is made an option in the theme._
   - Press the Update Profile Information button to save your changes

## Additional Notes
- ⚠ This style is in beta and _does_ have issues. Please check the Issues tab above and submit any errors you don't see listed (include screenshots if possible).
- Stylus and Grease/Tampermonkey should automatically check for updates to these files whenever I change them. If not, you can simply redo step 3.

Have fun!
Created by Deaathtraap (https://www.furaffinity.net/user/deaathtraap)

# ✨ Bonus Features
These are extra fixes and features for FA that I created, which aren't directly related to the retheme (but work with it).
## PDF Viewer
Embeds PDF files directly into the page on written submissions.
### Installation
1. Follow the [Greasemonkey/Tampermonkey installation instructions](#-Installation) above
2. Click this link to install the script: https://github.com/deaathtraap/Retro-FA-Skin/raw/main/features/FA%20PDF%20Embed.user.js
