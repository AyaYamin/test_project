
<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Headers: token, Content-Type');


$db = new mysqli("localhost", "root", "", "project_new");
if (!$db) die("database connection error");

$servername = "localhost";
$username = "root";
$password = "";


$conn = new mysqli($servername, $username, $password, "project_new");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Connected successfully";
}


$payload = file_get_contents('php://input');
$input = json_decode($payload, true);


$lev = $input['level'];
$sub = $input['subject'];
$sem = $input['sel_s'];
$type= $input['sel_t'];
$max=$input['max'];
$min = $input['min'];
$date = $input['date'];





$sql = "INSERT INTO Exam(level,subject,semester, max,min,type,date ) VALUES ('$lev','$sub','$sem','$max','$min','$type','$date')";


$result = $conn->query($sql);

echo "<br>";
echo $sql;
if(mysqli_query($conn, $sql)){
    echo "<br>";
    echo "Records added successfully.";
    echo "<br>";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
    echo "<br>";
}


?>