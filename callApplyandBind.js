// Using call
var obj = {num : 2};
var obj2 = {num : 5};

var addToThis = function(a, b, c){
    return this.num + a + b + c;
};

// console.log(addToThis.call(obj, 1, 2, 3));
// functionname.call(obj, functionarguements)

// Using apply
var arr = [1,2,3]
// console.log(addToThis.apply(obj, arr));
// console.log(addToThis.apply(obj2, arr));
var bound = addToThis.bind(obj);

// console.log(bound(1,2,3));

var Student = {age : 18};

var addAge = function(x){
return this.age + x;
};
// console.log(addAge.call(Student, 2))
console.log(addAge.bind(Student, 2))
