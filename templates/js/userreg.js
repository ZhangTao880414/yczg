function CheckMail(mail) {
 var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if (filter.test(mail)) return true;
 else {
	 jQuery(".erroMessag2").html("请输入正确的邮件格式");
 //alert('请输入正确的邮件格式！');
 return false;
 }
}

function CheckPhone(Phone) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
 if(isPhone.test(Phone) || isMobile.test(Phone)) return true;
 else {	
        //alert('请输入正确的电话格式！');
		jQuery(".erroMessag9").html("请输入正确的电话格式");
		return false;
 		}
 
}
function CheckMobile(Mobile) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
if(isMobile.test(Mobile)) return true;
	else {
	// alert('请输入正确的手机格式！');
	 jQuery(".erroMessag9").html("请输入正确的手机格式");
	 return false;
	 }

 
}
 
function userreg(){	
	var username = jQuery("#username").val();
	var email = jQuery("#email").val();
	var pwd = jQuery("#pwd").val();
	var pwd2 = jQuery("#pwd2").val();
	var unitname = jQuery("#unitname").val();
    var UnitAddressCn = jQuery("#UnitAddressCn").val();
	var postcode = jQuery("#postcode").val();
	var realname = jQuery("#realname").val();
	var tel = jQuery("#tel").val();
	var mobile = jQuery("#mobile").val();
	var fax = jQuery("#fax").val();
	var qq = jQuery("#qq").val();
	var verifyCode = jQuery("#verifyCode").val(); 
	var tjr = jQuery("#tjr").val(); 
	//alert(tjr);
	var bj=1;

	jQuery(".erroMessag1").html("");	
	jQuery(".erroMessag2").html("");
	jQuery(".erroMessag3").html("");
	jQuery(".erroMessag5").html("");
	jQuery(".erroMessag6").html("");
	jQuery(".erroMessag7").html("");
	jQuery(".erroMessag8").html("");
	jQuery(".erroMessag9").html("");
	jQuery(".erroMessag10").html("");
	jQuery(".erroMessag11").html("");
	jQuery(".erroMessag12").html("");
	jQuery(".erroMessag13").html("");
	
	if(username=="")
		{
			 jQuery(".erroMessag1").html("请输入用户名");
		 bj=0;
				       //  return false;
		}
					if(username.length<=3 || username.length>18)
					  {
						 jQuery(".erroMessag1").html("用户名在3-18位之间");				 
						//  return false;
						bj=0;
					  } 
					  if(!(/^[A-Za-z0-9]+$/.test(username)))
						{
							jQuery(".erroMessag1").html("用户名只能由数字或字母组成");		
							bj=0;
						}
					
					if(pwd=="")
					{
						jQuery(".erroMessag3").html("请输入密码");
						//return false;
						bj=0;
					}
					if(pwd2!=pwd)
					{
						jQuery(".erroMessag13").html("两次密码输入不一致");
						//return false;
						bj=0;
					}
					if(unitname=="")
					{
						jQuery(".erroMessag5").html("请输入公司名称");
						//return false;
						bj=0;
					}
					if(tel=="")
				  {
					 jQuery(".erroMessag9").html("请输入联系电话");
					 bj=0;
					 return;
				  }else{
					  if (CheckPhone(tel)==false){
						   $("#tel").focus();
						  return false;
					  }
					}
				 if(mobile!="")
				   {
						if(CheckMobile(mobile)==false){
							 $("#mobile").focus();
							return false;
						}
						
					}
		     	if(email=="")
					{
						 jQuery(".erroMessag2").html("请输入email");
				     //    return false;
					 bj=0;
					}
					if(email!="")
				   {
						if (CheckMail(email)==false)
						{
							$("#email").focus();
							return false;
						}
					}
					if(verifyCode=="")
					{
						 jQuery(".erroMessag12").html("请输入验证码");
						//return false;
						bj=0;
					}
					
					//alert(2)
					
				if(bj==1)
				{
					
					 jQuery.ajax({ url: "ajax/ajax.userreg.php"
						  ,type: 'POST'
						  ,context:"application/json;utf-8"
						  ,cache: false
						  ,data: { "username": username,"pwd": pwd,"pwd2": pwd2,"email":email, "unitname": unitname, "UnitAddressCn": UnitAddressCn, "postcode": postcode, "realname": realname,"tel": tel,"tel": tel, "mobile": mobile, "fax": fax, "verifyCode": verifyCode,"qq":qq,"tjr":tjr}                            
						  ,success: function(msg){   
					       
						          var msgText = msg; 
					
								  if(msgText!='ok')
								  {
								      if(msgText==1){
								      alert("注册失败");
									   }
									    if(msgText==2){
								      alert("此用户已被注册");
									   }
									    if(msgText==3){
								      alert("验证码错误");
									   }
                                return false;        
								}
								else
								{
									alert("注册成功");
									window.location.href="usersucc.php";
									return true ;
									}
						  }
			});  
				}

		
		  return false;
}
