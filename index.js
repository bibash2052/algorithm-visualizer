let arr = [];
let divBar = [];
let divHeight = [];
let marginValue;
let arraySize = 100;
let animation_delay = 0;
let animation_delay_time = 10000 / (10 * 100);

const box = document.querySelector(".box");

const heapSortCall = () => {
  heapSort(arr);
};

const heapSort = (arr) => {
  let arrayLength = arr.length;
  for (let i = arrayLength / 2 - 1; i >= 0; i--) {
    heapify(arr, arrayLength, i);
  }

  // Heap sort
  for (let i = arrayLength - 1; i >= 0; i--) {
    updateDiv(divBar[0], arr[0], "#f80b6ebb");
    updateDiv(divBar[i], arr[i], "#f80b6ebb");
    const temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    updateDiv(divBar[0], arr[0], "#f75f5f");
    updateDiv(divBar[i], arr[i], "#f75f5f");
    // Heapify root element
    heapify(arr, i, 0);
  }

  for (let i = 0; i < arr.length; i++) {
    updateDiv(divBar[i], arr[i], "#00fde496");
  }
};

const heapify = (arr, arrayLength, i) => {
  let largest = i;
  let l = 2 * i + 1;//always represents the left node
  let r = 2 * i + 2;//always represents the right node

  if (l < arrayLength && arr[l] > arr[largest]) {
    largest = l;
    updateDiv(divBar[largest], arr[largest], "#f8cb4ff1");
  }
  if (r < arrayLength && arr[r] > arr[largest]) {
    largest = r;
    updateDiv(divBar[largest], arr[largest], "#e64747");
  }
  // Swap and continue heapifying if root is not largest
  if (largest != i) {
    updateDiv(divBar[largest], arr[largest], "#eb4242");
    updateDiv(divBar[i], arr[i], "#eb4242");
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    updateDiv(divBar[largest], arr[largest], "#26cf59f1");
    updateDiv(divBar[i], arr[i], "#26cf59f1");

    heapify(arr, arrayLength, largest);
  }
};

const mergeSortCall = () => {
  mergeSort(arr);
};
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const middleIndex = Math.floor(arr.length / 2);
  updateDiv(divBar[middleIndex], arr[middleIndex], "#f80b6ebb");
  let leftArray = arr.slice(0, middleIndex);
  let rightArray = arr.slice(middleIndex);
  return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
};

const mergeArray = (leftArray, rightArray) => {
  console.log(leftArray, rightArray);
  let sortedArray = [],
    i = 0,
    j = 0,
    k = i;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      sortedArray[k] = leftArray[i];
      i++;
      updateDiv(divBar[k], sortedArray[k], "#f0e5e5");
    } else {
      sortedArray[k] = rightArray[j];
      j++;
      updateDiv(divBar[k], sortedArray[k], "#247ba0");
    }
    k++;
  }

  while (i < leftArray.length) {
    sortedArray[k] = leftArray[i];
    i++;
    updateDiv(divBar[k], sortedArray[k], "#f0e5e5");
    k++;
  }

  while (j < rightArray.length) {
    sortedArray[k] = rightArray[j];
    j++;
    updateDiv(divBar[k], sortedArray[k], "#247ba0");
    k++;
  }
  for (let i = 0; i < sortedArray.length; i++) {
    updateDiv(divBar[i], sortedArray[i], "#00fde496");
  }
  return sortedArray;
};

const quickSortCall = () => {
  let low = 0;
  let high = arr.length - 1;
  quickSort(low, high);
};
const quickSort = (low, high) => {
  if (low < high) {
    let partitionIndex = partition(low, high);

    quickSort(low, partitionIndex - 1);
    quickSort(partitionIndex + 1, high);
  }
};
const partition = (low, high) => {
  let pivot = divHeight[high];
  let i = low - 1;
  updateDiv(divBar[high], divHeight[high], "#f80b6ebb");
  for (let j = low; j < high; j++) {
    updateDiv(divBar[j], divHeight[j], "#f0e5e5");
    if (divHeight[j] < pivot) {
      i++;
      updateDiv(divBar[i], divHeight[i], "#247ba0");
      updateDiv(divBar[j], divHeight[j], "#247ba0");
      let temp = divHeight[i];
      divHeight[i] = divHeight[j];
      divHeight[j] = temp;
      updateDiv(divBar[i], divHeight[i], "#00fde496");
      updateDiv(divBar[j], divHeight[j], "#00fde496");
    }
  }

  let temp = divHeight[i + 1];
  divHeight[i + 1] = divHeight[high];
  divHeight[high] = temp;

  updateDiv(divBar[i + 1], divHeight[i + 1], "#00fde496");
  updateDiv(divBar[high], divHeight[high], "#00fde496");

  return i + 1;
};

const selectionSort = () => {
  for (let i = 0; i < arraySize; i++) {
    updateDiv(divBar[i], divHeight[i], "#f80b6ebb");
    let min = i;
    for (let j = i + 1; j < arraySize; j++) {
      updateDiv(divBar[j], divHeight[j], "#f0e5e5");
      if (divHeight[j] < divHeight[min]) {
        if (min != i) {
          updateDiv(divBar[min], divHeight[min], "#247ba0");
        }
        min = j;
        updateDiv(divBar[min], divHeight[min], "#f80b6ebb");
      } else {
        updateDiv(divBar[j], divHeight[j], "#247ba0");
      }
    }
    if (min != i) {
      const temp = divHeight[i];
      divHeight[i] = divHeight[min];
      divHeight[min] = temp;
      updateDiv(divBar[min], divHeight[min], "#f80b6ebb");
      updateDiv(divBar[i], divHeight[i], "#f80b6ebb");
      updateDiv(divBar[min], divHeight[min], "#247ba0");
    }
    updateDiv(divBar[i], divHeight[i], "#3d8a66");
  }
};

const bubbleSort = () => {
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = 0; j < arraySize - i - 1; j++) {
      updateDiv(divBar[j], divHeight[j], "#f80b6ebb");
      if (divHeight[j] > divHeight[j + 1]) {
        updateDiv(divBar[j], divHeight[j], "#247ba0");
        updateDiv(divBar[j + 1], divHeight[j + 1], "#247ba0");
        let temp = divHeight[j];
        divHeight[j] = divHeight[j + 1];
        divHeight[j + 1] = temp;
        updateDiv(divBar[j], divHeight[j], "#f80b6ebb");
        updateDiv(divBar[j + 1], divHeight[j + 1], "#f80b6ebb");
      }
      updateDiv(divBar[j], divHeight[j], "#247ba0");
      updateDiv(divBar[j + 1], divHeight[j + 1], "#3d8a66");
    }
  }
  updateDiv(divBar[0], divHeight[0], "#3d8a66");
};

const insertionSort = () => {
  for (let i = 1; i < arraySize; i++) {
    updateDiv(divBar[i], divHeight[i], "#f80b6ebb");
    let indexValue = divHeight[i];
    let position = i;
    while (position > 0 && divHeight[position - 1] > indexValue) {
      updateDiv(divBar[position], divHeight[position - 1], "#3d8a66");
      divHeight[position] = divHeight[position - 1];
      position = position - 1;
      updateDiv(divBar[position], divHeight[position], "#e64646");
    }
    divHeight[position] = indexValue;
    updateDiv(divBar[position], divHeight[position], "#3d8a66");
  }
  updateDiv(divBar[0], divHeight[0], "#3d8a66");
};

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
