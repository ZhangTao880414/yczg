function SetHome(obj,url){

    try{

        obj.style.behavior='url(#default#homepage)';

       obj.setHomePage(url);

   }catch(e){

       if(window.netscape){

          try{

              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

         }catch(e){

              alert("±§Ç¸£¬´Ë²Ù×÷±»ä¯ÀÀÆ÷¾Ü¾ø£¡\n\nÇëÔÚä¯ÀÀÆ÷µØÖ·À¸ÊäÈë¡°about:config¡±²¢»Ø³µÈû¸šİ¤Ffë’(Éök±§–xÒÈ¾Gõ­S)incipal_support]ÉèÖÃÎª'true'");

          }

       }else{

        alert("±§Ç¸£¬ÄúËùÊ¹ÓÃµÄä¯ÀÀÆ÷ÎŞ·¨Íê³É´Ë²Ù×÷¡£\n\nÄúĞèÒªÊÖ¶¯½«¡¾"+url+"¡¿ÉèÖÃÎªÊ×Ò³¡£");

       }

  }

}