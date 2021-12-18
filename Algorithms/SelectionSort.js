const numbers = [ 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0 ];

function SelectionSort(array) {
  for (let i = 0; array.length; i++) {
    let min = i;
    let tmp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }
    array[i] = array[min];
    array[min] = tmp;
  }
  return array;
}