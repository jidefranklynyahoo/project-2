var init = function(){
    document.getElementById("button-cancel").addEventListener('click',reset);
    document.getElementById("button-send").addEventListener("click", send)
}
var reset = function(iv){
    iv.preventDefault();
    document.getElementById("form-user").reset()
}
var send = function(iv){
    iv.preventDefault();
}
var ret = validate();

if(ret){
    document.getElementById("form-user").onsubmit();
}else{
    var err=document.querySelector('.error');
    var input =err.querySelector('input');
    err.setAttribute('data-errormsg', ` ... Missing ${input.placeholder}`);}
}
 var validate = function(iv){
     var valid = false ;
     var chk = document.getElementById('input-alive');
     var select =document.getElementById('input-age');
     var first =document.getElementById('input-first');
     var last =document.getElementById('input-last');
     var email =document.getElementById('input-email');
return valid
 }
document.addEventListener('DOMcontentLoaded', init);