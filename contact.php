<?php

$sendTo = "mdarifulhouqe@gmail.com";//don't forget to change it

$action = $_POST['action'];

    $name = $_POST['form'][0]['name'];
    $email = $_POST['form'][0]['email'];
    $subject = $_POST['form'][0]['subject'];
    $message = $_POST['form'][0]['message'];

  if ($name == "") {
    echo "<p class=\"error\">Please fill up your name</p>";
        
   }
   else if ($email == "") {
    echo "<p class=\"error\">Please fill up your email</p>";
        
   }
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "<p class=\"error\">Invalid email format</p>";
    }
    else if ($subject == "") {
    echo "<p class=\"error\">Please fill the subject</p>";
    }
   else if ($message == "") {
    echo "<p class=\"error\">Please fill up your message</p>";
        
   }
   else if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
    echo "<p class=\"error\">Only letters and white space allowed in name</p>";
    }
   
        else
    {
        $header = 'From: ' . $name . '<' . $email . ">\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        mail($sendTo, $subject, $message, $header);
        $sent = mail($sendTo, $subject, $message, $header);

        if ($sent) {
            echo "<p class=\"success\">Message sent succesfully.</p>";
        } else {
            echo "<p class=\"error\">There was problem while sending E-Mail.</p>";

        }
    }

?>
