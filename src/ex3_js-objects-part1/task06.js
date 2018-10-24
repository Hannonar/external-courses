function f(obj)
{
    var newObj = {};
    for(var prop in obj)
    {
        if(typeof obj[prop] === "object")
            newObj[prop] = f(obj[prop]);
        else
            newObj[prop] = obj[prop];
    }
    return newObj
}

var o1 = {a:1,b:2,c:{a1:3,b1:4,c1:{a2:5,b2:6},d1:7},d:8};
console.log(o1);
var o2 = f(o1);

o1.c = 123;

console.log(o1);
console.log(o2);