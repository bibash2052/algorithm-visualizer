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
