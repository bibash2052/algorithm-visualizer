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
