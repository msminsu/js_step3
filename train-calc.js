function Calc(){
    this.val1 = null;
    this.val2 = null;
    this.op = null;
    this.output = null;
}

Calc.prototype.init = function(){
    this.val1 = $("#val1");
    this.val2 = $("#val2");
    this.op = $("#op");
    this.output = $("#output");
};

Calc.prototype.initEvent = function(){
    $("#cal").on('click',function(){
        this.calc();
    });
};

Calc.prototype.calc = function(){
    var a = parseInt(this.val1.val());
    var b = parseInt(this.val2.val());

    switch(this.op.val()){
        case '+':
            this.plus(a,b);
            break;
        case '-':
            this.minus(a,b);
            break;
        case '*':
            this.multip(a,b);
            break;
        case '/':
            this.divice(a,b);
            break;

    };
};

Calc.prototype.plus = function(a,b){
    this.output.html(a+b)
};
Calc.prototype.minus = function(a,b){
    this.output.html(a-b)
};
Calc.prototype.multip = function(a,b){
    this.output.html(a*b)
};
Calc.prototype.divice = function(a,b){
    this.output.html(a/b)
};
