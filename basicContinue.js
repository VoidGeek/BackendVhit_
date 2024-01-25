let a = [];
let b = new Array();

// Adding elements 1, 2, 3, 4 to array 'a'
a.push(1, 2, 3, 4);

// OR

// Adding elements 1, 2, 3, 4 to array 'b'
b.push(1, 2, 3, 4);
console.log(`a: ${a}, b: ${b}, a.length: ${a.length}, b.length: ${b.length}`);

let c = [2, 'Bala', true, { name: 'john' }, function () { console.log("hello"); }];

// Displaying the elements of array 'c'
console.log(c);

// Calling and displaying the content of the function in array 'c'
c[4]();  // This will execute the function and print "hello"

array4=[a,b];
console.log(`Combined Array: ${array4}`);

//Spread Operator
let array=[1,2,3,4];
let array2=[5,4,3];
let array3=[...array,...array2];
console.log(array3);

//rest operator ESC
let reutrnRecieved=restOperator(1,2,3,4)
    function restOperator(...args){
        console.log(args);
    }

setTimeout(()=>{
    console.log("I am better ");
},3000)