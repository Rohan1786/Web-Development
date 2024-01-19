<?php

$name=$_POST['name'];
$eamil=$_POST['email'];


$conn=new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('connection failed :',$conn->connect_error);

}
else{
    $stml=$conn->prepare('insertion into registerion('name','email')values(?,?)");
$stml->bind_param("ssss",$name,$email);
}
?>