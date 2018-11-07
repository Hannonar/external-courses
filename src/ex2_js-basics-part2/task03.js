var f = function(Array)
{
    var even=0,noteven=0,zero=0;
    for(var i = 0;i< Array.length;i++)
    {
        if(Array[i] === 0) zero++;
        else 
            if(Array[i] %2 === 0)even++;
            else noteven++;
    }
    return [even,noteven,zero];
}
console.log(f([1,2,3,-2,-3,0,0,0,0,0,-8,null,true,false,[1],"",""]));