<?php
/**
 * Plugin Name:       Miles WP Web Components
 * Description:       A plugin to include web components and make them available in editor blocks.
 * Requires at least: 6.1
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            Miles
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       miles-editor-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_miles_editor_blocks_block_init(): void
{
	register_block_type( __DIR__ . '/build/miles-banner' );
	register_block_type( __DIR__ . '/build/miles-business-card' );
	register_block_type( __DIR__ . '/build/miles-button-anchor' );
	register_block_type( __DIR__ . '/build/miles-contact-card' );
	register_block_type( __DIR__ . '/build/miles-image-block' );
	register_block_type( __DIR__ . '/build/miles-info-block' );
	register_block_type( __DIR__ . '/build/miles-office-banner' );

}
add_action( 'init', 'create_block_miles_editor_blocks_block_init' );
