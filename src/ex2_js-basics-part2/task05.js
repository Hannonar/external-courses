var f = function(Arr)
{
    res = Arr[0];
    for(var i = 1; i< Arr.length;i++)
        if(Arr[i]>Arr[i-1])res = Arr[i];
    return res;
}

console.log(f([1,2,3,4,500,"100",undefined,null,[1,2,3,4,5]]));