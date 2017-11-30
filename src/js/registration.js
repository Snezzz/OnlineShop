function registration() {

    //считали данные с полей
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("new_password").value;
    var password2 = document.getElementById("new_password2").value;
    /*if (password2 != password) {
     alert("Пароли не сходяться. Пожалуйста, проверьте правильность ввода")
     $.ajax({
     url: "registration.html",
     cache: false,
     success: function (html) {
     $("#full").html(html);
     }
     });

     }*/

    var obj = {
        name: firstName,
        lastName: lastName,
        email: address,
        password: password
    };
    if ((obj.name != "") && (obj.lastName != "") && (obj.email != "") && (obj.password  != "")) {
        var json = JSON.stringify(obj); //формируем json
        //alert(json);
        localStorage.setItem(obj.email, json); //запихиваем его в storage
        alert('вы зареганы');
        $("#form").toggle();
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("address").value="";
        document.getElementById("new_password").value="";
        document.getElementById("new_password2").value="";

    }
    else{
        alert("Заполните все поля!");

    }
}
