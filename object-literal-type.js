
$(document).ready(function(){
    tabMenu.init();
    tabMenu.initEvent();
});


var tabMenu = {

    $tabMenu:null,
    $menuItems:null,
    $selectMenuItem:null,
    init: function(){
        this.$tabMenu = $("#tabMenu1");
        this.$menuItems = this.$tabMenu.find("li");
    },
    initEvent: function(){
        var that = this;
        this.$menuItems.on("click",function(){
            that.setSelectItem($(this));
        });
    },
    setSelectItem:function($menuItem){
        if(this.$selectMenuItem){
            this.$selectMenuItem.removeClass("select");
        }

        this.$selectMenuItem = $menuItem;
        this.$selectMenuItem.addClass("select");
    }
};
