document.body.oncopy=new Function("setTimeout(addData,300);"); 
document.oncopy=new Function("setTimeout(addData,300);"); 
function addData() 
{ 
var d = window.clipboardData.getData('Text');
window.clipboardData.setData('Text',d+"(转自学佛网："+document.location.href+")"); 
}
function copyUrl(url){
var content='';
window.clipboardData.setData("Text",document.title+"\r\n原文网址："+document.location.href);
alert("摘自学佛网");
}








