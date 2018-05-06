// ==UserScript==
// @name Deottorisierer
// @namespace https://user.informatik.uni-goettingen.de/~felix.schelle1/
// @description Die AStA-Seite schoener machen
// @version 1.1
// @author Asterix
// @include https://asta.uni-goettingen.de/*
// @run-at document-end
// @icon https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto/icon.png
// ==/UserScript==

// -------------------------------------------------------------------------------
// "THE BEER-WARE LICENSE" (Revision 42):
// <felix.schelle1@stud.uni-goettingen.de> wrote this thing.
// As long as you retain this notice you can do whatever you want with this stuff.
// If we meet some day, and you think this stuff is worth it,
// you can buy me a beer in return - Felix Schelle
// -------------------------------------------------------------------------------

function getStyles(){
    let s = '';
    s += '#branding {background-image: url(https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto/viole.png);} ';
    s += 'li.menu-main-search .searchform input[type="search"] {border-color: #660066; background-color: #cc66ff;} ';
    s += 'a {color: #660099;} ';
    s += '.entry-title a:hover {color: #660099; }';
    s += '#site-description {color: #660099; }';
    s += 'a.continue-reading-link, #cryout_ajax_more_trigger {background-color: #660099; }';
    s += '#access {background-color: #990099;} ';
    s += '#access ul li.current_page_item > a, #access ul li.current-menu-item > a, #access ul li.current_page_ancestor > a, #access ul li.current-menu-ancestor > a {background-color: #cc0066;} ';
    s += '#access ul ul li a {color: #660099;} ';
    s += '#access ul ul li a:hover {background-color: #cc99cc;} ';
    s += '#access a:hover {background-color: #660099;} ';
    s += '#access > .menu > ul > li > a > span {border-color: #660066; box-shadow: 1px 0 0 #7718bd;} ';
    s += '.tribe-events-notices {color: #993399; background-color: #ffccff; border-color:#ff99ff;} ';
    s += '#cff .cff-item {border-bottom: 1px solid #660099 !important;} ';
    return s;
}

function deotto(){
    let head = document.head || document.getElementsByTagName('head')[0];
    if (head) {
        let text = "";
        text += getStyles();
        let s = document.createElement('style');
        s.appendChild(document.createTextNode(text));
        head.appendChild(s);
        for(let i = 0; i < head.getElementsByTagName('link').length; i++){
            let e = head.getElementsByTagName('link')[i];
            if(e.getAttribute('rel') == "icon" && e.getAttribute('sizes') == "32x32"){
                e.setAttribute('href', "https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto/icon.png");
                break;
            }
        }
    }
}

function build(){
    let div = document.getElementById('post-0');
    div.innerHTML = '<h1><img src="https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto/icon.png" alt="violet" /> Deottorisierer</h1><p>Informationen zum user script findest du auf <a href="https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto">https://user.informatik.uni-goettingen.de/~felix.schelle1/hopotenuse/deotto</a></p><p>Installierte Version: 1.1</p>';
    document.getElementsByTagName('title')[0].firstChild.nodeValue = "Deottorisierer";
}

deotto();

let url = window.location.href;
if(url == "https://asta.uni-goettingen.de/deotto") build();

