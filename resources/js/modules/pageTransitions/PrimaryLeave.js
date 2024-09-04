export default (container, done) => {
    document.body.classList.add('no-scroll')

    const initialLoad = gsap.timeline({
        defaults: { ease: 'circ.inOut' },
        onComplete: () => {
            done()
        },
    })

    const loaderWrapper = document.querySelector('[data-loader-wrapper]')
    const curtainYellow = document.querySelector('[data-curtain-yellow]')
    const curtainBlue = document.querySelector('[data-curtain-blue]')

    initialLoad
        .set(loaderWrapper, { autoAlpha: 1 })
        .fromTo(curtainYellow, { xPercent: -101 }, { duration: 0.6, xPercent: 0 })
        .fromTo(curtainBlue, { xPercent: -101 }, { duration: 0.6, xPercent: 0 }, '<0.2')
}
