// JavaScript Document
jQuery(function($){
	$('#sdate').datepicker({
	yearRange: '1900:2099', //ȡֵ��Χ.
	showOn: 'both', //������ͼƬ��ť������ʹ�������ؼ���
	//buttonImage: '', //�����ؼ��İ�ť
	buttonImageOnly: true,
	showButtonPanel: true
	});
	
	
	$('#odate').datepicker({
	yearRange: '1900:2099', //ȡֵ��Χ.
	showOn: 'both', //������ͼƬ��ť������ʹ�������ؼ���
	//buttonImage: '', //�����ؼ��İ�ť
	buttonImageOnly: true,
	showButtonPanel: true
	});
}); 