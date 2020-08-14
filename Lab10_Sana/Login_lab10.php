<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<script type="text/javascript" src="login_lab10.js"></script>
</head>
<body>
<h3>Login</h3>

<form id="formLogin" action="Login_lab10.php" method="post" onsubmit="return ValidLogin();">
<input type="hidden" name="submittedL" value="1"/>
<table>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>Email</td>
<td>Password</td>
</tr>
<tr>
<td id="emailMsg_L"></td>
<td id="pswdMsg_L"></td>
</tr>
<tr>
<td><input type="email" id="email" name="email" value=""/></td>
<td><input type="password" id="password" name="password"/></td>
<td><input type="submit" value="Login"/></td>
</tr>

<tr>
<td>No account? <a href="signup_lab10.php">Sign up</a></td>
</tr>
</table>
</form>

<script type="text/javascript" src="loginr_lab10.js"></script>
</body>
</html>
<?php

$validate = true;
$reg_Email = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";
$reg_Pswd = "/^(\S*)?\d+(\S*)?$/";

$email = "";
$error = "";

if (isset($_POST["submittedL"]) && $_POST["submittedL"])
{
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    
    $db = new mysqli("localhost", "khan269s", "sana26", "khan269s");
    if ($db->connect_error)
    {
        die ("Connection failed: " . $db->connect_error);
    }

    //add code here to select * from table User where email = '$email' AND password = '$password'
    $q = "SELECT * FROM user_Lab10 WHERE user_email = '$email' AND user_password = '$password'";
       
    $r = $db->query($q);
    $row = $r->fetch_assoc();
    if($email != $row["user_email"] && $password != $row["user_password"])
    {
        $validate = false;
    }
    else
    {
        
    
    
    if($validate == true)
    {

        session_start();
        $_SESSION["user_email"] = $row["user_email"];
        header("Location: index_lab10.php");
        $db->close();
        exit();
    }
    else 
    {
        $error = "The email/password combination was incorrect. Login failed.";
        echo $error;
        $db->close();
    }
    }
}

?>