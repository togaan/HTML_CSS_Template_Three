let Other_Links = document.getElementById("Other_Links");
let show_minue = document.getElementById("show_minue");
let hide_minue = document.getElementById("hide_minue");
let link_icon = document.getElementById("link_icon");
let links = document.getElementById("links");
let hide_links = document.getElementById("hide_links");
Other_Links.onclick = function () {
    show_minue.setAttribute('style', 'display:flex !important');
    
}
hide_minue.onclick = function () {
    show_minue.setAttribute('style', 'display:none !important');
   
}
link_icon.onclick = function () {
    links.setAttribute('style', 'display:flex !important');
   
}
hide_links.onclick = function () {
    links.setAttribute('style', 'display:none !important');
   
}



