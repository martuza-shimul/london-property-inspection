<?php
// Check for empty fields
if(empty($_POST['name'])  		   ||
   empty($_POST['email'])	      ||
   empty($_POST['phone']) 		   ||
   empty($_POST['postcode']) 		||
   
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Please fill up the form Properly, Maybe you have missed something!";
	return false;
   }

 

$service_name = $_POST['service'];
$service_sub = $_POST['service-sub'];
$name= $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$postcode = $_POST['postcode'];


	
// Create the email and send the message

$to = 'tripkeys@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your London Property inspection website contact form .\n\n"."Here are the details:\n\ Name: $name\n\n Postcode: $postcode \n\n Phone: $phone\n\nEmail: $email\n  \n Service Name: $service_name \n Items: $service_sub" ;

// if(!empty($new_path)){
//   "<a href=" .new_$path. ">Check here</a>"
// }else{
//     $new_path = "No files Uploaded";
// };
$headers = "From: noreply@handyman-london.co.uk\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);

// echo "<h4>The details have been sent and a member of staff will be in touch shortly!</h4>";

header("Location: ../../thank-you.html");
return true;	

?>