var Calculator = 
{
    lastResult:0,
    add:function(a)
    {
        lastResult += a;
        return this.lastResult;
    },
    subtract:function(a)
    {
        lastResult -= a;
        return this.lastResult;
    },
    divide:function(a)
    {
        lastResult /= a;
        return this.lastResult;
    },
    multiple:function(a)
    {
        lastResult *= a;
        return this.lastResult;
    },
    getResult:function()
    {
        return lastResult;
    },
    reset:function()
    {
        lastResult = 0;
        return "Результат последней операции сбршен до нуля";
    }
}