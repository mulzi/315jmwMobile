$(function () {
    setInterval(function () { //首页商机快报
        let oneLi = $('#upRunBox a:eq(0)').clone();
        $('#upRunBox a:eq(0)').animate({marginTop: "-28px"}, 1200, function () {
            $('#upRunBox a:eq(0)').remove();
            $('#upRunBox').append(oneLi)
        })
    },3000);
    function colorMath() { //颜色随机数
       let rgb = `${Math.floor(Math.random() *256)},${Math.floor(Math.random() *256)},${Math.floor(Math.random() *256)}`;
       return rgb
    }
   setInterval(() =>{
       $('.topTitle .colorChange').css({"color":`rgb(${colorMath()})`})
   },1500);

    function createToHeader() { //创建返回顶部和返回首页
        let toHeaderStr = `<div class="toHeader">
                            <a class="toIndex" href="http://m.315jmw.cn/">
                            <img src="img/toIndex.png" alt="">
                            <span>首页</span>
                        </a>
                        <a class="toTop" href="#">
                            <img src="img/toTop.png" alt="">
                            <span>顶部</span>
                        </a>
                        </div>`;
        $('.toHeader').remove();
        $('body').append(toHeaderStr);
    };
    $(window).scroll(function () {  //判断距离并触发
        if ($(window).scrollTop() > window.screen.availHeight) { //滑动距离超过一屏时触发
            createToHeader()
        } else {
            $('.toHeader').remove()
        }
    });

    $('#pro_ML li').on('click', function () {//项目详情切换
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        $(".project_bottomImg>dl").eq($(this).index()).siblings().css({display: 'none'});
        $(".project_bottomImg>dl").eq($(this).index()).css({display: 'block'});
        $('html,body').animate({scrollTop: 500}, 0)
    });

    $(window).scroll(function () {  //// 项目切换选项  浮动停留
        if ($(window).scrollTop() >= 500) {
            $('.project_topMenu').addClass('fixed')
        } else (
            $('.project_topMenu').removeClass('fixed')
        )
    });


});