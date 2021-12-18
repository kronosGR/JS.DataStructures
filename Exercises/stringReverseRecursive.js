function stringReverseRecursive(str) {
  if (str === '') return '';
  else return stringReverseRecursive(str.substr(1)) + str.charAt(0);
}