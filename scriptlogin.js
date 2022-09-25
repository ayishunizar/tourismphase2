var email= document.getElementById("exampleInputEmail1");
var password= document.getElementById("exampleInputPassword1");
var emailerror= document.getElementById("emailerror");
var passworderror=document.getElementById("passworderror");

function validate(){


    let regex = /^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let strpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var medpassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/; 

    if(regex.test(email.value)){
        emailerror.innerHTML="valid";
        emailerror.style.color="green"
        email.style.border="2px solid green"
        
    }
    else{
        emailerror.innerHTML="invalid"
        emailerror.style.color="red"
        email.style.border="2px solid red"
        return false;
    }
    if(strpassword.test(password.value)){
        passworderror.innerHTML="valid ";
        passworderror.style.color="green"
        password.style.border="2px solid green"
        
    }else if(medpassword.test(password.value)){
        passworderror.innerHTML="valid";
        passworderror.style.color="orange"
        password.style.border="2px solid orange"
    }
    else{
        passworderror.innerHTML="*Make sure it contain at least 8 characters including numbers,uppercase and lowercase"
        passworderror.style.color="red"
        password.style.border="2px solid red"
        return false;
    }


}

