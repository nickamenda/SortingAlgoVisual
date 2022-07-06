'use strict';

const BUTTON_COLOR = "#7FFF00"
const DISABLED_BUTTON_COLOR = "#A9A9A9"


function makeArray() {
    var numValue= document.getElementById("numValues").value;
    if (isNaN(numValue)) {
        window.alert("Input has to be a number!");
    }
    else if (numValue < 5 || numValue > 1000) {
    window.alert("Value has to be between 5 and 1000!");
    }
    else{
    window.alert("Nice");
    }
}

/**
 * this function enables all buttons and switches its color to green
 */
 function enable() {

    document.getElementById("makeArrayButton").disabled = false;
    document.getElementById("makeArrayButton").style.backgroundColor = BUTTON_COLOR;

    document.getElementById("quickSortButton").disabled = false;
    document.getElementById("quickSortButton").style.backgroundColor = BUTTON_COLOR;

    document.getElementById("mergeSortButton").disabled = false;
    document.getElementById("mergeSortButton").style.backgroundColor = BUTTON_COLOR;

    document.getElementById("insertionSortButton").disabled = false;
    document.getElementById("insertionSortButton").style.backgroundColor = BUTTON_COLOR;

    document.getElementById("bubbleSortButton").disabled = false;
    document.getElementById("bubbleSortButton").style.backgroundColor = BUTTON_COLOR;

}

/**
 * this function disables all buttons and switches its color to gray
 */
function disable() {

    document.getElementById("makeArrayButton").disabled = true;
    document.getElementById("makeArrayButton").style.backgroundColor = DISABLED_BUTTON_COLOR;

    document.getElementById("quickSortButton").disabled = true;
    document.getElementById("quickSortButton").style.backgroundColor = DISABLED_BUTTON_COLOR;

    document.getElementById("mergeSortButton").disabled = true;
    document.getElementById("mergeSortButton").style.backgroundColor = DISABLED_BUTTON_COLOR;

    document.getElementById("insertionSortButton").disabled = true;
    document.getElementById("insertionSortButton").style.backgroundColor = DISABLED_BUTTON_COLOR;

    document.getElementById("bubbleSortButton").disabled = true;
    document.getElementById("bubbleSortButton").style.backgroundColor = DISABLED_BUTTON_COLOR;

}