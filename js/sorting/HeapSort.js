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