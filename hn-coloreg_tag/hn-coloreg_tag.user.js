// ==UserScript==
// @name        hn-coloreg_tag
// @namespace   hn-ranking@mael.auzias.net
// @description Color set of key work from HN
// @include     https://news.ycombinator.com/news
// @version     1
// @grant       none
// ==/UserScript==

// storylink
var prefix = "<span style=\"font-weight:bold;color:white;background-color: #a6a6a1;border-radius:3px;\">";
var keywords = ["github","facebook","Altman","RFC","security","ethereum","Ethereum","Programming"];
var suffix = "</span>";

var stories = document.getElementsByClassName('storylink');
// Walk through these elements to color the keywords
for (var i = 0; i < stories.length; i++) {
  for (var j = 0; j < keywords.length; j++) {
    var replaced = prefix + keywords[j] + suffix;
    stories[i].innerHTML = stories[i].innerHTML.replace(keywords[j],replaced);
  }
}