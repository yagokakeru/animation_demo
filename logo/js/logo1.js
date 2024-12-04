window.addEventListener('load', () => {
    gsap.fromTo('.header_logo_gradient', 3, {
        transform: 'translateX(0%)'
    },
    {
        transform: 'translateX(-9900%)',
        repeat: -1,
        yoyo: true,
    })
});