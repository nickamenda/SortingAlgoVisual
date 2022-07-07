'use strict';

const BUTTON_COLOR = "#7FFF00"
const DISABLED_BUTTON_COLOR = "#A9A9A9"
const container = document.querySelector(".data-section");
var delay = 260;

/**
 * this function makes the array with the input
 */
function makeArray() {

    deleteArray();

    var numValue= document.getElementById("numValues").value;
    let array = []
    //checks if input is a number and in range
    if (isNaN(numValue)) {
        window.alert("Input has to be a number!");
    }
    else if (numValue < 5 || numValue > 100) {
    window.alert("Value has to be between 5 and 100!");
    }

    else{
        for(let i = 0; i < numValue; i++) {
            const value = Math.floor(Math.random() * 100) + 1;
            const bar = document.createElement("div");
            bar.classList.add("bar");
            //bar height
            bar.style.height = `${value * 3}px`;
            //translates at x-axis
       //     bar.style.transform = `translateX(${i * 30}px)`;

            const label = document.createElement("label");
            label.classList.add("bar_id");
            label.innerHTML = value;
            bar.appendChild(label);
            container.appendChild(bar);
            
        }
    }


}

/**
 * this function deletes the current array
 */
function deleteArray() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

/**
 * bubble sort
 */
async function bubbleSort() {

    const element = document.querySelectorAll(".bar");
    var notDone = true;  //varibale to check if sort is done

    while(notDone){

        notDone = false;

    for (let j = 0; j < element.length -1; ++j) { //this is for the color after the bar is correctly placed

    for(let i = 0; i < element.length-j-1; i++) {

            element[i].style.backgroundColor = 'red';
            element[i+1].style.backgroundColor = 'red';
            if(parseInt(element[i].style.height) > parseInt(element[i+1].style.height)){
                await stall(delay);
                notDone = true;

                //swap
                var temp = element[i].style.height;
                element[i].style.height = element[i+1].style.height;
                element[i+1].style.height = temp;
        }
        element[i].style.backgroundColor = '#00b7ff';
        element[i+1].style.backgroundColor = '#00b7ff';
    }
        element[element.length-j-1].style.backgroundColor = 'lime';
        }

}

element[0].style.backgroundColor = 'lime'; //based on our design, the first element doesnt get colored green
enable();
}


/** 
function swap(x, y) {
    let temp = x.style.height;
    x.style.height = y.style.height;
    y.style.height = temp;
}
*/

function stall(ms) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, ms); 
    }) 
}



let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});


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