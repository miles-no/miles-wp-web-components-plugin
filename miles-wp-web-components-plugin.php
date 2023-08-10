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
function create_block_miles_editor_blocks_block_init(): void {
	register_block_type( __DIR__ . '/build/miles-banner' );
	register_block_type( __DIR__ . '/build/miles-business-card' );
	register_block_type( __DIR__ . '/build/miles-button-anchor' );
	register_block_type( __DIR__ . '/build/miles-contact-card' );
	register_block_type( __DIR__ . '/build/miles-image-block' );
	register_block_type( __DIR__ . '/build/miles-info-block' );
	register_block_type( __DIR__ . '/build/miles-office-banner' );

}

add_action( 'init', 'create_block_miles_editor_blocks_block_init' );


wp_enqueue_script( 'miles_2020-wc',
	get_template_directory_uri() . '/js/miles-wc.es.js',
	array(),
	filemtime( get_template_directory() . '/js/miles-wc.es.js' ), true
);


// Add City menu image

add_filter( 'wp_nav_menu_objects', 'my_wp_nav_menu_objects', 10, 2 );

function my_wp_nav_menu_objects( $items, $args ) {

	// loop
	foreach ( $items as &$item ) {

		// vars
		$image = get_field( 'image', $item );
		$size  = 'feature-image';
		// append icon
		if ( $image ) {
			$item->title .= '<figure class="city-menu-image">' . wp_get_attachment_image( $image, $size ) . '</figure>';
		}
	}

	// return
	return $items;

}

add_filter( 'render_block', 'miles_wrap_gallery', 10, 3 );

function miles_wrap_gallery( $block_content, $block ) {

	if ( "core/gallery" !== $block['blockName'] ) {
		return $block_content;
	}

	if ( str_contains( $block['attrs']['className'], 'miles-image-slider' ) ) {
		$output = '<miles-image-slider inview="3" autoplay="true">';
		$output .= $block_content;
		$output .= '</miles-image-slider>';

		return $output;
	} else {
		return $block_content;
	}
}


add_filter( 'render_block', 'miles_fagblogg_teaser', 10, 3 );

function miles_fagblogg_teaser( $block_content, $block ) {

	if ( "core/latest-posts" !== $block['blockName'] ) {
		return $block_content;
	}

	if ( str_contains( $block['attrs']['className'], 'miles-fagblogg-teaser' ) ) {
		$output = '<miles-fagblogg-teaser>';
		$output .= $block_content;
		$output .= '</miles-fagblogg-teaser>';

		return $output;
	} else {
		return $block_content;
	}
}

add_filter( 'render_block', 'miles_overlap_block', 10, 3 );

function miles_overlap_block( $block_content, $block ) {
	if ( ! isset( $block['attrs']['className'] ) ) {
		return $block_content;
	} elseif ( str_contains( $block['attrs']['className'], 'miles-overlap-block' ) ) {
		$output = '<miles-overlap-block>';
		$output .= $block_content;
		$output .= '</miles-overlap-block>';

		return $output;
	} elseif ( str_contains( $block['attrs']['className'], 'office-banner' ) ) {
		$output = '<miles-office-banner>';
		$output .= $block_content;
		$output .= '</miles-office-banner>';

		return $output;
	} else {
		return $block_content;
	}
}
