// ==UserScript==
// @name     Tard Niyai Reader Mode
// @author   TFive
// @include  https://www.tard-niyai.com/read/*
// @version  1
// @run-at document-idle
// ==/UserScript==

function getDivs(){
    return Array.from(document.getElementsByClassName('col-md-3'))
    .concat(Array.from(document.getElementsByClassName('hidden-sm-down text-center')))
    .concat(Array.from(document.getElementsByClassName('desktop navbar navbar-bottom navbar-fixed-bottom')))
    .concat(Array.from(document.getElementsByClassName('fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop')))
}

function getDiv(){
    return Array.from(document.getElementsByClassName('col-md-9'))
}

function a () {
    let premiumDivs = getDivs();
    let premiumDiv = getDiv();
    if (!premiumDivs.length){
        setTimeout(a, 2000);
    } else {
        premiumDivs.forEach(function(element) {
            element.remove();
        });
        premiumDiv.forEach(function(element) {
            element.className = 'col-md-20';
    }
}
a();
