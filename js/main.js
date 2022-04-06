// 問題１
const array = [2, 4, 7, 5, 4, 3, 8];
const newArray = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});
console.log(newArray);

// 問題２
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));