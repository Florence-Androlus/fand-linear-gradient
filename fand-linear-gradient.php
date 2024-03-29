<?php
/**
 * Plugin Name:       Fand Linear Gradient
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GNU v3.0
 * Text Domain:       fand-linear-gradient
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function fand_gradient_fand_gradient_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'fand_gradient_fand_gradient_block_init' );
