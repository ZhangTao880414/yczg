function CheckMail(mail) {
 var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 if (filter.test(mail)) return true;
 else {
	 jQuery(".erroMessag2").html("��������ȷ���ʼ���ʽ");
 //alert('��������ȷ���ʼ���ʽ��');
 return false;
 }
}

function CheckPhone(Phone) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
var isPhone=/^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
 if(isPhone.test(Phone) || isMobile.test(Phone)) return true;
 else {	
        //alert('��������ȷ�ĵ绰��ʽ��');
		jQuery(".erroMessag9").html("��������ȷ�ĵ绰��ʽ");
		return false;
 		}
 
}
function CheckMobile(Mobile) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
if(isMobile.test(Mobile)) return true;
	else {
	// alert('��������ȷ���ֻ���ʽ��');
	 jQuery(".erroMessag9").html("��������ȷ���ֻ���ʽ");
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
			 jQuery(".erroMessag1").html("�������û���");
		 bj=0;
				       //  return false;
		}
					if(username.length<=3 || username.length>18)
					  {
						 jQuery(".erroMessag1").html("�û�����3-18λ֮��");				 
						//  return false;
						bj=0;
					  } 
					  if(!(/^[A-Za-z0-9]+$/.test(username)))
						{
							jQuery(".erroMessag1").html("�û���ֻ�������ֻ���ĸ���");		
							bj=0;
						}
					
					if(pwd=="")
					{
						jQuery(".erroMessag3").html("����������");
						//return false;
						bj=0;
					}
					if(pwd2!=pwd)
					{
						jQuery(".erroMessag13").html("�����������벻һ��");
						//return false;
						bj=0;
					}
					if(unitname=="")
					{
						jQuery(".erroMessag5").html("�����빫˾����");
						//return false;
						bj=0;
					}
					if(tel=="")
				  {
					 jQuery(".erroMessag9").html("��������ϵ�绰");
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
						 jQuery(".erroMessag2").html("������email");
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
						 jQuery(".erroMessag12").html("��������֤��");
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
								      alert("ע��ʧ��");
									   }
									    if(msgText==2){
								      alert("���û��ѱ�ע��");
									   }
									    if(msgText==3){
								      alert("��֤�����");
									   }
                                return false;        
								}
								else
								{
									alert("ע��ɹ�");
									window.location.href="usersucc.php";
									return true ;
									}
						  }
			});  
				}

		
		  return false;
}
