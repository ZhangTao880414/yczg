function SetHome(obj,url){

    try{

        obj.style.behavior='url(#default#homepage)';

       obj.setHomePage(url);

   }catch(e){

       if(window.netscape){

          try{

              netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");

         }catch(e){

              alert("��Ǹ���˲�����������ܾ���\n\n�����������ַ�����롰about:config�����س�����ݤFf덒(��k����x�ȾG����S)incipal_support]����Ϊ'true'");

          }

       }else{

        alert("��Ǹ������ʹ�õ�������޷���ɴ˲�����\n\n����Ҫ�ֶ�����"+url+"������Ϊ��ҳ��");

       }

  }

}