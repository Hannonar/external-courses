var f = function countOfSymbols(str)
{
    var res = {};
    for(var i = 0;i< str.length;i++)
    {
        if(str[i] in res) res[str[i]]++;
        else res[str[i]] = 1;
    }
    return res;
}

console.log(f("aaaaa b ccc dd"));