
/*
 예제02: 예제: 함수 단위 코딩으로 만들어진 탭메뉴를 리터럴 방식으로 클래스를 만들어 주세요.

 */
// 탭메뉴 관련 변수
var $tabMenu =null;
var $menuItems=null;
var $selectMenuItem=null;

$(document).ready(function(){
    // 탭메뉴 요소 초기화
    init();
    // 탭메뉴 요소에 이벤트 등록
    initEvent();
});

// 요소 초기화
function init(){
    $tabMenu = $("#tabMenu1");
    $menuItems = $tabMenu.find("li");
}

// 이벤트 등록
function initEvent(){
    $menuItems.on("click",function(){
        setSelectItem($(this));
    });
}

// $menuItem에 해당하는 메뉴 아이템 선택하기
function setSelectItem($menuItem){
    // 기존 선택메뉴 아이템을 비활성화 처리 하기
    if($selectMenuItem){
        $selectMenuItem.removeClass("select");
    }

    // 신규 아이템 활성화 처리 하기
    $selectMenuItem = $menuItem;
    $selectMenuItem.addClass("select");
}
/**
 * Created by msminsu1 on 2017-06-15.
 */
