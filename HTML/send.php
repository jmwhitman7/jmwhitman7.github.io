<?php

$usermail = $_POST['email'];
$username = $_POST['name'];
$content  = $_POST['message'];

$address = "__YOUR_EMAIL__";

$subject  = "__SUBJECT__";

$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/plain; Charset=UTF-8 \r\n";

$message = "E-mail: ".$usermail."\n\nName: ".$username."\n\nMessage: ".$content."\n";

if(@mail($address, $subject, $message, $headers)) { echo "true"; } 
else { echo "false"; }

?>