<?php
/**
 * Init class
 *
 * @package WP_SEND
 */

namespace WP_SEND;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Init class
 */
final class Init {

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Registers all the blocks
	 */
	public function register_blocks() {

		$directory = SEND_DIR . '/build/blocks';

		if ( is_dir( $directory ) ) {
			$items = scandir( $directory );

			foreach ( $items as $item ) {
				if ( '.' !== $item && '..' !== $item && is_dir( $directory . '/' . $item ) ) {
					register_block_type( $directory . '/' . $item );
				}
			}
		}
	}

	/**
	 * Registers email post type
	 */
	public function register_post_type() {

		$labels = array(
			'name'                  => _x( 'Emails', 'Post type general name', 'wp-send' ),
			'singular_name'         => _x( 'Email', 'Post type singular name', 'wp-send' ),
			'menu_name'             => _x( 'Emails', 'Admin Menu text', 'wp-send' ),
			'name_admin_bar'        => _x( 'Email', 'Add New on Toolbar', 'wp-send' ),
			'add_new'               => __( 'Add New', 'wp-send' ),
			'add_new_item'          => __( 'Add New Email', 'wp-send' ),
			'new_item'              => __( 'New Email', 'wp-send' ),
			'edit_item'             => __( 'Edit Email', 'wp-send' ),
			'view_item'             => __( 'View Email', 'wp-send' ),
			'all_items'             => __( 'All emails', 'wp-send' ),
			'search_items'          => __( 'Search emails', 'wp-send' ),
			'parent_item_colon'     => __( 'Parent emails:', 'wp-send' ),
			'not_found'             => __( 'No emails found.', 'wp-send' ),
			'not_found_in_trash'    => __( 'No emails found in Trash.', 'wp-send' ),
			'featured_image'        => _x( 'Email Cover Image', 'Overrides the “Featured Image” phrase for this post type. Added in 4.3', 'wp-send' ),
			'set_featured_image'    => _x( 'Set cover image', 'Overrides the “Set featured image” phrase for this post type. Added in 4.3', 'wp-send' ),
			'remove_featured_image' => _x( 'Remove cover image', 'Overrides the “Remove featured image” phrase for this post type. Added in 4.3', 'wp-send' ),
			'use_featured_image'    => _x( 'Use as cover image', 'Overrides the “Use as featured image” phrase for this post type. Added in 4.3', 'wp-send' ),
			'archives'              => _x( 'Email archives', 'The post type archive label used in nav menus. Default “Post Archives”. Added in 4.4', 'wp-send' ),
			'insert_into_item'      => _x( 'Insert into email', 'Overrides the “Insert into post”/”Insert into page” phrase (used when inserting media into a post). Added in 4.4', 'wp-send' ),
			'uploaded_to_this_item' => _x( 'Uploaded to this email', 'Overrides the “Uploaded to this post”/”Uploaded to this page” phrase (used when viewing media attached to a post). Added in 4.4', 'wp-send' ),
			'filter_items_list'     => _x( 'Filter emails list', 'Screen reader text for the filter links heading on the post type listing screen. Default “Filter posts list”/”Filter pages list”. Added in 4.4', 'wp-send' ),
			'items_list_navigation' => _x( 'Emails list navigation', 'Screen reader text for the pagination heading on the post type listing screen. Default “Posts list navigation”/”Pages list navigation”. Added in 4.4', 'wp-send' ),
			'items_list'            => _x( 'Emails list', 'Screen reader text for the items list heading on the post type listing screen. Default “Posts list”/”Pages list”. Added in 4.4', 'wp-send' ),
		);

		register_post_type(
			'email',
			array(
				'labels'       => $labels,
				'public'       => true,
				'has_archive'  => true,
				'show_in_rest' => true,
				'supports'     => array(
					'title',
					'editor',
					'author',
					'custom-fields',
				),
			)
		);
	}
}
