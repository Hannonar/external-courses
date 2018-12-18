Calculator = function()
{
    result = 0;
};

Calculator.prototype.add = function(b)
{
    if(b!= undefined) result +=b;
    return this;
};
Calculator.prototype.subtract = function(b)
{
    if(b!= undefined) result -=b;
     return this;
};
Calculator.prototype.divide = function(b)
{
    if(b!= undefined) result /=b;
    return this;
};
Calculator.prototype.multiply = function(b)
{
    if(b!= undefined) result *=b;
    return this;
};
Calculator.prototype.getResult = function()
{
    return result;
};
Calculator.prototype.reset = function()
{
    result = 0;
    return this;
};
Calculator.prototype.setState = function(b)
{
    result = b;
    return this;
};
Calculator.prototype.fetchData = function(callback)
{
    console.log("Fetching data");
    setTimeout(function()
    {
        console.log("Fetching completed");
        callback.bind(this);
    },1500);
    
}
Calculator.prototype.fetchingCompleted = function()
{
    setState(500);
}

var calc = new Calculator;
console.log(calc.add(2).add(3).divide(5).multiply(100).getResult());
calc.fetchData(calc.fetchingCompleted);
console.log(calc.getResult());
