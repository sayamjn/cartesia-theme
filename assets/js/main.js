/**
 * Main JavaScript file
 *
 * @package Cartesia
 */

(function($) {
    'use strict';

    // DOM Ready
    $(document).ready(function() {
        
        // Mobile Menu Toggle
        $('.mobile-menu-toggle').on('click', function() {
            $(this).toggleClass('active');
            $('.main-navigation').toggleClass('active');
        });

        // Smooth Scrolling
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 800);
                    return false;
                }
            }
        });

        // Header Scroll Effect
        var lastScrollTop = 0;
        $(window).on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            
            if (scrollTop > 50) {
                $('.site-header').addClass('scrolled');
            } else {
                $('.site-header').removeClass('scrolled');
            }
            
            // Hide/Show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                $('.site-header').addClass('hidden');
            } else {
                $('.site-header').removeClass('hidden');
            }
            
            lastScrollTop = scrollTop;
        });

        // Interactive Text Animation
        function initInteractiveText() {
            const interactiveText = document.querySelector('.interactive-text');
            if (!interactiveText) return;

            const words = interactiveText.dataset.words.split('|');
            const textWrapper = interactiveText.querySelector('.text-wrapper');
            let currentIndex = 0;

            function changeWord() {
                // Fade out
                textWrapper.style.opacity = '0';
                textWrapper.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % words.length;
                    textWrapper.textContent = words[currentIndex];
                    
                    // Fade in
                    textWrapper.style.opacity = '1';
                    textWrapper.style.transform = 'translateY(0)';
                }, 300);
            }

            // Start animation
            setInterval(changeWord, 3000);

            // Add transition
            textWrapper.style.transition = 'all 0.3s ease';
        }

        initInteractiveText();

        // Lazy Loading for Images
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img.lazy').forEach(img => {
                imageObserver.observe(img);
            });
        }
    });

    // Window Load
    $(window).on('load', function() {
        // Remove loading classes
        $('.skeleton').removeClass('skeleton');
    });

})(jQuery);