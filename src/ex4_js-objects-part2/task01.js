function isInPrototype(propName,obj)
{
    return !obj.hasOwnProperty(propName);  
}

var a = {a:123,b:"a;lsdfj;alsdjf",c:null};
var b = Object.create(a);
b.d = "EF";

console.log(isInPrototype("a",a));
console.log(isInPrototype("a",b));