<?php

$int= 86400;
$rNum= rand(0 , 15000);
setcookie("user","Udemy".$rNum,time()+$int);
if(isset($_COOKIE["user"])){
    echo $_COOKIE["user"];
}
else{
    echo 'No cookie';
}





?>