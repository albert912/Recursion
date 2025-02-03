function merge(arr, start, mid, end) {
  const left = [];
  const right = [];

  const leftSize = mid - start + 1;
  const rightSize = end - mid;

  let mainArrayIndex = start;

  // Fill left array
  for (let i = 0; i < leftSize; i++) {
    left.push(arr[mainArrayIndex]);
    mainArrayIndex++;
  }
  // Fill right array.
  for (let i = 0; i < rightSize; i++) {
     right.push(arr[mainArrayIndex]);
    mainArrayIndex++;
  }

  let leftIndex = 0;
  let rightIndex = 0;
  mainArrayIndex= start;

  while (leftIndex < leftSize  && rightIndex < rightSize) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[mainArrayIndex] = left[leftIndex];
      leftIndex++;
      mainArrayIndex++;
    } else {
      arr[mainArrayIndex] = right[rightIndex];
      rightIndex++;
      mainArrayIndex++;
    }
}

  while (leftIndex < leftSize) {
    arr[mainArrayIndex] = left[leftIndex];
    leftIndex++;
    mainArrayIndex++;
  }

  while (rightIndex < rightSize) {
    arr[mainArrayIndex] = right[rightIndex];
    rightIndex++
    mainArrayIndex++;
  }
}

function mergeSort(arr, start, end) {
    if (start >= end) {
        return;
    }

    let mid = Math.floor((start+end)/2);
    //sort left side
    mergeSort(arr, start, mid);
    //sort right side
    mergeSort(arr, mid+1, end);
    //merge sorted arrays
    merge(arr, start, mid, end);
}


let arr = [105, 79, 100, 110];
mergeSort(arr, 0, 3);
console.log(arr);