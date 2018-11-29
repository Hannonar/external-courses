Shape = function(Type)
{
    type = Type;
    perim = 0;
};

Shape.prototype.getType = function()
{
    console.log("Type of this shape is " + type);
};
Shape.prototype.getPerimeter = function()
{
    console.log("The perimeter of " +type+ " is " + perim);
};
Shape.prototype.draw = function()
{
    console.log(type + " has been drawn.");
};
Triangle = function(A,B,C)
{
    this.a = A;
    this.b = B;
    this.c = C;
    type = "Triangle";
    perim = this.a + this.b + this.c;
};
Triangle.prototype = Object.create(Shape.prototype);

Square = function(A,B,C,D)
{
    this.a = A;
    this.b = B;
    this.c = C;
    this.d = D;
    type = "Square";
    perim = this.a + this.b + this.c + this.d;
};
Square.prototype = Object.create(Shape.prototype);

ColoredTriangle = function(A,B,C,Color)
{
    this.a = A;
    this.b = B;
    this.c = C;
    color = Color;
    perim = this.a + this.b + this.c;
    type = "Colored Triangle";
}
ColoredTriangle.prototype = Object.create(Triangle.prototype);
ColoredTriangle.prototype.draw = function()
{
    console.log(type + " of color " + color + " has been drawn.");
};

var a = new Shape("Octagon");
a.draw();
a.getPerimeter();
a.getType();

var b = new Triangle(1,2,3);
b.draw();
b.getPerimeter();
b.getType();

var c = new Square(1,2,3,4);
c.draw();
c.getPerimeter();
c.getType();

var d = new ColoredTriangle(1,2,3,"Red");
d.draw();
d.getPerimeter();
d.getType();
