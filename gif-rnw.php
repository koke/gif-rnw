<?php

/*
 * Plugin Name: GIF RNW
 * Description: A GIF block for Gutenberg, built with React Native Web
 * Author: koke
 * Version: 1.0
 * Author URI: https://github.com/koke/gif-rnw
 * License: GPL2+
 */

namespace GIF_RNW;

function register_block() {
    wp_register_script(
        'gif-rnw',
        plugins_url( '/build/index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element' )
    );
 
    register_block_type( 'koke/gif-rnw', array(
        'editor_script' => 'gif-rnw',
    ) );
}

add_action( 'init', '\GIF_RNW\register_block' );