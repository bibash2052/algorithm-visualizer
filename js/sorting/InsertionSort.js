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
