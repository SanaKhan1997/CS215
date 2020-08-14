function ValidLogin(event)
{

    var email = document.getElementById("email").value;
    
    var password = document.getElementById("password").value;
    
    var emailMsg = document.getElementById("emailMsg_L");
	var pswdMsg = document.getElementById("pswdMsg_L");
	
	
	emailMsg.innerHTML = "";
	pswdMsg.innerHTML = ""; 
	
    
    var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    
    var checkResult = true;
	
	if(email == null || email == "" || !emailCheck.test(email))
	{
		emailMsg.innerHTML = "Please enter valid email.";
		checkResult = false;
	}
	
	else if(pswdInput == null || pswdInput == "" || pswdInput.length < 8)
	{
		pswdMsg.innerHTML = "Password must be at least 8 characters.";
		checkResult = false;
	}
    
    if(checkResult == false)
	{
		event.preventDefault();
	}
    return checkResult;
}