function OneAddshopping()
{//�������빺�ﳵ	
	var xl =$("#xh").val();
	var brand =$("#brand1").val();
	var ddamount = $("#ddamount").val();
	//var boxamount = $("#boxamount").val();
	var LinkMan = $("#LinkMan").val();
	var Tel = $("#Tel").val();
	var Mobile = $("#Mobile").val();
	var memberid = $("#memberid").val();
	var userid = $("#userid").val();
	var paijia = $("#paijia").val();
	if (ddamount==""){
		alert("Ҫ����������Ϊ�գ�");
		$("#ddamount").focus();
		return;
		}else if(ddamount<=0){
			alert("Ҫ��������������1�ף�");
			$("#ddamount").focus();
			return;
			}
	/*if (boxamount==""){
		alert("װ����������Ϊ�գ�");
		$("#boxamount").focus();
		return;
		}else if(boxamount<=0){
			alert("װ��������������1����");
			$("#boxamount").focus();
			return;
			}	*/
		$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			,context: "application/json;gb2312"
			,cache: false
			,data: {"active":"add","xl":xl,"brand":brand,"ddamount":ddamount,"LinkMan":LinkMan,"Tel":Tel,"Mobile":Mobile,"memberid":memberid,"userid":userid,"paijia":paijia}
			, success: function(msg)
				{  
				  window.location.href = 'shopcart.php';
				}
		   } 
	  ); 
}

function AddItemToshopping()
{//���빺�ﳵ	
	var xl =$("#xh").val();
	var brand =$("#brand1").val();
	var ddamount = $("#ddamount").val();
	//var boxamount = $("#boxamount").val();
	var LinkMan = $("#LinkMan").val();
	var Tel = $("#Tel").val();
	var Mobile = $("#Mobile").val();
	var memberid = $("#memberid").val();
	var userid = $("#userid").val();
	var paijia = $("#paijia").val();
	if (ddamount==""){
		alert("Ҫ����������Ϊ�գ�");
		$("#ddamount").focus();
		return;
		}else if(ddamount<=0){
			alert("Ҫ��������������1�ף�");
			$("#ddamount").focus();
			return;
			}
	/*if (boxamount==""){
		alert("װ����������Ϊ�գ�");
		$("#boxamount").focus();
		return;
		}else if(boxamount<=0){
			alert("װ��������������1����");
			$("#boxamount").focus();
			return;
			}	*/
$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			,context: "application/json;gb2312"
			,cache: false
			,data: {"active":"add","xl":xl,"brand":brand,"ddamount":ddamount,"LinkMan":LinkMan,"Tel":Tel,"Mobile":Mobile,"memberid":memberid,"userid":userid,"paijia":paijia}
			, success: function(msg)
				{  
				      dialog();	
					  var num = msg;
					 $(".count").html(num);	
				}
		   } 
	  ); 
}

function delLine(delLine)
{
	if(confirm("ȷ��Ҫɾ����"))
	{
		jQuery.ajax(
			{ url: "ajax/shopcart.ajax.php"
			  ,type: 'POST'
			  ,context: "application/json;gb2312"
			  ,cache: false  
			  ,data: {"active":"delete","delLine":delLine}
			  , success: function(msg){
				 var msgText = msg.responseText;
				 if(msg=="ok")
				 {
					window.location.href="shopcart.php"; 	
					 return true;
				 }
			 }
		}); 
	}
}

function EmptyShoppingCart(memberid)
{
	if(confirm("ȷ��Ҫ���������"))
   	{
		$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			,context: "application/json;gb2312"
			,cache: false
			,data: {"active":"empty","memberid":memberid}
			, success: function(msg){  
				  if(msg.indexOf("ok")!=-1)
				  {
					  window.location.href="shopcart.php"; 	
				  }
				}
		   } 
	  ); 
  	 }		
}
function CheckPhone(Phone) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
 if(isPhone.test(Phone) || isMobile.test(Phone)) return true;
 else {	
        alert('��������ȷ�ĵ绰��ʽ��');
		return false;
 		}
 
}
function CheckMobile(Mobile) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
if(isMobile.test(Mobile)) return true;
	else {
	 alert('��������ȷ���ֻ���ʽ��');
	 return false;
	 }
 
}
function CheckOut()
{   	
	  var LinkMan = $("#LinkMan").val();	
	  var Tel = $("#Tel").val() ;
	  var Mobile = $("#Mobile").val();	
	  var UnitAddressCn = $("#UnitAddressCn").val();	
	  var memberid = $("#memberid").val();		
	 
	  if(LinkMan=="")
	  {
		 alert("�ջ��˲���Ϊ��!");
		 return;
	  }
	  if(Tel=="")
	  {
		 alert("��ϵ�绰����Ϊ��!");
		 return;
	  }else{
		  if (CheckPhone(Tel)==false){
			   $("#Tel").focus();
			  return false;
		  }
		  }
	 if(Mobile!="")
	   {
			if(CheckMobile(Mobile)==false){
				 $("#Mobile").focus();
				return false;
			}
			
		}
	 if(UnitAddressCn=="")
	  {
		 alert("�ջ���ַ����Ϊ��!");
		 return;
	  }
	$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			, context: "application/json;gb2312"
			,cache: false
			,data: {"active":"checkout","LinkMan":LinkMan,"Tel":Tel,"Mobile":Mobile,"UnitAddressCn":UnitAddressCn,"memberid":memberid}	  
			, success: function(msg){  
			   tishi();
				 }
		   }
	  );
}

function dialog(){ 	
     var content="<div class=\"dui\"><span>���ͺųɹ����빺�ﳵ��</span><p>��ǰ���ﳵ����&nbsp;<span class=\"count\" style=\"color:#F00; font-weight:bold;\"></span>&nbsp;��������Ϣ</p></div><input type=\"image\" src=\"images/chakan.png\" class=\"xj\" onclick=\"javascript:window.location.href=\'shopcart.php\'\"/><span class=\"close\"><a href=\"javascript:void(0);\" onclick=\"javascript:window.location.href=\'userproductyq.php\'\">��������</a></span>";
	ymPrompt.win({message:content,width:453,height:344,titleBar:false,title:'��ӳɹ�'})
}; 

 function centure(LinkMan,Tel,Mobile,UnitAddressCn,memberid){ 
      var content="<div class=\"listxx\"><ul><li><span>�ջ��ˣ�</span><input id=\"LinkMan\" type=\"text\" value='"+LinkMan+"'  /></li><li><span>��ϵ�绰��</span><input type=\"text\" id=\"Tel\" value='"+Tel+"'  /></li><li style=\"padding-bottom:5px; margin-top:-10px;\"><p style=\"color:#999; text-indent:100px;\">��ʽ��029-82491203(���ֻ���)</p><p></p></li><li><span>�ֻ����룺</span><input id=\"Mobile\"  type=\"text\" value='"+Mobile+"'/></li><li><span>�ջ���ַ��</span><input id=\"UnitAddressCn\"  value='"+UnitAddressCn+"' type=\"text\" /><input id=\"memberid\"  value='"+memberid+"' type=\"hidden\" /></li></ul></div><input type=\"image\" class=\"button\" src=\"images/que.png\" onclick=\"CheckOut()\"/>";
	  
	ymPrompt.win({message:content,width:414,height:374,closeBtn:false,title:'ȷ�϶���'})

}; 


function tishi(){ 	 
     var content="<div class=\"dui\"><span>�Ѿ�����ɹ����������ĵȴ��ظ���</span></div><input type=\"image\" src=\"images/tuichu.png\" class=\"tuichu\" onclick=\"window.history.go(0);\"/>";
	ymPrompt.win({message:content,width:414,height:344,title:'����ɹ�',titleBar:false,autoClose:true})
			
}; 

function mydelLine(delLine)
{
	if(confirm("ȷ��Ҫɾ����"))
	{
		jQuery.ajax(
			{ url: "ajax/shopcart.ajax.php"
			  ,type: 'POST'
			  ,context: "application/json;gb2312"
			  ,cache: false  
			  ,data: {"active":"delete","delLine":delLine}
			  , success: function(msg){
				 var msgText = msg.responseText;
				 if(msg=="ok")
				 {
					window.location.href="usershopcart.php"; 	
					 return true;
				 }
			 }
		}); 
	}
}

function myEmptyShoppingCart(memberid)
{
	if(confirm("ȷ��Ҫ���������"))
   	{
		$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			,context: "application/json;gb2312"
			,cache: false
			,data: {"active":"empty","memberid":memberid}
			, success: function(msg){  
				  if(msg.indexOf("ok")!=-1)
				  {
					  window.location.href="usershopcart.php"; 	
				  }
				}
		   } 
	  ); 
  	 }		
}

function changeNum(obj,num)
{
    var input = getParent(obj).getElementsByTagName("input");
    for(var i=0;i<input.length;i++)
    {
        if(input[i].type=="text" )
        {
            if(input[i].value == "" )
			{
                input[i].value = num;
				}
            else 
			{
				if (input[i].value==0)
				{
					if (num==1)
					{
					input[i].value = input[i].value - 0 + num;
					}
					else{
					input[i].value = input[i].value+1 - 0 + num;
					}
				}
				else{
					 input[i].value = input[i].value - 0 + num;
				}
			}
				
        }
    } 
	
}
//��ȡ��������
function getParent(obj)
{
    if(typeof(obj) != "object"){obj = document.getElementById(obj);}
    if(obj)
        return obj.parentElement || obj.parentNode;
}

//��ѡ��ȫѡ
    function checkAll(formvalue) {
        var roomids = document.getElementsByName(formvalue);
        for ( var j = 0; j < roomids.length; j++) {
            if (roomids.item(j).checked == false) {
                roomids.item(j).checked = true;
            }
        }
    }

function ChooseDelete()
{
	    var j=0;
		var b=[];
		var check =document.getElementsByName("check[]"); 
	    for(i=0;i<check.length;i++){  
          if(check[i].checked)
		  {
			  b[j] =[check[i].value];
			  j=j+1;
		  };   
       } 
	   if(j==0)
	   {
		   alert("�빴ѡҪɾ������Ŀ");
		   return;
		}
	if(confirm("ȷ��Ҫ���������"))
   	{
		$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			,context: "application/json;gb2312"
			,cache: false
			,data: {"active":"checkdelete","b":b}
			, success: function(msg){  
				  if(msg.indexOf("ok")!=-1)
				  {
					  window.location.href="usershopcart.php"; 	
				  }
				}
		   } 
	  ); 
  	 }		
}


 function centuredd(){ 
 
        var j=0;
		var b=[];
		var check =document.getElementsByName("check[]"); 
		var xh_List =document.getElementsByName("xhname[]");  
		var pp_List =document.getElementsByName("ppname[]");
		var sl_List =document.getElementsByName("slname[]"); 
		var pj_List =document.getElementsByName("paijia[]");
		var total_List =document.getElementsByName("total[]");
		var check =document.getElementsByName("check[]"); 
	    for(i=0;i<check.length;i++){  
          if(check[i].checked)
		  {
			  b[j] =[xh_List[i].value,pp_List[i].value,sl_List[i].value,pj_List[i].value,total_List[i].value,check[i].value];
			  j=j+1;
		  };   
       } 
	   if(j==0)
	   {
		   alert("���ȹ�ѡҪ�������ͺ�");
		   return;
		}
 var LinkMan = $("#LinkMan").val();
 var Tel = $("#Tel").val();
 var Mobile = $("#Mobile").val();
 var UnitAddressCn = $("#UnitAddressCn").val();
 var memberid = $("#memberid").val();
      var content="<div class=\"listxx\"><ul><li><span>�ջ��ˣ�</span><input id=\"LinkMan1\" type=\"text\" value='"+LinkMan+"'  /></li><li><span>��ϵ�绰��</span><input type=\"text\" id=\"Tel1\" value='"+Tel+"'  /></li><li style=\"padding-bottom:5px; margin-top:-10px;\"><p style=\"color:#999; text-indent:100px;\">��ʽ��029-82491203(���ֻ���)</p><p></p></li><li><span>�ֻ����룺</span><input id=\"Mobile1\"  type=\"text\" value='"+Mobile+"'/></li><li><span>�ջ���ַ��</span><input id=\"UnitAddressCn1\"  value='"+UnitAddressCn+"' type=\"text\" /><input id=\"memberid\"  value='"+memberid+"' type=\"hidden\" /><input id=\"arrdata\"  value='"+b+"' type=\"hidden\" /></li></li></ul></div><input type=\"image\" class=\"button\" src=\"images/que.png\" onclick=\"CheckOutDd()\"/>";
	  
	ymPrompt.win({message:content,width:414,height:374,closeBtn:false,title:'ȷ�϶���'})

}; 

function CheckOutDd()
{   	
	  var LinkMan = $("#LinkMan1").val();	
	  var Tel = $("#Tel1").val() ;
	  var Mobile = $("#Mobile1").val();	
	  var UnitAddressCn = $("#UnitAddressCn1").val();	
	  var memberid = $("#memberid").val();	
	  var arrdata = $("#arrdata").val();
	  if(LinkMan=="")
	  {
		 alert("�ջ��˲���Ϊ��!");
		 return;
	  }
	  if(Tel=="")
	  {
		 alert("��ϵ�绰����Ϊ��!");
		 return;
	  }else{
		  if (CheckPhone(Tel)==false){
			   $("#Tel").focus();
			  return false;
		  }
		  }
	 if(Mobile!="")
	   {
			if(CheckMobile(Mobile)==false){
				 $("#Mobile").focus();
				return false;
			}
			
		}
	 if(UnitAddressCn=="")
	  {
		 alert("�ջ���ַ����Ϊ��!");
		 return;
	  }
	$.ajax(
			{ 
			url: "ajax/shopcart.ajax.php"
			,type: 'POST'
			, context: "application/json;gb2312"
			,cache: false
			,data: {"active":"checkoutdd","LinkMan":LinkMan,"Tel":Tel,"Mobile":Mobile,"UnitAddressCn":UnitAddressCn,"memberid":memberid,"arrdata":arrdata}	  
			, success: function(msg){  
			   tishi();
				 }
		   }
	  );
}
function changeValue(id){
  var slname = $("#slname"+id).val();
  var paijia = $("#paijia"+id).val();
  document.getElementById('total'+id).value = (slname*paijia).toFixed(2);
 $("#totalmoney").html(getSum());
 }
 
function getSum(){
    var sum = 0;
    $.each($("li input[id^='total']"),function(){	
			if($(this).val()){
			sum += parseFloat($(this).val());
		}
    })
	return sum.toFixed(2);
  }

