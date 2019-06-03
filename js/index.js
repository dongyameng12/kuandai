
// ios点击事件不触发
$(function() {  
    FastClick.attach(document.body);  
})
$(document).ready(function () {
    var str1 = "<p>此功能工程师，</p><p>在努力开发中！</p>"
    var str2 = "<p>活动暂未开始，</p><p>请您敬请期待！</p>"
    var str3 = "<p>请根据提示音按5</p>"
    $('.tc_01').on('click',function(){
        // 第一个弹窗
        callPopup(str1);
    })
    $('.tc_02').on('click',function(){
        // 第二个弹窗
        callPopup(str2);
    })
    $('.tc_03').on('click',function(){
        // 第三个弹窗
        callPopup(str3);
    })
    //调用弹窗
    // str:弹窗内容
    function callPopup (str){
        showMask();
        $('#tc_text').html(str)
        $('.tc').show();
    }    
    // 关闭弹窗
    $('.close').on('click',function(){
        hideMask();
        $(this).parent().hide()
    })
});
//显示遮罩层
function showMask() {
    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $('body').css('position', 'fixed');
}
//隐藏遮罩层
function hideMask() {
    $("#mask").hide();
    $('body').css('position', 'unset');
}