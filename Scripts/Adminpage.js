// ==UserScript==

// @name         Admin Page

// @namespace    https://viayoo.com/

// @version      0.1

// @run-at       document-start

// @match        *192.168.1.254*

// @grant        none

// ==/UserScript==

var meta=document.createElement('meta');

meta.name='viewport';

meta.setAttribute('content', 'width=device-width, initial-scale=2.0, maximum-scale=1.0, user-scalable=0');

document.getElementsByTagName('head')[0].appendChild(meta);

var x=document.querySelectorAll("input");

x[0].value="";

x[1].value="";

x[2].click();

