<?php

class IndexController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	//$this->_helper->layout()->disableLayout();    

    }

    public function emailmeAction() {

    	$post = $_POST;
		$to  = 'benatti.med@gmail.com';
		switch ($post['formType']) {
			case 'contact':
				$subject = $post['name']. ' contacted you. details inside...';
				$message = '
				<html>
					<head>
						<title></title>
					</head>
					<body>' .
						$post['message']
					.'</body>
				</html>
				';

				$headers = 'From: ' . $post['name'] .' <' . $post['email'] . '>' . "\r\n";
				break;
			case 'reviews':
				$subject = 'New Review';
				$message = '
				<html>
					<head>
						<title></title>
					</head>
					<body>' .
						'Hey, <b>' . $post['name'] . '</b> wrote a review for you:<br>' .
						'"' . $post['message'] . '" .' 
					.'</body>
				</html>
				';
				$headers = 'From: ' . $post['name'] . ' <' . $post['email'] . '>' . "\r\n";
				break;
			
			default:
				# code...
				break;
		}

		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		$headers .= 'To: ComputerRepairGeekz <' . $to . '>' . "\r\n";
		

		// Envoi
		if(mail($to, $subject, $message, $headers)) {

		} else {

	    }

	    die;
    }
}


