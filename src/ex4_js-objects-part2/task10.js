var f = function reverse(str)
{
    var res = "";
    for(var i = str.length - 1;i>-1;i--)
    {
        res += str[i];
    }
    return res;
}

console.log(f("afasdjkfhasdh"));