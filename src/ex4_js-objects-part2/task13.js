var f = function rnd(min,max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(f(-5000,1000));