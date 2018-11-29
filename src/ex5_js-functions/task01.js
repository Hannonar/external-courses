function f(a)
{
    result = 0;
    switch(a)
    {
        case 0:
        {
            return function f1 (b)
            {
                this.result +=b;
                return this.f1;
            }
        }
        break;
        case 1:
        {
            return function f1 (b)
            {
                this.result -=b;
                return this.f1;
            }
        }
        break;
        case 2:
        {
            return function f1 (b)
            {
                this.result /=b;
                return this.f1;
            }
        }
        break;
        case 3:
        {
            return function f1 (b)
            {
                this.result *=b;
                return this.f1;
            }
        }
        break;
        case 4:
        {
            return function f1 (b)
            {
                return this.result;
            }
        }
        default: return undefined;
    }
}
var Calculator = 
{
    add:f(0),
    substr:f(1),
    divide:f(2),
    multiple:f(3),
    getResult:f(4)
}

Calculator.add(1);
console.log(Calculator.getResult());