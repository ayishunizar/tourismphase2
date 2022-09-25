var username     = document.getElementById("exampleInputusername1")
var email        = document.getElementById("exampleInputEmail1");
var password     = document.getElementById("exampleInputPassword1")
var phone        = document.getElementById("exampleInputphonenumber");
var usernameerror= document.getElementById("usernameerror");
var emailerror   = document.getElementById("emailerror");
var passworderror= document.getElementById("passworderror");
var phoneerror   = document.getElementById("phoneerror");

function validate(){
    let regex = /^([A-Za-z0-9\-.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let strpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var medpassword = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    let phn=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    if(username.value==""){
        usernameerror.innerHTML="Fields cannot be empty";
        usernameerror.style.color="red";
        username.style.border="2px solid red";
   
    }
    else{
        usernameerror.innerHTML="field ok";
        usernameerror.style.color="green";
        username.style.border=" 2px solid green";
    }

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
        passworderror.innerHTML="valid - strong password  ";
        passworderror.style.color="green"
        password.style.border="2px solid green"
        
    }else if(medpassword.test(password.value)){
        passworderror.innerHTML="valid  - medium password";
        passworderror.style.color="orange"
        password.style.border="2px solid orange"
    }
    else{
        passworderror.innerHTML="*Make sure it contain at least 8 characters including numbers,uppercase and lowercase"
        passworderror.style.color="red"
        password.style.border="2px solid red"
        return false;
    }
    if(phn.test(phone.value)){
        phoneerror.innerHTML="valid";
        phoneerror.style.color="green"
        phone.style.border="2px solid green"
        
    }
    else{
        phoneerror.innerHTML="invalid"
        phoneerror.style.color="red"
        phone.style.border="2px solid red"
        return false;
    }
}