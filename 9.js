function multiply(a, b) {
    return a * b;
  }
  
  function multiplyNumbers(a, b) {
    return multiply.apply(null, [a, b]);
  }
  
  console.log(multiplyNumbers(5, 3));
  