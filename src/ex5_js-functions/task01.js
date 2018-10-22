var  init = function(obj)
{
    var result = 0;
    obj.add = function f1(b)
    {
        if(b!= undefined) result +=b;
        return f1;
    }
    obj.subtract = function f1(b)
    {
        if(b!= undefined) result -=b;
         return f1;
    }
    obj.divide = function f1(b)
    {
        if(b!= undefined) result /=b;
        return f1;
    }
    obj.multiply = function f1(b)
    {
        if(b!= undefined) result *=b;
        return f1;
    }
    obj.getResult = function f1()
    {
        return result;
    }
    obj.reset = function f1()
    {
        result = 0;
        return "Результат последней операции обнулен";
    }
}
var Calculator = {};
init(Calculator);
console.log(Calculator.getResult());
Calculator.add(1)();
console.log(Calculator.getResult());
Calculator.subtract(3)()()(2);
console.log(Calculator.getResult());
Calculator.divide(2)(1)();
console.log(Calculator.getResult());
Calculator.multiply(100)(.1);
console.log(Calculator.getResult());
Calculator.reset();
console.log(Calculator.getResult());