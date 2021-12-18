//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const firstRecurringCharacter = (array) => {
  let map = {};
  for (let i = 0; i < length; i++) {
    if (map[array[i]] !== undefined) return array[i];
    else map[array[i]] = i;
  }
  return undefined;
};