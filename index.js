let arr;
let divBar = [];
let divHeight = [];
let marginValue;
let arraySize = 100;
let startTime = 0;
let endTime = 0;

let animation_delay = 0;
let animation_delay_time = 1000 / (Math.floor(arraySize/10) * 100);

let time = document.querySelector(".time-taken");
const box = document.querySelector(".box");


const selectionSort = () => {
    for (let i = 0; i < arraySize; i++) {
        updateDiv(divBar[i], divHeight[i], "#2ec4b6");
        let min = i;
        for (let j = i + 1; j < arraySize; j++) {
            updateDiv(divBar[j], divHeight[j], "#ff9f1c");
            if (divHeight[j] < divHeight[min]) {
                if (min != i) {
                    updateDiv(divBar[min], divHeight[min], "#247ba0");
                }
                min = j;
                updateDiv(divBar[min], divHeight[min], "#2ec4b6");
            } else {
                updateDiv(divBar[j], divHeight[j], "#247ba0");
            }
        }
        if (min != i) {
            const temp = divHeight[i];
            divHeight[i] = divHeight[min];
            divHeight[min] = temp;
            updateDiv(divBar[min], divHeight[min], "#2ec4b6");
            updateDiv(divBar[i], divHeight[i], "#2ec4b6");
            updateDiv(divBar[min], divHeight[min], "#247ba0");
        }
        updateDiv(divBar[i], divHeight[i], "#3d8a66");
    }
    // updateDiv(divBar[i], divHeight[i], "#3d8a66");
}

const bubbleSort = () => {
    for (let i = 0; i < arraySize - 1; i++) {
        for (let j = 0; j < arraySize - i - 1; j++) {
            updateDiv(divBar[j], divHeight[j], "#2ec4b6")
            if (divHeight[j] > divHeight[j + 1]) {
                updateDiv(divBar[j], divHeight[j], "#247ba0");
                updateDiv(divBar[j + 1], divHeight[j + 1], "#247ba0")
                let temp = divHeight[j];
                divHeight[j] = divHeight[j + 1];
                divHeight[j + 1] = temp;
                updateDiv(divBar[j], divHeight[j], "#2ec4b6");
                updateDiv(divBar[j + 1], divHeight[j + 1], "#2ec4b6");
            }
            updateDiv(divBar[j], divHeight[j], "#247ba0")
            updateDiv(divBar[j+1], divHeight[j+1], "#3d8a66");

        }
    }
    updateDiv(divBar[0], divHeight[0], "#3d8a66");
}

const insertionSort = () => {
    for(let i = 1; i < arraySize; i++) {
        updateDiv(divBar[i], divHeight[i], "#2ec4b6");
            let indexValue = divHeight[i];
            let position = i;
            while(position > 0 && divHeight[position-1] > indexValue) {
                updateDiv(divBar[position], divHeight[position-1], "#3d8a66");
                divHeight[position] = divHeight[position-1];
                position = position - 1;
                updateDiv(divBar[position],divHeight[position], "#2c2d59")
            }
            divHeight[position] = indexValue;
            updateDiv(divBar[position], divHeight[position], "#3d8a66");
    }
    updateDiv(divBar[0], divHeight[0], "#3d8a66");
}

const updateDiv = (array, divHeight, divColor) => {
    window.setTimeout(function () {
        array.innerHTML = updateSpanValue(divHeight);
        array.style = " margin:0% " + marginValue + "%; width:" + (100 / arraySize - (2 * marginValue)) + "%; height:" + divHeight * 0.09 + "%; background-color:" + divColor + ";";
    }, animation_delay += animation_delay_time);
}

const genearateRandomArray = (min, max, arraySize) => {
    arr = [...Array(arraySize)].map(e => ~~(Math.random() * (max - min) + min));
    putValueinBar(arr);    
}

const putValueinBar = (arr) => {
    for (let i = 0; i < arraySize; i++) {
        divHeight[i] = arr[i];
        divBar[i] = document.createElement("div");
        divBar[i].classList.add("tooltip");
        divBar[i].innerHTML = updateSpanValue(arr[i]);
        box.appendChild(divBar[i]);
        marginValue = 0.1;
        divBar[i].style = " margin:0% " + marginValue + "%; background-color:rgba(50, 50, 167, 0.733); width:" + (100 / arraySize - (2 * marginValue)) + "%; height:" + (divHeight[i] * 0.5) + "px;"
    }
}

const updateSpanValue = (arrValue) => {
    return '<span class="tooltiptext">' + arrValue + '</span>'
}

window.onload = genearateRandomArray(50, 1000, arraySize);
