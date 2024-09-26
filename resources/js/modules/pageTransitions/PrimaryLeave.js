export default (container, done) => {
    smoother.paused(true)
    const loader = document.querySelector('[data-transition-primary]')
    const cover = loader.querySelector('[data-cover]')
    const logo = loader.querySelector('[data-logo]')

    const tl = gsap.timeline({
        defaults: { ease: 'circ.inOut' },
        onComplete: () => {
            done()
        },
    })

    tl.set(loader, { autoAlpha: 1 })
        .fromTo(cover, { opacity: 0 }, { opacity: 1, duration: 0.4 })
        .fromTo(
            logo,
            { opacity: 0, yPercent: 50, scale: 0.9 },
            { opacity: 1, yPercent: 0, scale: 1, duration: 0.6, ease: 'circ.out' },
            '<',
        )
}
