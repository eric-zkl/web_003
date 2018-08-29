/**
 * 八桂人物专题专用脚本
 *
 * 作者：cyl
 * 创建时间：2018-08-29 19:39:27
 */

/**
 * 初始化标签那栏的背景
 */
function initTabBg() {
	$('#mien_tab a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  	bgSync(e.target);
	});
}

/**
 * 背景同步
 * @param  {ele} tab 需要同步的标签
 */
function bgSync(tab) {
  	var id = $(tab).attr('href');
  	var img = $(id).find('.img').css('background-image');
  	$('#mien_tab .bg').css('background-image', img);
}

$(function() {
	initTabBg();
})