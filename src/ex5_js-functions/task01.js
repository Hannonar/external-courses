var Calculator = {};
Calculator.lastResult = 0,
Calculator.add= function f(a)
    {
        this.lastResult +=a;
        return this.f;
    };
Calculator.subtract= function f(a)
    {
        lastResult -=a;
        return f;
    }
Calculator.divide= function f(a)
    {
        lastResult /=a;
        return f;
    },
Calculator.multiple= function f(a)
    {
        lastResult *=a;
        return f;
    };
Calculator.getResult= function()
    {
        return this.lastResult;
    };
Calculator.reset = function()
    {
        this.lastResult = 0;
    }
Calculator.add(1)(2);
console.log(Calculator.getResult());