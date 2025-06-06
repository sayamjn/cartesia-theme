<?php
/**
 * Cartesia Theme Customizer
 *
 * @package Cartesia
 */

function cartesia_customize_register( $wp_customize ) {
    // Hero Section
    $wp_customize->add_section( 'cartesia_hero', array(
        'title'      => __( 'Hero Section', 'cartesia' ),
        'priority'   => 30,
    ));

    // Hero Title
    $wp_customize->add_setting( 'hero_title', array(
        'default'           => __( 'Real-time multimodal intelligence for every device', 'cartesia' ),
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control( 'hero_title', array(
        'label'    => __( 'Hero Title', 'cartesia' ),
        'section'  => 'cartesia_hero',
        'type'     => 'text',
    ));

    // Hero Subtitle
    $wp_customize->add_setting( 'hero_subtitle', array(
        'default'           => __( 'Build the next generation of AI with ultra-fast, realistic voice generation', 'cartesia' ),
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control( 'hero_subtitle', array(
        'label'    => __( 'Hero Subtitle', 'cartesia' ),
        'section'  => 'cartesia_hero',
        'type'     => 'textarea',
    ));

    // Interactive Words
    $wp_customize->add_setting( 'interactive_words', array(
        'default'           => 'ultra-fast|realistic|low-latency|multimodal',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control( 'interactive_words', array(
        'label'       => __( 'Interactive Words (separated by |)', 'cartesia' ),
        'section'     => 'cartesia_hero',
        'type'        => 'text',
        'description' => __( 'Words that will rotate in the hero section', 'cartesia' ),
    ));

    // Primary CTA
    $wp_customize->add_setting( 'primary_cta_text', array(
        'default'           => __( 'Get Started', 'cartesia' ),
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control( 'primary_cta_text', array(
        'label'    => __( 'Primary CTA Text', 'cartesia' ),
        'section'  => 'cartesia_hero',
        'type'     => 'text',
    ));

    $wp_customize->add_setting( 'primary_cta_link', array(
        'default'           => '#',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control( 'primary_cta_link', array(
        'label'    => __( 'Primary CTA Link', 'cartesia' ),
        'section'  => 'cartesia_hero',
        'type'     => 'url',
    ));
}
add_action( 'customize_register', 'cartesia_customize_register' );