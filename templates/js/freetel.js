// JavaScript Document

function freeTel(signID){ 	 
		var url = "http://vip.bearing.cn/freeTel.php?signID="+signID;
		ymPrompt.win({message:url,height:250,width:425,title:"��ӭʹ�ð����Ƽ����ͨ�����ܣ�",iframe:true,showMask:false});
  }; 
  
 /* function getTop(e)
{
	var offset=e.offsetTop;
	if(e.offsetParent!=null)
	{
		offset+=getTop(e.offsetParent);
	}
	return offset;
}
function getLeft(e)
{
	var offset=e.offsetLeft;
	if(e.offsetParent!=null)
	{
		offset+=getLeft(e.offsetParent);
	}
	return offset;
}
function gShopTip(obj)
{
if(document.getElementById("WebCall_ToolTip") == null)
{
var objTipDiv = document.createElement("div");
objTipDiv.innerHTML = "<div id=\"WebCall_ToolTip\" style=\"display:none;width: 222px; height: 82px;font-size: 12px; vertical-align: middle; color: #46516f; padding-top: 8px;background:url(images/tel.png) no-repeat; text-align: center;\"><\/div>";
document.body.appendChild(objTipDiv);
}
document.getElementById("WebCall_ToolTip").style.display = "block";
document.getElementById("WebCall_ToolTip").style.position = "absolute";
document.getElementById("WebCall_ToolTip").style.left = getLeft(obj)+"px";
document.getElementById("WebCall_ToolTip").style.top = getTop(obj) - 82+"px";
cb_clear();
}
function ghideShowTip()
{
document.getElementById("WebCall_ToolTip").style.display = "none";
if (document.cb.cb_num.value == "") document.cb.cb_num.value=msg1;
} */

function CheckPhone(Phone) {
var isMobile=/^(?:1\d)\d{6}(\d{3}|\*{3})$/;   
var isPhone=/^((0\d{2,3}))?(\d{7,8})((\d{3,}))?$/;
 if(isPhone.test(Phone) || isMobile.test(Phone)) return true;
 else {	
		ymPrompt.alert({title:'��Ϣ��ʾ',message:'��������ȷ�ĵ绰��ʽ��',showMask:false });
		return false;
 		}
 
}
  
function Telphone(){
	var frm = document.freeTel; 
	var Tel = frm.Tel.value;
	if(frm.Tel.value == "")
	{
		ymPrompt.alert({title:'��Ϣ��ʾ',message:'��ϵ�绰����Ϊ�գ�',showMask:false});
		frm.Tel.focus();
		return false;
	}else{
			if (CheckPhone(Tel)==false)
			{
				$("#Tel").focus();
		        return false;
			}
		}
}