var f = function firstCharsToUpper(str)
{
    var res = "";
    if(str[0]!=" ") res+=str[0].toUpperCase();
    for(var i=1;i<str.length;i++)
    {
        if(str[i-1] === " ") res+=str[i].toUpperCase();
        else res+= str[i];
    }
    return res;
}

console.log(+f("   sdgs   abd dsgd fsdsdfg asd fgd  h"));
