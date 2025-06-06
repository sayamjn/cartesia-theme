<?php
/**
 * Template part for displaying features section
 *
 * @package Cartesia
 */

$features_query = new WP_Query( array(
    'post_type' => 'features',
    'posts_per_page' => 6,
    'orderby' => 'menu_order',
    'order' => 'ASC',
));
?>

<section id="features" class="features-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Powerful Features</h2>
            <p class="section-subtitle">Everything you need to build next-generation AI applications</p>
        </div>
        
        <?php if ( $features_query->have_posts() ) : ?>
            <div class="features-grid">
                <?php while ( $features_query->have_posts() ) : $features_query->the_post(); 
                    $icon = get_post_meta( get_the_ID(), 'feature_icon', true );
                    $description = get_post_meta( get_the_ID(), 'feature_description', true );
                ?>
                    <div class="feature-card">
                        <div class="feature-icon">
                            <i class="<?php echo esc_attr( $icon ); ?>"></i>
                        </div>
                        <h3 class="feature-title"><?php the_title(); ?></h3>
                        <p class="feature-description">
                            <?php echo esc_html( $description ?: get_the_excerpt() ); ?>
                        </p>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php else : ?>
            <!-- Default features if no posts -->
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Ultra-Low Latency</h3>
                    <p class="feature-description">Experience real-time voice generation with less than 90ms latency, perfect for live applications.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🎯</div>
                    <h3 class="feature-title">High Accuracy</h3>
                    <p class="feature-description">Get complex pronunciations right every time with our state-of-the-art voice models.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🌍</div>
                    <h3 class="feature-title">Multi-Language Support</h3>
                    <p class="feature-description">Support for 15+ languages with native-quality speech synthesis and accent localization.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🔧</div>
                    <h3 class="feature-title">Easy Integration</h3>
                    <p class="feature-description">Simple REST API and SDKs for popular frameworks make integration a breeze.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3 class="feature-title">Cross-Platform</h3>
                    <p class="feature-description">Deploy anywhere - from cloud servers to edge devices and mobile applications.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🛡️</div>
                    <h3 class="feature-title">Enterprise Ready</h3>
                    <p class="feature-description">Built for scale with robust security, compliance, and dedicated support.</p>
                </div>
            </div>
        <?php endif; ?>
        
        <?php wp_reset_postdata(); ?>
    </div>
</section>