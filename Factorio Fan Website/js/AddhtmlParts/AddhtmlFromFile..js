/*
 * Add html from file.
 * Source: https://stackoverflow.com/questions/3535055/load-html-file-contents-to-div-without-the-use-of-iframes
 */

var xhr = new XMLHttpRequest();
xhr.open('GET', 'x.html', true);
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return; // or whatever error handling you want
    document.getElementById('y').innerHTML = this.responseText;
};
xhr.send();