const numbers = [ 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0 ];

function swap(array, firstIndex, secondIndex) {
  let tmp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = tmp;
}

function parition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, right, partitionIndex);
      partitionIndex++;
    }
  }
}

function quickSort(array, left, right) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = parition(array, pivot, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}