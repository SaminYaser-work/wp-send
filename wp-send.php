<?php
/**
 * Plugin Name:       Wp Send
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-send
 *
 * @package WP_SEND
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'SEND_VER', '0.1.0' );
define( 'SEND_DIR', __DIR__ );
define( 'SEND_URL', plugin_dir_url( __FILE__ ) );


require_once SEND_DIR . '/includes/class-init.php';
new \WP_SEND\Init();
