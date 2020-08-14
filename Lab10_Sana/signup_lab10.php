<!DOCTYPE html>
<html>
<head>
<title>Sign Up</title>
<script type="text/javascript" src="signup_lab10.js"></script>
</head>
<body>
<h3>Sign up </h3>
<form id="formSignup" action="signup_lab10.php" method="POST" onsubmit="return ValidSignup();">
<input type="hidden" name="submitted" value="1"/>
<table>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td id="email_S"></td>
</tr>
<tr>
<td>Email</td>
<td><input type="email" id="emailS" name="emailS" value=""/></td>
</tr>
<tr>
<td></td>
<td id="user_S"></td>
</tr>
<tr>
<td>Username</td>
<td><input type="text" id="name" name="name" value=""/></td>
</tr>
<tr>
<td></td>
<td id="pswd_S"></td>
</tr>
<tr>
<td>Password</td>
<td><input type="password" id="passwordS" name="passwordS"/></td>
</tr>

<tr>
<td></td>
<td id="date_S"></td>
</tr>
<tr>
<td>Birthday</td>
<td><input type="text" id="dateS" name="dateS" value="mm/dd/yyyy"/></td>
</tr>

<tr>
<td></td>
<td><input type="submit" value="Sign up"/><input type="reset" value="Reset"/></td>

</tr>
</table>
</form>
<script type="text/javascript" src="signup_lab10-r.js"></script>
</body>
</html>

<?php
$validate = true;
$error = "";
$reg_Email = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
$reg_Pswd = "/^(\S*)?\d+(\S*)?$/";
$reg_Bday = "/^\d{1,2}\/\d{1,2}\/\d{4}$/";
$email = "";
$date = "mm/dd/yyyy";
$username = "";

if (isset($_POST["submitted"]) && $_POST["submitted"])
{

    $email = $_POST["emailS"];
    $password = $_POST["passwordS"];
    $date = $_POST["dateS"];
    $username = $_POST["name"];
    
    $conn = new mysqli("localhost","khan269s","sana26","khan269s");

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    
    if($validate == true)
    {
        
        $sql = "INSERT INTO user_Lab10 (user_email, user_password, user_name, user_DofB ) VALUES('$email','$password','$username','$date')";
        
        if ($conn->query($sql) === TRUE)
        {
            header("Location: logout_lab10.php");
            
            header("Location: Login_lab10.php");
            
            $db->close();
            exit();
        }
    }
    else
    {
        $error = "email address is not available. Signup failed.";
        $db->close();
    }
}

?>