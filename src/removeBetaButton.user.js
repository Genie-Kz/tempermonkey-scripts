// ==UserScript==
// @name         RemoveBetaButton
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tweetdeck.twitter.com/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    'use strict'
    let i = setInterval(()=> {
       let betaButton = document.querySelector(".js-gryphon-beta-btn");
       if(betaButton !== null){
           betaButton.parentNode.removeChild(betaButton);
           clearInterval(i);
       }
    });
})();