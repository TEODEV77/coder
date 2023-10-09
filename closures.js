function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log(add5(3)); 
