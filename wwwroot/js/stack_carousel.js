/**
 * 层叠轮播（可见三层，实际四层）
 *
 * 作者：cyl
 * 创建时间：2018-08-21 20:46:46
 */


/**
 * 初始化轮播页
 * @param  {jqele} slide   轮播页
 * @param  {Array} content 轮播内容数组
 */
function initSlide(slide, content) {
	// 获得轮播页对应的索引
	var i = slide.attr('index') % content.length;

	// 设置标题
	slide.find('.title').text(content[i].title);
	// 设置详细信息
	slide.find('.msg').text(content[i].msg);
	// 设置背景
	slide.css('background-image', 'url(' + content[i].bg + ')');
}

/**
 * 轮播页点击处理
 * @param  {Event} e 点击事件（带有数据）
 */
function clickSlideHandler(e) {
	// 轮播页1
	var slide_1 = $(this);
	// 如果动画进行中就退出函数
	if (slide_1.hasClass('slide-out')) return false;

	// 轮播包装
	var wrapper = e.data.wrapper;
	// 轮播内容数组
	var content = e.data.content;
	// 依次提升每张轮播页
	var slide_4 = slide_1.addClass('slide-out')
		.prev('.slide').addClass('slide-1')
		.prev('.slide').addClass('slide-2')
		.prev('.slide').addClass('slide-3');

	// 设置延时器，等待过渡结束
	setTimeout(function() {
		// 为新的顶层设置点击事件
		slide_1.prev().on('click', { 'wrapper': wrapper, 'content': content }, clickSlideHandler);

		// 构造新的轮播页（在最底层，准备显示）
		var slide_new = slide_4.clone().removeClass('slide-3');
		// 获得新的索引
		var index = parseInt(slide_new.attr('index')) + 1;
		// 给新轮播页设置索引
		slide_new.attr('index', index);
		// 给轮播页设置内容
		initSlide(slide_new, content);
		// 添加新轮播页
		wrapper.prepend(slide_new);
		// 从DOM树中移除已经消失旧顶层
		slide_1.remove();
	}, 600);
}

/**
 * 初始化层叠轮播
 * @param  {string} wrapperSelector 轮播包装的选择器
 * @param  {Array}  content         轮播内容数组
 */
function stackCarousel(wrapperSelector, content) {
	// 轮播包装
	var wrapper = $(wrapperSelector);
	// 获取轮播页原型，并从DOM树中移除
	var slide = wrapper.children('.slide').remove();

	// 初始化轮播页4
	var slide_4 = slide.clone().addClass('slide-4').attr('index', 3);
	initSlide(slide_4, content);

	// 初始化轮播页3
	var slide_3 = slide_4.clone().addClass('slide-3').attr('index', 2);
	initSlide(slide_3, content);

	// 初始化轮播页2
	var slide_2 = slide_3.clone().addClass('slide-2').attr('index', 1);
	initSlide(slide_2, content);

	// 初始化轮播页1
	var slide_1 = slide_2.clone().addClass('slide-1').attr('index', 0)
		.on('click', { 'wrapper': wrapper, 'content': content } , clickSlideHandler);
	initSlide(slide_1, content);

	// 添加所有轮播页
	wrapper.append(slide_4).append(slide_3).append(slide_2).append(slide_1);
}
