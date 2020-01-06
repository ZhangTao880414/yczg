
function userLogin(){	
					var user = jQuery("#user").val();
					var pwd = jQuery("#pwd").val();
					var vCode = jQuery("#vCode").val();  
					if(user=="")
					{
						 jQuery(".erroMessag").html();
				         return false;
					}
					if(user.length<=3)
					  {
						 jQuery(".erroMessag").html("用户名大于3位");				 
						  return false;
					  } 
					  if(pwd=="")
					{
						jQuery(".erroMessag").html("请输入密码");
						return false;
					}
					 if(vCode=="")
					{
						 jQuery(".erroMessag").html("请输入验证码");
						return false;
					}
					
					
				   jQuery.ajax({ url: "ajax/ajax.userlogin.php"
						  ,type: 'POST'
						  , context: "application/json;utf-8"
						  ,cache: false
						  ,data: { "user": user,"pwd": pwd,"vCode":vCode} 
						  , success: function(msg){    
						//alert(msg);
								 var msgText = msg; 
								  if(msgText.indexOf("ok")==-1)
								  {
									  jQuery(".erroMessag").html(msgText);
									   return false;
								  }
								  else
								  {
									  alert("登录成功!")
									  window.location.href="useragent.php";
									  return true;
								  }
						               
								}
			});  
		 return false;
}

