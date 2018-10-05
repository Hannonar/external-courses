var f = function(num)
{
    var res = "Данные неверны";
    if(num<1000 && typeof num === "number")
    {
        res = true;
        for(var i = 2;i<num;i++)
        if (num % i ===0) 
        {
            res = false;
            break;
        }
    }
    return res;
}

var a;
var inp = 111;
if(f(inp)) a = inp + " - простое число";
else  a = inp + " - составное число";

console.log(a);