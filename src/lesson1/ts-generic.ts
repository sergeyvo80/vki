
const target = { a: 1, b: 2, c: 3, d: 4 };

//function getProp<T, K extends keyof T>(obj: T, key: K) {
function getProp<T>(obj: T, key: keyof T) {
  return obj[key];
}

getProp(target, "a"); // Success
getProp(target, "z"); // Error


function identity <T>(value: T) : T {
  return value;
}

console.log(identity<number>(1)) // 1


function identity2 <T, U>(value: T, msg: U) : T {
  console.log(msg);
  return value;
}

console.log(identity2<number, string>(1, 'msg')) // 1

