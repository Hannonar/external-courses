var f = function(Array1,Array2)
{
    var res = true;
    for(var i = 0;i<Array1.length;i++)
        if(Array1[i] != Array2[i])
        {
            res = false;
            break;
        }
    return res;
}

console.log(f([1,2,3,3,5],[1,2,3,4,5]));