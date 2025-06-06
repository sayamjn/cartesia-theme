<?php
/**
 * WPGraphQL Setup
 *
 * @package Cartesia
 */

// Register custom fields to GraphQL
add_action( 'graphql_register_types', function() {
    
    // Register Feature fields
    register_graphql_field( 'Feature', 'icon', [
        'type' => 'String',
        'description' => __( 'Feature icon class', 'cartesia' ),
        'resolve' => function( $post ) {
            return get_post_meta( $post->ID, 'feature_icon', true );
        }
    ]);
    
    register_graphql_field( 'Feature', 'description', [
        'type' => 'String',
        'description' => __( 'Feature description', 'cartesia' ),
        'resolve' => function( $post ) {
            return get_post_meta( $post->ID, 'feature_description', true );
        }
    ]);
    
    // Register FAQ fields
    register_graphql_field( 'Faq', 'answer', [
        'type' => 'String',
        'description' => __( 'FAQ answer', 'cartesia' ),
        'resolve' => function( $post ) {
            return get_post_meta( $post->ID, 'faq_answer', true );
        }
    ]);
    
    // Register Theme Settings
    register_graphql_object_type( 'ThemeSettings', [
        'description' => __( 'Theme customizer settings', 'cartesia' ),
        'fields' => [
            'heroTitle' => [
                'type' => 'String',
                'resolve' => function() {
                    return get_theme_mod( 'hero_title', 'Real-time multimodal intelligence for every device' );
                }
            ],
            'heroSubtitle' => [
                'type' => 'String',
                'resolve' => function() {
                    return get_theme_mod( 'hero_subtitle', 'Build the next generation of AI with ultra-fast, realistic voice generation' );
                }
            ],
            'interactiveWords' => [
                'type' => ['list_of' => 'String'],
                'resolve' => function() {
                    $words = get_theme_mod( 'interactive_words', 'ultra-fast|realistic|low-latency|multimodal' );
                    return explode( '|', $words );
                }
            ],
        ]
    ]);
    
    register_graphql_field( 'RootQuery', 'themeSettings', [
        'type' => 'ThemeSettings',
        'description' => __( 'Get theme settings', 'cartesia' ),
        'resolve' => function() {
            return [];
        }
    ]);
});