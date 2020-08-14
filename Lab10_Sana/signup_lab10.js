function ValidSignup(event)
{
	var emailInput = document.getElementById("emailS").value;
	var pswdInput = document.getElementById("passwordS").value;
	var BdayInput = document.getElementById("dateS").value;
	
	var emailMsg = document.getElementById("email_S");
	var pswdMsg = document.getElementById("pswd_S");
	var BdayMsg = document.getElementById("date_S");
	
	emailMsg.innerHTML = "";
	pswdMsg.innerHTML = ""; 
	BdayMsg.innerHTML = "";
	
	var emailCheck = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var BdayCheck = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
	
	var checkResult = true;
	
	if(emailInput == null || emailInput == "" || !emailCheck.test(emailInput))
	{
		emailMsg.innerHTML = "Please enter valid email.";
		checkResult = false;
	}
	
	else if(pswdInput == null || pswdInput == "" || pswdInput.length < 8)
	{
		pswdMsg.innerHTML = "Password must be at least 8 characters.";
		checkResult = false;
	}

		
	if(!BdayCheck.test(BdayInput))
	{
		BdayMsg.innerHTML = "Invalid date."
		checkResult = false;
	}
	
	if(checkResult == false)
	{
		event.preventDefault();
	}
    return checkResult;
}