<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = $_GET['q'];

$con = mysqli_connect("localhost","khan269s","sana26","khan269s");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}


$sql="SELECT * FROM user_Lab10 WHERE user_name LIKE '$q%'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Username</th>
<th>Email</th>
<th>Birthday</th>
<th>password</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['user_name'] . "</td>";
    echo "<td>" . $row['user_email'] . "</td>";
    echo "<td>" . $row['user_DofB'] . "</td>";
    echo "<td>" . $row['user_password'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html>