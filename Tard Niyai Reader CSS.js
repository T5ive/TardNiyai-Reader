// ==UserScript==
// @name     Tard Niyai Reader CSS
// @author   TFive
// @include  https://www.tard-niyai.com/read/*
// @version  1
// @run-at document-idle
// ==/UserScript==

function getDivs(){
    return Array.from(document.getElementsByClassName('col-md-9'))
}

function a () {
    let premiumDivs = getDivs();
    if (!premiumDivs.length){
        setTimeout(a, 2000);
    } else {
        premiumDivs.forEach(function(element) {
            element.className = 'col-md-20';
        });
    }
}
a();
