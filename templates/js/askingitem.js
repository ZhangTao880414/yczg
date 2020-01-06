// JavaScript Document
jQuery(function($){
	$('#sdate').datepicker({
	yearRange: '1900:2099', //取值范围.
	showOn: 'both', //输入框和图片按钮都可以使用日历控件。
	//buttonImage: '', //日历控件的按钮
	buttonImageOnly: true,
	showButtonPanel: true
	});
	
	
	$('#odate').datepicker({
	yearRange: '1900:2099', //取值范围.
	showOn: 'both', //输入框和图片按钮都可以使用日历控件。
	//buttonImage: '', //日历控件的按钮
	buttonImageOnly: true,
	showButtonPanel: true
	});
}); 