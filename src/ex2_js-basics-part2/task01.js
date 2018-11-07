var f = function Task01(Input)
{
    var res = typeof(Input);
    if(res === "string" || res === "number") return res;
    else return undefined;
}

console.log(f(null));
