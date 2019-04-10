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
function getContent(){
   return Array.from(Array.from(document.getElementsByClassName('novel-content-text')))
}

function a () {
    let myDivs = getDivs();
    let myDivs2 = getContent();
    if (!myDivs.length){
        setTimeout(a, 2000);
    } else {
        myDivs.forEach(function(element) {
            element.className = 'col-md-20';
        });
        myDivs2.forEach(function(element) {
             element.style.backgroundImage="url('nothing')"
        });
    }
}
a();
