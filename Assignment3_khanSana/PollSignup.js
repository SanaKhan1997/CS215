function SignupForm(event)
{
    
    var email_var = document.forms.SignUp.email.value;
    var user_var = document.forms.SignUp.user.value;
    var img_var = document.forms.SignUp.img.files[0];
    var pwd_var = document.forms.SignUp.pwd.value;
    var cpwd_var = document.forms.SignUp.cpwd.value;
    
    var condition = true;
    
    ResetForm();
   
    
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var pswd_v = /^(?!.* )(?=.*?[#?!@$%^&*-])|(?=.*?[0-9]).{8,}$/;
    var uname_v = /^[a-zA-Z\^d\^s]*$/;
    
    if (email_var == null || email_var ==""){
        condition = false;
        document.getElementById("email_msg").innerHTML = "Email is empty \n";
        
    }
    else if(email_v.test(email_var)==false){
        condition = false;
        document.getElementById("email_msg").innerHTML = "Invalid Email(format allowd: sana@uregina.ca) \n";
    }
    
    if(user_var == null || user_var == ""){
        condition = false;
        document.getElementById("uname_msg").innerHTML="Username empty \n";
    }
    else if(uname_v.test(user_var)==false){
        condition = false;
        document.getElementById("uname_msg").innerHTML="Invalid username \n";
    }
    
    if(pwd_var == null || pwd_var == ""){
        condition == false;
        document.getElementById("pswd_msg").innerHTML = "Password empty \n";
    }
    else if(pswd_v.test(pwd_var)==false){
        condition = false;
        document.getElementById("pswd_msg").innerHTML = "Invalid Password(8 characters long, atleast one non letter) \n";
    }
    
    if (cpwd_var == null || cpwd_var == ""){
        condition = false;
        document.getElementById("cpswd_msg").innerHTML = "Enter confirm password \n";
    }
    else if(cpwd_var != pwd_var){
        condition = false;
        document.getElementById("cpswd_msg").innerHTML = "Passwords don't match \n";
    }
    
    if(img_var==null || img_var==""){
        condition = false;
        document.getElementById("image_msg").innerHTML = "Image not selected(Note: files allowed jpg, gif, png) \n";
    }
    
    
    if(condition== true){
        ResetForm();
        alert("Sigup Successful");
        
    }
}

function ResetForm()
{                  
    document.getElementById("email_msg").innerHTML="";
    document.getElementById("uname_msg").innerHTML = "";
    document.getElementById("image_msg").innerHTML = "";
    document.getElementById("pswd_msg").innerHTML="";
    document.getElementById("cpswd_msg").innerHTML = "";
}
