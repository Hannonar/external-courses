var f = function isInPrototype(propName,obj)
{
    return !obj.hasOwnProperty(propName);  
}

var a = {a:123,b:"a;lsdfj;alsdjf",c:null};
var b = Object.create(a);
b.d = "EF";

console.log(f("a",a));
console.log(f("a",b));
