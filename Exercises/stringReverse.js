/**
 * reverse a string
 * @param str the item to be reversed
 * @returns {string} the reversed string
 */
function reverse(str) {
  if (!str || typeof str != 'string' || str.length < 2) return str;
  return str.split('').reverse().join('');
}