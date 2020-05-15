//菜单按钮绑定hover事件
$('.header .nav .btn-box .btn').hover(function() {
    //鼠标移入
    $('.header .nav .btn-box .btn-list').show();
}, function() {
    //鼠标移出
    // $('.header .nav .btn-box .btn-list').hide();
});

//鼠标指针离开目标元素
$('.header .nav .btn-box').on('mouseleave', function() {
    $('.header .nav .btn-box .btn-list').hide();
});