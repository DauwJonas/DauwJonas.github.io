/****
 *  EasyFunctions
 *  By Dauw_Jonas
 */

//#region General Functions
function Random(min, max) {
    if (min == undefined || max == undefined) {
        return Math.random();
    } else {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

function DualArray(Dimension1, Dimension2) {
    if (Dimension1 == undefined || Dimension2 == undefined) {
        Dimension1 = 1;
        Dimension2 = 1;
    }
    let dualArray = new Array(Dimension1);
    for (let i = 0; i < Dimension1; i++) {
        dualArray[i] = new Array(Dimension2);
        for (let k = 0; k < Dimension2; k++) {
            dualArray[i][k] = [];
        }
    }
    return dualArray;
}

//#region ToBool & BoolTo
function ToBool(value) {
    switch (typeof value) {
        case "string":
            value.toLowerCase();
            if (parseInt(value) != NaN) {
                return NumberToBool(value);
            } else {
                if (value == "true") {
                    return true;
                } else if (value == "false") {
                    return false;
                } else {
                    return false;
                    return "Error: Not number or string"
                }
            }
        case "number":
            return NumberToBool(value);
        case "boolean":
            return value;
        default:
            return false;
            return "Error: Type not implemented"
    }
}

function NumberToBool(value) {
    if (typeof value != "number") {
        if (parseInt(value) != NaN) {
            value = parseInt(value);
        }
    }
    if (value >= 1) {
        return true;
    } else if (value <= 0) {
        return false;
    } else {
        return false;
        return "Error: Not number"
    }
}

function BoolToString(value) {
    if (value) {
        return "1";
    } else {
        return "0";
    }
}
//#endregion 

function CapitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ReadFile(url) {
    let fileData;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        fileData = this.responseText;
    };
    xhr.onerror = function() {};
    xhr.send();
    return fileData;
}
//#endregion

//#region Events
(function EventLocationChange() {
    //Thanks to: https://dirask.com/posts/JavaScript-on-location-changed-event-on-url-changed-event-DKeyZj
    var pushState = history.pushState;
    var replaceState = history.replaceState;

    history.pushState = function() {
        pushState.apply(history, arguments);
        window.dispatchEvent(new Event('pushstate'));
        window.dispatchEvent(new Event('locationChange'));
    };

    history.replaceState = function() {
        replaceState.apply(history, arguments);
        window.dispatchEvent(new Event('replacestate'));
        window.dispatchEvent(new Event('locationChange'));
    };

    window.addEventListener('popstate', function() {
        window.dispatchEvent(new Event('locationChange'))
    });
})();
//#endregion