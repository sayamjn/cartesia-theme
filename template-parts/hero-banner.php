<?php
/**
 * Template part for displaying hero banner
 *
 * @package Cartesia
 */

$hero_title = get_theme_mod( 'hero_title', 'Real-time multimodal intelligence for every device' );
$hero_subtitle = get_theme_mod( 'hero_subtitle', 'Build the next generation of AI with ultra-fast, realistic voice generation' );
$interactive_words = get_theme_mod( 'interactive_words', 'ultra-fast|realistic|low-latency|multimodal' );
$primary_cta_text = get_theme_mod( 'primary_cta_text', 'Get Started' );
$primary_cta_link = get_theme_mod( 'primary_cta_link', '#' );
?>

<section class="hero-section">
    <div class="hero-bg-animation">
        <div class="gradient-sphere gradient-sphere-1"></div>
        <div class="gradient-sphere gradient-sphere-2"></div>
    </div>
    
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                <?php echo esc_html( $hero_title ); ?>
                <span class="interactive-text" data-words="<?php echo esc_attr( $interactive_words ); ?>">
                    <span class="text-wrapper">ultra-fast</span>
                    <span class="text-cursor"></span>
                </span>
            </h1>
            
            <p class="hero-subtitle"><?php echo esc_html( $hero_subtitle ); ?></p>
            
            <div class="hero-cta">
                <a href="<?php echo esc_url( $primary_cta_link ); ?>" class="btn-primary">
                    <?php echo esc_html( $primary_cta_text ); ?>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 10H13M13 10L10 7M13 10L10 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#features" class="btn-secondary">Learn More</a>
            </div>
        </div>
    </div>
</section>