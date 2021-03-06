<?php
/**
 * @copyright    Copyright 2010-2013, The Titon Project
 * @license        http://opensource.org/licenses/bsd-license.php
 * @link        http://titon.io
 */

use Titon\Common\Registry;
use Titon\G11n\G11n;
use Titon\G11n\Locale;
use Titon\G11n\Translator\MessageTranslator;
use Titon\Io\Reader\PhpReader;
use Titon\Cache\Storage\MemoryStorage;

/** @type \Titon\G11n\G11n $g11n */
$g11n = $app->get('g11n');

// Include english
$g11n->addLocale(new Locale('en'));

// Set a default translator
$g11n->setTranslator(new MessageTranslator())
    ->setReader(new PhpReader())
    ->setStorage($app->get('cache')->getStorage('default'));

// Fallback as english
$g11n->setFallback('en');

// Initialize
$g11n->initialize();