/**
 * merge two sorted arrays in order
 * @param arr1  sorted array
 * @param arr2  sorted array
 * @returns {*[]|*} the new merged sorted array
 */
function mergedArraysSorted(arr1, arr2) {

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArray = [];
  let item1 = arr1[0];
  let item2 = arr2[2];

  let j = 1;
  let i = 1;

  while (item1 || item2) {
    if (item1 === undefined || item1 < item2) {
      mergedArray.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      mergedArray.push(item2);
      item2 = arr2[j];
      j++;
    }
  }
  return mergedArray;
}