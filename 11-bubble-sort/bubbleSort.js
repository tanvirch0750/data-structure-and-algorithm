function bubbleSort(arr) {
  let nowSwaps;
  for (let i = arr.length; i > 0; i--) {
    nowSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        nowSwaps = false;
      }
    }

    if (nowSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([45, 10, 30, 2, 9, 75, 4]));
