<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "phpmailer/src/Exception.php";
require "phpmailer/src/PHPMailer.php";
require "phpmailer/src/SMTP.php";

try {
  if (isset($_POST["send"])) {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'reymartdellavaapril102023@gmail.com';
    $mail->Password = 'pamtqxnbearmjmpn';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $_POST['message'] = "<h3 style='font-weight:bolder;'>" . $_POST['subject'] . "</h3>" . "\n" . htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');
    $mail->setFrom('reymartdellavaapril102023@gmail.com');
    $mail->addAddress('reymartdellavaapril102023@gmail.com');
    $mail->isHTML(true);
    $mail->Subject = "You have a new inquiry from " . htmlspecialchars($_POST['email'], ENT_QUOTES, 'UTF-8') . ".";
    $mail->Body = $_POST["message"];
    $mail->send();
    echo "<script>alert('message sent'); document.location.href='index.php'</script>";
  }
} catch (Exception $e) {
  echo "<script>alert('not sent: " . $e->getMessage() . "'); document.location.href='index.php'</script>";
}
