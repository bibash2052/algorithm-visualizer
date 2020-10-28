let arr = [];
let divBar = [];
let divHeight = [];
let marginValue;
let arraySize = 100;
let animation_delay = 0;
let animation_delay_time = 1000 / (10 * 100);

const box = document.querySelector(".box");

const updateDiv = (array, divHeight, divColor) => {
  window.setTimeout(function () {
    array.innerHTML = updateSpanValue(divHeight);
    array.style =
      " margin:0% " +
      marginValue +
      "%; width:" +
      (100 / arraySize - 2 * marginValue) +
      "%; height:" +
      divHeight * 0.09 +
      "%; background-color:" +
      divColor +
      ";";
  }, (animation_delay += animation_delay_time));
};

const genearateRandomArray = (min, max, arraySize) => {
  arr = [...Array(arraySize)].map((e) => ~~(Math.random() * (max - min) + min));
  putValueinBar(arr);
};

const putValueinBar = (arr) => {
  for (let i = 0; i < arraySize; i++) {
    divHeight[i] = arr[i];
    divBar[i] = document.createElement("div");
    divBar[i].classList.add("tooltip");
    divBar[i].innerHTML = updateSpanValue(arr[i]);
    box.appendChild(divBar[i]);
    marginValue = 0.1;
    divBar[i].style =
      " margin:0% " +
      marginValue +
      "%; background-color:#9effcebb; width:" +
      (100 / arraySize - 2 * marginValue) +
      "%; height:" +
      divHeight[i] * 0.5 +
      "px;";
  }
};

const updateSpanValue = (arrValue) => {
  return '<span class="tooltiptext">' + arrValue + "</span>";
};

window.onload = genearateRandomArray(50, 1000, arraySize);
