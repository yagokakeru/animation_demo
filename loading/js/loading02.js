window.addEventListener('load', () => {
    /**
     * ローディングアニメーション
     */
    gsap.timeline()
    .to('.loading_container', 2, { 'maskPosition': '100% 150%, 0% 150%', delay: 1 })
    .to('.loading_container', 1, { autoAlpha: 0 }, '-=1.3')
    .to('.mv_content', 1, { scale: 1 })

    gsap.timeline({ scrollTrigger: { trigger: '.msg_img', start: 'top 80%', } })
    .to('.msg_img', 1, {'--clipPathBefore': 'polygon(100% 0, 100% 0, 100% 100%, 80% 100%)', ease: 'power4.out' })
    .to('.msg_img', 1, {'--clipPathAfter': 'polygon(100% 0, 100% 0, 100% 100%, 80% 100%)', ease: 'power4.out' }, '-=.7')
});