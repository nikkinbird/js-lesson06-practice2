var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "Please enter two numbers";
  }

  if (typeof num2 !== "number") {
    return "Please enter two numbers";
  }

  return num1 * num2;
};

console.log(multiply(6, 8));
console.log(multiply("hello", 10));
console.log(multiply("what", "hi"));
