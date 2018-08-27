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

$(function() {
	$('#goto_cn').on('click', gotoCN);
	$('#goto_en').on('click', gotoEN);
})