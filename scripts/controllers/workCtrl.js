/**
 * Created by Administrator on 2016/4/9.
 */
function workCtrl($scope) {
    /*$scope.data = "this is a first view.";*/

    var num = $("ul").children("li").length;
    var width = num * 300;
    $("#allList").css("width", width);
    $("#allList").css("padding-right", 200);

    $(function() {
        $("#list1, #list2, #list3, #list4, #list5").sortable({
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



    var ob = {"person": [
        {"name":"aa", "age": "12", "sex": "f"},
        {"name":"bb", "age": "13", "sex": "m"},
        {"name":"cc", "age": "14", "sex": "f"},
        {"name":"dd", "age": "15", "sex": "m"},
        {"name":"ee", "age": "16", "sex": "f"},
        {"name":"ff", "age": "17", "sex": "m"}]};
    
    var template = "{{#person}}<li>{{name}}</li>{{/person}}";
    var views = Mustache.render(template, ob);
    $("#list2").html(views);


}