<?php

class AboutController extends Zend_Controller_Action
{

    public function init()
    {
        /* Initialize action controller here */
    }

    public function indexAction()
    {
    	$request   = $this->getRequest();
    	if($request->isXmlHttpRequest()) {
    		$this->_helper->layout()->disableLayout();
    	}
    }


}