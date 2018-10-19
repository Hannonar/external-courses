var f = function removeSpaces(str) 
{
var first = str.indexOf(" ");
var last = str.lastIndexOf (" ");

return str.slice (0, first) + str.slice( first+1, last) + str.slice ( last+1, str.length-1);
}
console.log(f("fgjjds jjvd ghj fffllj l"));
