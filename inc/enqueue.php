<?php
/**
 * Enqueue scripts and styles
 *
 * @package Cartesia
 */

function cartesia_scripts() {
    // Theme stylesheet
    wp_enqueue_style( 'cartesia-style', get_stylesheet_uri(), array(), '1.0.0' );
    
    // Main CSS
    wp_enqueue_style( 'cartesia-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0' );
    
    // GSAP from CDN
    wp_enqueue_script( 'gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js', array(), '3.12.2', true );
    wp_enqueue_script( 'gsap-scrolltrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js', array('gsap'), '3.12.2', true );
    
    // GSAP Animations
    wp_enqueue_script( 'cartesia-gsap', get_template_directory_uri() . '/assets/js/gsap-animations.js', array('gsap', 'gsap-scrolltrigger'), '1.0.0', true );
    
    // React and ReactDOM from CDN
    wp_enqueue_script( 'react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), '18.0.0', true );
    wp_enqueue_script( 'react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('react'), '18.0.0', true );
    
    // React Components
    wp_enqueue_script( 'cartesia-react', get_template_directory_uri() . '/assets/js/react-components.js', array('react', 'react-dom'), '1.0.0', true );
    
    // Main JavaScript
    wp_enqueue_script( 'cartesia-main', get_template_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0.0', true );
    
    // Localize script for AJAX
    wp_localize_script( 'cartesia-react', 'cartesia_ajax', array(
        'ajax_url' => admin_url( 'admin-ajax.php' ),
        'rest_url' => rest_url( 'cartesia/v1/' ),
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ));
}
add_action( 'wp_enqueue_scripts', 'cartesia_scripts' );