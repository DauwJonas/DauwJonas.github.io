(function () {
    'use strict';

    let picToEmbed = document.getElementsByClassName("PicToEmbed");
    for (let i = 0; i < picToEmbed.length; i++) {
        const iEl = picToEmbed[i];
        let nEl = document.createElement("img");
        nEl.classList.add("VideoImg");
        nEl.src = "https://i.ytimg.com/vi/" + iEl.getAttribute("data-YouTubeVideoID") + "/sddefault.jpg";
        iEl.appendChild(nEl);
        iEl.children[0].addEventListener("click", function (e) {
            console.log(e, "e", e.target);
            let iEl = e.target.parentElement;
            iEl.innerHTML = "";
            let nEl = document.createElement("iframe");
            nEl.setAttribute("class", "Video FlexItem");
            nEl.src = "https://www.youtube.com/embed/" + iEl.getAttribute("data-YouTubeVideoID") + "?autoplay=1";
            nEl.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
            nEl.setAttribute("allowfullscreen", "");
            iEl.appendChild(nEl);
        });
    }
})();