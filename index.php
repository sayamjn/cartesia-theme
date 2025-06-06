<?php
/**
 * The main template file
 *
 * @package Cartesia
 */

get_header();
?>

<!-- Hero Section -->
<?php get_template_part( 'template-parts/hero', 'banner' ); ?>

<!-- Features Section -->
<?php get_template_part( 'template-parts/features', 'section' ); ?>

<!-- Pricing Section -->
<?php get_template_part( 'template-parts/pricing', 'section' ); ?>

<!-- FAQ Section -->
<?php get_template_part( 'template-parts/faq', 'section' ); ?>

<!-- Contact Section -->
<?php get_template_part( 'template-parts/contact', 'section' ); ?>

<?php
get_footer();