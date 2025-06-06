<?php
/**
 * Cartesia Theme Functions
 *
 * @package Cartesia
 */

// Theme Setup
require get_template_directory() . '/inc/theme-setup.php';

// Enqueue Scripts and Styles
require get_template_directory() . '/inc/enqueue.php';

// Customizer
require get_template_directory() . '/inc/customizer.php';

// WPGraphQL Setup
if ( class_exists( 'WPGraphQL' ) ) {
    require get_template_directory() . '/inc/wpgraphql-setup.php';
}

// Custom Post Types
function cartesia_register_custom_post_types() {
    // Features CPT
    register_post_type( 'features',
        array(
            'labels' => array(
                'name' => __( 'Features' ),
                'singular_name' => __( 'Feature' )
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-star-filled',
            'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields' ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'feature',
            'graphql_plural_name' => 'features',
        )
    );

    // FAQ CPT
    register_post_type( 'faqs',
        array(
            'labels' => array(
                'name' => __( 'FAQs' ),
                'singular_name' => __( 'FAQ' )
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-editor-help',
            'supports' => array( 'title', 'editor' ),
            'show_in_graphql' => true,
            'graphql_single_name' => 'faq',
            'graphql_plural_name' => 'faqs',
        )
    );
}
add_action( 'init', 'cartesia_register_custom_post_types' );

// REST API Endpoints
function cartesia_register_rest_endpoints() {
    register_rest_route( 'cartesia/v1', '/contact', array(
        'methods' => 'POST',
        'callback' => 'cartesia_handle_contact_form',
        'permission_callback' => '__return_true',
    ));
}
add_action( 'rest_api_init', 'cartesia_register_rest_endpoints' );

function cartesia_handle_contact_form( $request ) {
    $params = $request->get_json_params();
    
    $name = sanitize_text_field( $params['name'] );
    $email = sanitize_email( $params['email'] );
    $message = sanitize_textarea_field( $params['message'] );
    
    // Send email
    $to = get_option( 'admin_email' );
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = array( 'Content-Type: text/plain; charset=UTF-8' );
    
    $sent = wp_mail( $to, $subject, $body, $headers );
    
    if ( $sent ) {
        return new WP_REST_Response( array( 'success' => true ), 200 );
    } else {
        return new WP_REST_Response( array( 'success' => false ), 500 );
    }
}

// Performance Optimizations
function cartesia_optimize_performance() {
    // Remove unnecessary WordPress features
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'wp_generator' );
    remove_action( 'wp_head', 'wlwmanifest_link' );
    remove_action( 'wp_head', 'rsd_link' );
    
    // Disable XML-RPC
    add_filter( 'xmlrpc_enabled', '__return_false' );
    
    // Remove jQuery Migrate
    add_action( 'wp_default_scripts', function( $scripts ) {
        if ( ! is_admin() && isset( $scripts->registered['jquery'] ) ) {
            $script = $scripts->registered['jquery'];
            if ( $script->deps ) {
                $script->deps = array_diff( $script->deps, array( 'jquery-migrate' ) );
            }
        }
    });
}
add_action( 'init', 'cartesia_optimize_performance' );

// Async/Defer Scripts
function cartesia_add_async_defer_attributes( $tag, $handle ) {
    if ( 'cartesia-gsap' === $handle || 'cartesia-main' === $handle ) {
        return str_replace( ' src', ' defer src', $tag );
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'cartesia_add_async_defer_attributes', 10, 2 );

// Preload Critical Resources
function cartesia_preload_resources() {
    echo '<link rel="preload" href="' . get_template_directory_uri() . '/assets/css/main.css" as="style">';
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
    echo '<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">';
}
add_action( 'wp_head', 'cartesia_preload_resources', 1 );