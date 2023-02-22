export default () => {
    return {
        scale: 1.28,
        yStart: -25,
        yEnd: 25,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        container: null,

        mounted() {
            if (this.container) {
                this.container = this.$refs.container;
            }

            gsap.set(this.$refs.background, { scale: this.scale });
            gsap.fromTo(
                this.$refs.background,
                { yPercent: this.yStart },
                {
                    yPercent: this.yEnd,
                    ease: 'none',
                    scrollTrigger: {
                        start: this.start,
                        end: this.end,
                        trigger: this.container,
                        scrub: this.scrub
                    }
                }
            );
        }
    };
};
