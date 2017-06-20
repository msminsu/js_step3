function Rule99dan(){
 this.output = $("#output");
}

Rule99dan.prototype.r3dan = function(){
    this.calc(3);
};

Rule99dan.prototype.r6dan = function(){
    this.calc(6);
};

Rule99dan.prototype.r9dan = function(){
    this.calc(9);
};


Rule99dan.prototype.calc = function(dan){
    var result='';
    for( var i = 1; i<10; i++){
        result += '<div>'+dan+'*'+i+'='+(dan*i)+'</div>';
    }
    this.output.html(result);
};

Rule99dan.prototype.reset = function(){

    this.output.html('');

};