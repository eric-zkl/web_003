/**
 * 基本的通用脚本
 *
 * 作者：cyl
 * 创建时间：2018-08-28 15:22:57
 */


/**
 * 跳转到英文页面
 * @return boolean 消除默认行为
 */
function gotoEN() {
	window.location.href = (window.location.href).replace('/cn/', '/en/');
	return false;
}

/**
 * 跳转到中文页面
 * @return boolean 消除默认行为
 */
function gotoCN() {
	window.location.href = (window.location.href).replace('/en/', '/cn/');
	return false;
}

/**
 * 标签页快速切换
 */
var isHoving
function tabFastSwitch() {
  $('.tab-fast-switch').hover(function () {
    var t = $( this )
    if(isHoving) return
    isHoving = true
    setTimeout(function () {
      t.tab('show')
      isHoving = false
    }, 300)
    // console.log('this.', $(this))
  })
	// $('.tab-fast-switch').on('mouseover', function() {
	// 	$(this).tab('show');
	// })
}

$(function() {
	$('#goto_cn').on('click', gotoCN);
	$('#goto_en').on('click', gotoEN);
	tabFastSwitch();
});