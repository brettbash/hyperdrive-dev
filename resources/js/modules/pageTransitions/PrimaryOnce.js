export default () => {
    smoother.paused(true)
    const loader = document.querySelector('[data-transition-primary-once]')
    const curtains = loader.querySelectorAll('[data-curtain')
    const logo = loader.querySelector('[data-logo]')

    const tl = gsap.timeline({
        defaults: { ease: 'circ.inOut' },
        onComplete: () => {
            smoother.paused(false)
            avalanche.loaded = true
        },
    })

    tl.fromTo(
        logo,
        { opacity: 0, yPercent: 20, scale: 0.9 },
        { opacity: 1, yPercent: 0, scale: 1, duration: 0.6, ease: 'circ.out' },
    )
        .to(curtains, { duration: 0.8, xPercent: 101, stagger: 0.2 })
        .to(logo, { opacity: 0, yPercent: -5, scale: 1.8, duration: 0.4, ease: 'quad.in' }, '<+=0.5')
        .set(loader, { autoAlpha: 0 })
}
