/**
 * 壮乡发展专题的专用脚本
 *
 * 作者：cyl
 * 创建时间：2018-09-04 00:21:23
 */

/**
 * 视差滚动
 */
$(function() {
    var timeline = $(".tab-timeline");
    var bg = timeline.children(".bg");
    var bgPosition = bg.css("top");

    $(window).scroll(function() {
        var bgBcr = bg[0].getBoundingClientRect();
        var timelineBcr = timeline[0].getBoundingClientRect();
        var vh = $(window).height();

        if ((timelineBcr.top + timelineBcr.bottom) < vh) {
            var offsetTop = vh / 2 - timelineBcr.top - bgBcr.height / 2 + "px";
            bg.animate({ top: offsetTop }, { duration: 500, queue: false });
        } else {
            bg.animate({ top: bgPosition }, { duration: 500, queue: false });
        }
    });
})
