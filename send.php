<?php
$name =  $_POST['name'];
$last_name =  $_POST['last_name'];
$phone = $_POST['phone'];
$email =  $_POST['email'];
$file = fopen("file.txt","at");
$data = file_get_contents("file.txt");
$search = explode("\r\n", $data);
fwrite($file,"Имя: $name \tФамилия: $last_name \tНомер телефона: $phone \tEmail: $email \n");
fclose($file);