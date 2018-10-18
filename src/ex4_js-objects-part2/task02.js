function createWithoutProt()
{
    return Object.create(null);
}

var a = createWithoutProt();

console.log(a["__proto__"]);