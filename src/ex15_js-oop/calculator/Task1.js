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

AccountingCalculator = function()
{
    result = 0;
}
AccountingCalculator.prototype = Object.create(Calculator.prototype);
AccountingCalculator.prototype.calcVAT = function(){}
AccountingCalculator.prototype.convertCurrency = function(CurName){};

EngineeringCalculator = function()
{
    result = 0;
}
EngineeringCalculator.prototype = Object.create(Calculator.prototype);
EngineeringCalculator.prototype.calcTrigonometric = function(FunctName){}

FinancialCalculator = function()
{
    result = 0;
}
FinancialCalculator.prototype = Object.create(Calculator.prototype);
FinancialCalculator.prototype.calcAnnuity = function(){}

ProgrammableCalculator = function()
{
    result = 0;
}
ProgrammableCalculator.prototype = Object.create(Calculator.prototype);
ProgrammableCalculator.prototype.setProgram = function(){}

GraphicalCalculator = function()
{
    result = 0;
}
GraphicalCalculator.prototype = Object.create(ProgrammableCalculator.prototype);
GraphicalCalculator.prototype.drawGraphic = function(){}

var calc = new Calculator();
var calc2 = new Calculator();

var res = calc.add(100)
.multiply(2)
.divide(20)
.reset()
.subtract(5)
.getResult();
var res2 = calc2.add(123)
.subtract(5)
.getResult();

console.log(res);
console.log(res2);

console.log(calc.setState(321).getResult());