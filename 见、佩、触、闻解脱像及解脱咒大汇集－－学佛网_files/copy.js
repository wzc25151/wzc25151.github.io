document.body.oncopy=new Function("setTimeout(addData,300);"); 
document.oncopy=new Function("setTimeout(addData,300);"); 
function addData() 
{ 
var d = window.clipboardData.getData('Text');
window.clipboardData.setData('Text',d+"(ת��ѧ������"+document.location.href+")"); 
}
function copyUrl(url){
var content='';
window.clipboardData.setData("Text",document.title+"\r\nԭ����ַ��"+document.location.href);
alert("ժ��ѧ����");
}








