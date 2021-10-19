(function() {
    'use strict';

    let allListItemsEl = document.getElementsByClassName("ListItem");

    for (let i = 0; i < allListItemsEl.length; i++) {
        const listItemEl = allListItemsEl[i];
        //let attributeNames = { h4: "data-h4", a: "data-a", img: "data-img", p: "data-p" };
        //const data = { h4: listItemEl.getAttribute(attributeNames.h4), a: listItemEl.getAttribute(attributeNames.a), img: listItemEl.getAttribute(attributeNames.img), p: listItemEl.getAttribute(attributeNames.p) };
        let attributeNames = ["data-h4", "data-a", "data-img", "data-p", "data-a_target"];
        let data = { h4: listItemEl.getAttribute(attributeNames[0]), a: listItemEl.getAttribute(attributeNames[1]), img: listItemEl.getAttribute(attributeNames[2]), p: listItemEl.getAttribute(attributeNames[3]), a_target: listItemEl.getAttribute(attributeNames[4]) };
        //Data correction
        if (data.a_target == null || data.a_target == undefined) {
            data.a_target = "";
        }
        //Remove date from ListItem
        for (let k = 0; k < attributeNames.length; k++) {
            const attributeName = attributeNames[k];
            listItemEl.removeAttribute(attributeName);
        }
        listItemEl.innerHTML = `<a href="${data.a}"target="${data.a_target}"class="img"><img src="${data.img}"></a><div><h4><a href="${data.a}"target="${data.a_target}">${data.h4}</a></h4><p>${data.p}</p><a href="${data.a}"target="${data.a_target}">${data.h4}</a></div>`;
    }
})();