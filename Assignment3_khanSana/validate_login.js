function loginForm(event){
    
    var email_var =document.forms.logIn.email.value;
    var pswd_var = document.forms.logIn.pswd.value;
    
    ResetForm();

	var condition = true;
    
    
    
    
    var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var pswd_v = /^(?!.* ).{8,}$/;
	
    
    if(email_var == null || email_var == ""){
        condition = false;
        document.getElementById("email_msg").innerHTML ="Email is empty \n";
        
    }
    else if (email_v.test(email_var)== false){
        condition = false;
        document.getElementById("email_msg").innerHTML ="Invalid email format(allowed format: sana@uregina.ca) \n";
        
    }
    
    if (pswd_var == null || pswd_var == ""){
       condition = false;
        document.getElementById("pswd_msg").innerHTML ="Password is empty \n";
        
        
    }
    else if (pswd_v.test(pswd_var)==false){
        condition = false;
        document.getElementById("pswd_msg").innerHTML = "Invalid Password(atleast 8 characters, no spaces) \n";
    }
    
    if(condition== true){ window.open("http://www2.cs.uregina.ca/~khan269s/Class_Assignment/PollManagement.html");
        
    }
    
}

function ResetForm(){
    document.getElementById("email_msg").innerHTML="";
    document.getElementById("pswd_msg").innerHTML="";
}

function countChars(obj){
    var maxLength = 100;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain <= 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' characters used/'+charRemain+' characters remaining';
    }
}
