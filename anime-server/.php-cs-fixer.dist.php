<?php
/*
 * This document has been generated with
 * https://mlocati.github.io/php-cs-fixer-configurator/#version:3.1.0|configurator
 * you can change this configuration by importing this file.
 */
$config = new PhpCsFixer\Config();
return $config
        ->setRiskyAllowed(true)
    ->setRules([
        '@PSR12' => true, // ここにルール追記
    ])
    ->setFinder(PhpCsFixer\Finder::create()
        ->exclude([ // 除外ファイル
              'vendor'
        ])
        ->in(__DIR__)
    )
;