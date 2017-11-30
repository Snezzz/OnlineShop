function test(form){
    var rightemail="s@mail.ru";
    var rightPassword=1;
    var email=document.getElementById('mail').value;
    var password=document.getElementById('password').value;
    var full= document.getElementById("full");
    if((password==rightPassword)&&(email==rightemail)){
        alert("Вы вошли в систему");
        full.innerHTML =  "Добро пожаловать,"+form.email.value+"<hr> <a href='index.html'>Выйти</a>";
        document.body.style.backgroundColor ='white';
        return false;
    }
    else if ((email=="")||(password=="")) {
        alert("введите данные");
    }
    else if((password!=rightPassword)&&(email!=rightemail)) {
        alert("false");
        document.body.style.backgroundColor = 'pink';
    }

}
function func() {
    var n = document.getElementById("f");
    n.innerHTML = 'hello';
}
function showContent(link){
    var n = document.getElementById("f");
    n.innerHTML = 'hello';
    var cont = document.getElementById('content');
    var load = document.getElementById('load');
    cont.innerHTML=load.innerHTML;
    var http= createRequestObject();
    if(http){
        http.open('get',link);
        http.onreadystatechange=function(){
            if(http.readyState==4)
            {
                cont.innerHTML=http.responseText;
            }
        }
        http.send(null);
    }
    else{
        document.loc=link;

    }
}
function createRequestObject() {
    try{
        return new XMLHttpRequest()
    }
    catch(e)
    {
        try{
            return new ActiveXObject('Msxml2.XMLHTTP')
        }
    }
}
function request(){
    var xmlDoc = new XMLHttpRequest();
    xmlDoc.async = false;
    xmlDoc.validateOnParse = false;
    xmlDoc.load ("/src/xmlexample2.xml");
}
