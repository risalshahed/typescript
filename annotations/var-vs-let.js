function dd() {
  var a = 2;
  let b = 3;
  console.log(a, b);
  {
    var c = 2;  // can be declared OUTSIDE this block
    let d = 3;  // limited to block scope
  }
  console.log(c);
  // console.log(d); // returns error ( cz it's declared with let in another block )
}

// console.log(a);

dd();

/* console.log(a);
console.log(b); */