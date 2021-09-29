(function() {
    'use strict';

    //Get sub directory
    let subDir = window.location.pathname.substring(1);
    subDir = subDir.substring(0, subDir.indexOf("/"));
    subDir == "" ? subDir = "Dauw_Jonas" : "";

    //Get parent El
    const parentElNN = document.currentScript.parentElement.nodeName.toLowerCase();

    //Find with Html Part
    const partNames = ["head", "header", "footer"];
    let part = false;
    for (let i = 0; i < partNames.length; i++) {
        const partName = partNames[i];
        if (parentElNN == partName) {
            part = partNames[i];
            break;
        }
    }
    if (part == false) {
        console.error("Failed to find out what to insert.")
    } else {
        getHtml(part);
    }

    function getHtml(partName) {
        partName = CapitalizeFirstLetter(partName);
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "/" + subDir + "/htmlParts/" + partName + ".html", true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            if (this.status !== 200) return;
            document.getElementById(partName).innerHTML = this.responseText;
        };
        xhr.send();
    }
})();