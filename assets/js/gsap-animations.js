/**
 * GSAP Animations
 *
 * @package Cartesia
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.timeline()
    .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.hero-cta', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');

// Parallax effect for hero background
gsap.to('.gradient-sphere-1', {
    y: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

gsap.to('.gradient-sphere-2', {
    y: 50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
    }
});

// Features Animation
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Hover animation
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Section Headers Animation
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.timeline({
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    })
    .from(header.querySelector('.section-title'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
    })
    .from(header.querySelector('.section-subtitle'), {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4');
});

// Smooth reveal for sections
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true
        }
    });
});

// Performance optimization: Pause animations when not in viewport
ScrollTrigger.create({
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: self => {
        if (self.direction === -1) {
            gsap.ticker.lagSmoothing(0);
        } else {
            gsap.ticker.lagSmoothing(1000, 16);
        }
    }
});