var f = function firstCharsToUpper(str)
{
    var res = "";
    var last=-1;
    var current = str.indexOf(" ");
    do
    {
        res += str.substring(last+1,current);
        res += str.substring(current,current+2).toUpperCase();
        last = current;
        current = str.indexOf(" ", last+1); 
    }
    while(last < current);
    res += str.substring(last,str.length - 1);
    return res;
}

console.log(f("   abd dsgd fsdsdfg asd fgd  "));