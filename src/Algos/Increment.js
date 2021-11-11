const numberStart = 123;
function increment (number) {
  let numberToString = String(numberStart);
  const newLastDigit = numberToString.length + number;
  const numberConcat = numberToString.replace(numberToString.length, newLastDigit);
  const numberArray = numberConcat.split("").map((num)=>{
    return Number(num);
  });
  console.log("after", numberArray)
};

console.log("before", numberStart);
increment(7);