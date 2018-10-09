var f = function(propName,obj)
{
    if(!(propName in obj))
    {
        obj[propName] = 'new';
    }
    return obj;
}

var obj = {a:0,b:0,c:0};
console.log(f("a",obj));
console.log(f("d",obj));