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
