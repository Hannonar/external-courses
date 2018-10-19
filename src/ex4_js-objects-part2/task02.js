var a = function createWithoutProt()
{
    return Object.create(null);
}

console.log(a["__proto__"]);