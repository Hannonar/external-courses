var f = function(obj)
{
    var newObj = {};
    for(var prop in obj)
    {
        newObj[prop] = obj[prop];
    }
    return newObj;
}

var old = {a:1,b:"b",c:null}
var _new = f(old);

_new.d = "123"+321;

console.log(old);
console.log(_new);