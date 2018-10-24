var f = function(propName,obj)
{
    if(propName in obj) return true;
    else return false;
}

console.log(f("name",{name:"myName",age:50}));
console.log(f("name",{firstName:"myFirstName",lastName:"myLastName"}));