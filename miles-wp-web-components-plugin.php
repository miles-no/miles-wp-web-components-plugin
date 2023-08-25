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

register_block_type( __DIR__ . '/build/miles-banner' );
/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_miles_editor_blocks_block_init(): void {
	register_block_type( __DIR__ . '/build/miles-banner' );
	register_block_type( __DIR__ . '/build/miles-info-block' );
	register_block_type( __DIR__ . '/build/miles-button-anchor' );
	register_block_type( __DIR__ . '/build/miles-business-card' );
	register_block_type( __DIR__ . '/build/miles-contact-card' );
	register_block_type( __DIR__ . '/build/miles-image-block' );
	register_block_type( __DIR__ . '/build/miles-office-banner' );

}

add_action( 'init', 'create_block_miles_editor_blocks_block_init' );


wp_enqueue_script( 'miles_2020-wc',
	#plugin_dir_url( __FILE__ ) . '/miles-wc/miles-wc.es.js',
	plugin_dir_url( __FILE__ ) . 'miles-wc-new/miles-wc.es.js',
	#get_template_directory_uri() . '/js/miles-wc.es.js',
	array(),
#filemtime( plugin_dir_url( __FILE__ ) . '/miles-wc/miles-wc.es.js' ), true
#filemtime( 'miles-wc-new.es.js' ), true
);

/** Add type attribute  */
add_filter( 'script_loader_tag', 'add_type_attribute', 10, 3 );
function add_type_attribute( $tag, $handle, $src ) {
	// if not our script, do nothing and return original $tag
	if ( 'miles_2020-wc' !== $handle ) {
		return $tag;
	}

	// change the script tag by adding type="module" and return it.
	return '<script type="module" src="' . esc_url( $src ) . '"></script>';
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

##### Miles Limes #####

include_once "miles-limes/miles_limes.php";

/**
 * Add custom short codes
 */
include_once 'miles-limes/shortcodes.php';

if ( function_exists( 'register_shortcodes' ) ) {
	add_action( 'init', 'register_shortcodes' );
} else {
	echo "shortcode functions are not available.<br />\n";
}

/**
 * enable use of shortcodes in php files
 */
add_filter( 'widget_text', 'do_shortcode' );


### Nyhetssaker ###

include_once 'nyheter/nyheter.php';
