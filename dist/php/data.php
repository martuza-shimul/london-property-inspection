<?php
// Check for empty fields
if(empty($_POST['address'])  		||
   empty($_POST['certificate_name'])	||
   empty($_POST['invoice_name'])	||
   empty($_POST['email'])	||
   empty($_POST['phone']) 		||
   empty($_POST['postcode'])	||
   empty($_POST['message']) 		||
   
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "Please fill up the form Properly, Maybe you have missed something!";
	return false;
   }

   // File upload functionality
// $new_path = "No files Uploaded";
// $counter = 0;
// if(!empty($_FILES['uploaded_file']))
//   {
//     $path = "uploads/";
//     $path = $path . basename( $_FILES['uploaded_file']['name']);

//     if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $path)) {
//       $new_path = "https://handymanco.co.uk/dist/php/".$path;
  
  
//     } else{
//         echo "There was an error uploading the file, please try again!";
//     }
//   }

$address = $_POST['address'];
$certificate_name = $_POST['certificate-name'];
$invoice_name = $_POST['invoice-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


$service_name = $_POST['service'];
$service_sub = $_POST['service-sub'];
$congestion = $_POST['congestion'];
$date = $_POST['date'];
$timeslot = $_POST['timeslot'];
$payment_method = $_POST['payment'];



// if(!empty($second)) {

//    foreach($_POST['lang'] as $value){
//        echo "value : ".$value.'<br/>';
//    }

// }



	
// Create the email and send the message

$to = 'tripkeys@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Appointment for Property Inspection";

$email_body = "You have received a new message from your Property Inspection website .\n\n"."Here are the details:\n\nPhone: $phone\nEmail: $email\n Message: $message

\n\n\n Here is the service Request: \n  Service Name: $service_name\n Number of items:$service_sub \n Congestion Zone: $congestion \n Address: $address \n Date: $date\n Time: $timeslot \n Payment Method: $payment_method \n Name to go on Certificate: $certificate_name \n Name to go on Invoice: $invoice_name

" ;



$headers = "From: noreply@handymanco.uk\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.

$headers .= "Reply-To: $email";	
mail($to,$email_subject,$email_body,$headers);

// echo "<h4>The details have been sent and a member of staff will be in touch shortly!</h4>";

header("Location: ../../thank-you.html");
return true;	

?>