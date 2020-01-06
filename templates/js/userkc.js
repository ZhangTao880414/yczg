function SubmitTYSel()
 {
		var j=0;
		var b=[];
		var sl_List =document.getElementsByName("slname[]");  
		var xl_List =document.getElementsByName("xhname[]");  
		var pp_List =document.getElementsByName("ppname[]");  
		var pj_List =document.getElementsByName("pjname[]");  
		var box_List =document.getElementsByName("boxname[]");  
	    for(i=0;i<sl_List.length;i++){  
          if(sl_List[i].value!=''&&sl_List[i].value!='0')
		  {
			  b[j] =[xl_List[i].value,pp_List[i].value,sl_List[i].value,pj_List[i].value,box_List[i].value];
			  j=j+1;
		  };   
       }  
	   if(j==0)
	   {
		   alert("定货数量不能为空");
		   return;
		   }
	jQuery.ajax(
			{ url: "ajax/ajax.userkc.php"
			  ,type: 'POST'
			  , context: "application/json;utf-8"
			  ,cache: false
			  ,data: {"b":b} 
			  , success: function(msg){
				//alert(msg);
				 if(msg=="ok")
				 { 
				    alert("添加成功");
					window.location.href="userkc.php?xl=6203";
				 }
				else
				 {
					 alert(msg);
					 return;
				 }
			 }
	});
}

 $(function(){
   $('input:button').click(function(){
     $('.numinput').val("");
    });
  })
