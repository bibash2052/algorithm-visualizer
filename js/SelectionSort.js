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
