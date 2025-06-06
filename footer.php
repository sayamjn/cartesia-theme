<?php
/**
 * The template for displaying the footer
 *
 * @package Cartesia
 */
?>
    </main><!-- #primary -->

    <footer id="colophon" class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h4><?php esc_html_e( 'Product', 'cartesia' ); ?></h4>
                    <ul>
                        <li><a href="#features"><?php esc_html_e( 'Features', 'cartesia' ); ?></a></li>
                        <li><a href="#pricing"><?php esc_html_e( 'Pricing', 'cartesia' ); ?></a></li>
                        <li><a href="#faq"><?php esc_html_e( 'FAQ', 'cartesia' ); ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4><?php esc_html_e( 'Company', 'cartesia' ); ?></h4>
                    <ul>
                        <li><a href="/about"><?php esc_html_e( 'About', 'cartesia' ); ?></a></li>
                        <li><a href="/blog"><?php esc_html_e( 'Blog', 'cartesia' ); ?></a></li>
                        <li><a href="/careers"><?php esc_html_e( 'Careers', 'cartesia' ); ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4><?php esc_html_e( 'Resources', 'cartesia' ); ?></h4>
                    <ul>
                        <li><a href="/docs"><?php esc_html_e( 'Documentation', 'cartesia' ); ?></a></li>
                        <li><a href="/api"><?php esc_html_e( 'API Reference', 'cartesia' ); ?></a></li>
                        <li><a href="/support"><?php esc_html_e( 'Support', 'cartesia' ); ?></a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4><?php esc_html_e( 'Connect', 'cartesia' ); ?></h4>
                    <ul>
                        <li><a href="https://twitter.com"><?php esc_html_e( 'Twitter', 'cartesia' ); ?></a></li>
                        <li><a href="https://github.com"><?php esc_html_e( 'GitHub', 'cartesia' ); ?></a></li>
                        <li><a href="https://linkedin.com"><?php esc_html_e( 'LinkedIn', 'cartesia' ); ?></a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> <?php bloginfo( 'name' ); ?>. <?php esc_html_e( 'All rights reserved.', 'cartesia' ); ?></p>
            </div>
        </div>
    </footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>