var f = function cut(str,num)
{
    if(str.length>num)
    {
        return str.slice(0,num-3) + "...";
    }
    else return str;
}

console.log(f("123456789",5));