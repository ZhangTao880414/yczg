// JavaScript Document
function gopage(page,navUrl,pages)
{  
   var r = /^\+?[1-9][0-9]*$/;　　//正整数 
	if(r.test(page) && page>0 && page <= pages)
	{
	window.location=navUrl+"page="+page;
	}
	else 
	{
		alert("Please input the correct page!");
		document.getElementById("page").focus();
	}
}//分页转