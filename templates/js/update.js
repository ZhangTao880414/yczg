// JavaScript Document
function updateData()
 {
  $.getScript("http://www.sf-skf.com/service/update.php"); 
 }

$().ready(function() { 
	window.setTimeout('updateData()',25*1000);//25���ִ��
});