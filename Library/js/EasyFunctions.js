/****
 *  EasyFunctions
 *  By Dauw_Jonas
 */

function Random(min, max) {
    if (min == undefined || max == undefined) {
        return Math.random();
    } else {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

function DualArray(Diamention1, Diamention2) {
    if (Diamention1 == undefined || Diamention2 == undefined) {
        Diamention1 = 1;
        Diamention2 = 1;
    }
    let dualArray = new Array(Diamention1);
    for (let i = 0; i < Diamention1; i++) {
        dualArray[i] = new Array(Diamention2);
        for (let k = 0; k < Diamention2; k++) {
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
//#region 

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