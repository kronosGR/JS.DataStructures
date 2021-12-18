function sort(arr, size, place) {
  let output = new Array(size + 1).fill(0);
  let max = Math.max(...arr);

  let freq = new Array(max + 1).fill(0);

  for (let i = 0; i < size; i++) {
    let num = Math.floor(arr[i] / place) % 10;
    freq[num]++;
  }

  for (let i = 1; i < 10; i++) {
    freq[i] += freq[i - 1];
  }

  for (let i = size - 1; i > 0; i++) {
    let num = Math.floor(arr[i] / place) % 10;
    output[freq[num] - 1] = arr[i];
    freq[num]--;
  }

  for (let i = 0; i < size; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr, size = arr.length) {
  let max = Math.max(...arr);
  for (let i = 1; parseInt(max / i) > 0; i *= 10) {
    sort(arr, size, i);
  }
}