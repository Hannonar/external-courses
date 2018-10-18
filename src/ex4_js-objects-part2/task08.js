var f = function firstCharsToUpper(str)
{
    var res = "";
    if(str[0]!=" ") res+=str[0].toLowerCase();
    for(var i=1;i<str.length;i++)
    {
        if(str[i-1] === " ") res+=str[i].toLowerCase();
        else res+= str[i];
    }
    return res;
}

console.log(f("   FdGs   Bbd dTgd TsdBfg aTd Bgd  B"));