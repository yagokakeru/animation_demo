window.addEventListener('load', () => {
    gsap.fromTo('.op_logo_circle', 3, {
        transform: 'translateX(0%)'
    },
    {
        transform: 'translateX(-9900%)',
        repeat: -1,
        yoyo: true,
    })

    gsap.set('.op_funcreators_logo', { autoAlpha: 0 });
    gsap.timeline({ delay: 2 })
    .to('.op_point_logo', 1, { scale: 15, filter: 'blur(3px)', ease: 'power4.out' })
    .to('.op_funcreators_logo', 1, { autoAlpha: 1, ease: 'power4.in' }, '<')
    .to('.op_container', 1, {
        '--rootLoadingGradientValue3': '100%',
        ease: 'power4.inOut'
    }, '+=1')
    .to('.op_container', 1, {
        '--rootLoadingGradientValue2': '100%',
        ease: 'power4.inOut'
    }, '-=.8')
    .to('.op_container', 1, {
        '--rootLoadingGradientValue1': '100%',
        ease: 'power4.inOut'
    }, '-=.8')
    .set('.op_container', { autoAlpha: 0 })
});