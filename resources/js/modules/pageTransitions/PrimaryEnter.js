export default () => {
    const loader = document.querySelector('[data-transition-primary]')
    const cover = loader.querySelector('[data-cover]')
    const logo = loader.querySelector('[data-logo]')

    const tl = gsap.timeline({
        onComplete: () => {
            smoother.paused(false)
            avalanche.loaded = true
        },
    })

    tl.to(cover, { opacity: 0, duration: 0.4, ease: 'circ.in' })
        .to(logo, { opacity: 0, yPercent: -200, scale: 1.2, duration: 0.5, ease: 'circ.in' }, '<')
        .set(loader, { autoAlpha: 0 })
}
