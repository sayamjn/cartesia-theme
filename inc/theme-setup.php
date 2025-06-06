<?php
/**
 * Theme Setup Functions
 *
 * @package Cartesia
 */

if ( ! function_exists( 'cartesia_setup' ) ) :
    function cartesia_setup() {
        // Add default posts and comments RSS feed links to head.
        add_theme_support( 'automatic-feed-links' );

        // Let WordPress manage the document title.
        add_theme_support( 'title-tag' );

        // Enable support for Post Thumbnails on posts and pages.
        add_theme_support( 'post-thumbnails' );

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(
            array(
                'menu-1' => esc_html__( 'Primary', 'cartesia' ),
            )
        );

        // Switch default core markup to output valid HTML5.
        add_theme_support(
            'html5',
            array(
                'search-form',
                'comment-form',
                'comment-list',
                'gallery',
                'caption',
                'style',
                'script',
            )
        );

        // Add theme support for selective refresh for widgets.
        add_theme_support( 'customize-selective-refresh-widgets' );

        // Add support for core custom logo.
        add_theme_support(
            'custom-logo',
            array(
                'height'      => 50,
                'width'       => 200,
                'flex-width'  => true,
                'flex-height' => true,
            )
        );

        // Add support for responsive embeds.
        add_theme_support( 'responsive-embeds' );

        // Add support for full and wide align images.
        add_theme_support( 'align-wide' );
    }
endif;
add_action( 'after_setup_theme', 'cartesia_setup' );

// Set the content width in pixels
function cartesia_content_width() {
    $GLOBALS['content_width'] = apply_filters( 'cartesia_content_width', 1200 );
}
add_action( 'after_setup_theme', 'cartesia_content_width', 0 );