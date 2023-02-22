export default () => {
    document.body.classList.add('no-scroll');

    const initialLoad = gsap.timeline({
        defaults: { ease: 'circ.inOut' },
        onComplete: () => {
            document.body.classList.remove('no-scroll');
        }
    });

    const loaderWrapper = document.querySelector('[data-loader-wrapper]');
    const curtainYellow = document.querySelector('[data-curtain-yellow]');
    const curtainBlue = document.querySelector('[data-curtain-blue]');

    initialLoad
        .to(curtainBlue, { duration: 0.6, xPercent: 101 })
        .to(curtainYellow, { duration: 0.6, xPercent: 101 }, '<0.2')
        .set(loaderWrapper, { autoAlpha: 0 });
};
