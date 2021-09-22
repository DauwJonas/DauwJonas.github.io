(function() {
    'use strict';

    let allModsEl = document.getElementsByClassName("Mod");

    for (let i = 0; i < allModsEl.length; i++) {
        const modEl = allModsEl[i];
        //let attributeNames = { h4: "data-h4", a: "data-a", img: "data-img", p: "data-p" };
        //const data = { h4: modEl.getAttribute(attributeNames.h4), a: modEl.getAttribute(attributeNames.a), img: modEl.getAttribute(attributeNames.img), p: modEl.getAttribute(attributeNames.p) };
        let attributeNames = ["data-h4", "data-a", "data-img", "data-p"];
        const data = { h4: modEl.getAttribute(attributeNames[0]), a: modEl.getAttribute(attributeNames[1]), img: modEl.getAttribute(attributeNames[2]), p: modEl.getAttribute(attributeNames[3]) };
        //Remove date from Mod
        for (let k = 0; k < attributeNames.length; k++) {
            const attributeName = attributeNames[k];
            modEl.removeAttribute(attributeName);
        }
        ///New Els
        //Img
        let nElAImg = document.createElement("a");
        let nElImg = document.createElement("img");
        //Div
        let nElDiv = document.createElement("div");
        //H4
        let nElH4 = document.createElement("h4");
        let nElAH4 = document.createElement("a");
        //P
        let nElP = document.createElement("p");
        let nElA = document.createElement("a");
        ///Filling & attributes & placing
        //Link
        {
            const allA = [nElAImg, nElAH4, nElA];
            for (let k = 0; k < allA.length; k++) {
                const elA = allA[k];
                elA.href = data.a;
                elA.target = "_blank";
            }
        }
        //Name
        {
            const allName = [nElA, nElAH4];
            for (let k = 0; k < allName.length; k++) {
                const elA = allName[k];
                elA.innerHTML = data.h4;
            }
        }
        //Img
        nElAImg.classList.add("img");
        nElImg.src = data.img;
        nElAImg.appendChild(nElImg);
        //H4
        nElH4.appendChild(nElAH4);
        nElP.innerText = data.p;
        //Div
        {
            const allFirstChildren = [nElH4, nElP, nElA];
            for (let k = 0; k < allFirstChildren.length; k++) {
                const el = allFirstChildren[k];
                nElDiv.appendChild(el);
            }
        }
        //Add to Mod
        {
            const allFirstChildren = [nElAImg, nElDiv];
            for (let k = 0; k < allFirstChildren.length; k++) {
                const el = allFirstChildren[k];
                modEl.appendChild(el);
            }
        }
    }
})();