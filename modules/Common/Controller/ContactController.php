<?php

namespace Common\Controller;

class ContactController extends CommonController {

    /**
     * Contact form.
     */
    public function index() {
        $this->getView()->setVariable('pageTitle', 'Contact');
    }

}