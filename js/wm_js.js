$(function() {
	/*
	 * 返回上一页
	 */
	$('.back_icon').click(function() {
		history.back()
	})

	/*
	 * 房源管理筛选条件
	 */
	$('.fyglsx_con ul li').click(function() {
		$(this).parents('.fyglsx_x').find('span').text($(this).text());
	})

	$('.fyglsx_x_zx').click(function() {
		if($(this).children('i').hasClass('fa-long-arrow-down')) {
			$(this).children('i').addClass('fa-long-arrow-up').removeClass('fa-long-arrow-down');
		} else {
			$(this).children('i').removeClass('fa-long-arrow-up').addClass('fa-long-arrow-down');
		}
	})

	$('.fyxq_form_disabled input').attr("disabled", "disabled");
	$('.fyxq_form_disabled select').attr("disabled", "disabled")

})

/*
 * 是否添加分段合同
 */

$(function() {
	if($('.fdht_chekbox').is(':checked')) {
		$('.fdht_box').show();
	} else {
		$('.fdht_box').hide();
	}

	$('.fdht_chekbox').click(function() {
		if($('.fdht_chekbox').is(':checked')) {
			$('.fdht_box').show();
		} else {
			$('.fdht_box').hide();
		}
	})
	/*
	 * 业务筛选切换
	 */
	$('.ywsx_list li').click(function() {
		$(this).addClass('ywsx_on').siblings().removeClass('ywsx_on')
	})

})