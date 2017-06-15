
$(document).ready(function(){

    var tab = new TabMenu("#tabMenu1");
    var tab2 = new TabMenu("#tabMenu2");
});

function TabMenu(selector){
    this.$tabMenu =null;
    this.$menuItems=null;
    this.$selectMenuItem=null;
    this.init(selector);
    this.initEvent();
}
// 요소 초기화
TabMenu.prototype.init = function(selector){
    this.$tabMenu = $(selector);
    this.$menuItems = this.$tabMenu.find("li");
};

// 이벤트 등록
TabMenu.prototype.initEvent = function(){
    var that = this;
    this.$menuItems.on("click",function(){
        that.setSelectItem($(this));
    });
};

// $menuItem에 해당하는 메뉴 아이템 선택하기
TabMenu.prototype.setSelectItem = function($menuItem){
    // 기존 선택메뉴 아이템을 비활성화 처리 하기
    if(this.$selectMenuItem){
        this.$selectMenuItem.removeClass("select");
    }

    // 신규 아이템 활성화 처리 하기
    this.$selectMenuItem = $menuItem;
    this.$selectMenuItem.addClass("select");
};
/**
 * Created by msminsu1 on 2017-06-15.
 */
