(function() {
    'use strict';

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'htmlParts/Footer.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        document.getElementById('Footer').innerHTML = this.responseText;
    };
    xhr.send();
})();