<?php

/**
 * This file is the entry point of every thing ! 
 */


define('TIME_START', microtime(true));

/**
 * Now include the autoload file and let's start your app !
 */
require_once __DIR__ . "/../../vendor/autoload.php";

/**
 * Init the kernel with the root folder
 */
$kernel = new \Wigax\Kernel\Kernel(dirname(dirname(__DIR__)));

/*
 * the magic line !
 */
$kernel->start();

?>