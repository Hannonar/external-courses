var f = function insertAfterWord(strInput,strDest,num)
{
    var i =0;
    var current=0;
    do
    {
        i = strDest.indexOf(" ", i+1);
        current++;
    }
    while(current!=num+1 && i!= -1);
    if(i !=-1) 
        return strDest.substring(0,i) + strInput + strDest.substr(i);
    else 
        return strDest;
}

console.log(f("jasdjhadskh","asd dd gg ewr ff a", 2));