// JavaScript Document

  function xjinfo(xl,brand,bj,id){ 	 
	    var url = "xjinfo.php?xl="+xl+"&brand="+brand+"&bj="+bj+"&memberid="+id;
		ymPrompt.win({message:url,height:438,width:700,title:"Ñ¯¼Û",iframe:true,showMask:false});
  };  
  function hcinfo(classifyid,title){ 	 
	    var url = "userhcinfo.php?classifyid="+classifyid+"&title="+title+"&url="+window.document.location;
		ymPrompt.win({message:url,height:310,width:350,title:"»Ø´«",iframe:true,showMask:false});
  };  
