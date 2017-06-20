
$(document).ready(function(){

    var tab1 = new Tabmenu();
    tab1.init('#tabMenu1');
    tab1.initEvent();

    var tab2 = new Tabmenu();
    tab2.init('#tabMenu2');
    tab2.initEvent();
});


function Tabmenu(){

    this.$tabMenu=null;
    this.$menuItems=null;
    this.$selectMenuItem=null;

    this.init = function(selector){
        this.$tabMenu = $(selector);
        this.$menuItems = this.$tabMenu.find("li");
    };

    this.initEvent = function(){

        var that = this;
        this.$menuItems.on("click",function(){
            that.setSelectItem($(this));
        });
    };

    this.setSelectItem=function($menuItem){

        if(this.$selectMenuItem){
            this.$selectMenuItem.removeClass("select");
        }

        this.$selectMenuItem = $menuItem;
        this.$selectMenuItem.addClass("select");
    };
}