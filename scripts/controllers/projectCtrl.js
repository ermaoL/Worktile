/**
 * Created by Administrator on 2016/4/9.
 */

function projectCtrl($scope) {

    $(function() {
        $("#list1, #list2, #list3").sortable({
            connectWith: "ul",
            placeholder: "item_empty"
        }).disableSelection();

        $("#allList").sortable({
            handle: ".content_head"
        }).disableSelection();
    });

    /** 如何div高度超过屏幕高度，则div出现滚动条 **/
    var scrollOrNot = function(id) {
        var screenHeight = $(window).height() - 150;
        var contentHeight = $(id).height();
        if (contentHeight > screenHeight) {
            $(id).css("height", screenHeight);
            $(id).css("overflow-y", "auto");
            $(id).css("overflow-x", "hidden");
        }
    }

    scrollOrNot("#list1");

    $scope.newLi = function () {
        $("#list1").append("<li><input type='text' placeholder='请输入任务内容' class='newInput'/></li>");
    }

}