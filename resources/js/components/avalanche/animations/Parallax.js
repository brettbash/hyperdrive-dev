export default () => {
    return {
        axis: 'y', // or 'x'
        xStart: 25,
        xEnd: -25,
        yStart: 25,
        yEnd: -25,
        scope: null,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        container: null,
        animation: null,
        fade: null,

        mounted() {
            if (this.container) {
                this.container = this.$refs.container;
            }

            if (!this.scope) {
                this.parallax();
            } else {
                this.setBreakpoint();
            }
        },

        setBreakpoint() {
            if (this.scope === 'xl') {
                ScrollTrigger.matchMedia({
                    '(min-width: 1280px)': () => {
                        this.parallax();
                    }
                });
            } else if (this.scope === 'lg') {
                ScrollTrigger.matchMedia({
                    '(min-width: 1024px)': () => {
                        this.parallax();
                    }
                });
            } else if (this.scope === 'md') {
                ScrollTrigger.matchMedia({
                    '(min-width: 768px)': () => {
                        this.parallax();
                    }
                });
            } else if (this.scope === 'sm') {
                ScrollTrigger.matchMedia({
                    '(min-width: 640px)': () => {
                        this.parallax();
                    }
                });
            }
        },

        parallax() {
            this.animation = gsap.timeline({
                defaults: { ease: 'none' },
                scrollTrigger: {
                    start: this.start,
                    end: this.end,
                    trigger: this.container,
                    scrub: this.scrub
                }
            });

            this.animation.addLabel('start');

            if (this.fade == 'in') {
                this.fadeIn();
            }

            if (this.axis == 'x') {
                this.xParallax();
            } else {
                this.yParallax();
            }

            if (this.fade == 'out') {
                this.fadeOut();
            }
        },

        yParallax() {
            this.animation.fromTo(this.$refs.element, { yPercent: this.yStart }, { yPercent: this.yEnd }, 'start');
        },

        xParallax() {
            this.animation.fromTo(this.$refs.element, { xPercent: this.xStart }, { xPercent: this.xEnd }, 'start');
        },

        fadeIn() {
            this.animation.fromTo(this.$refs.element, { opacity: 0 }, { opacity: 1 }, 'start');
        },

        fadeOut() {
            this.animation.to(this.$refs.element, { opacity: 0 }, 'start');
        }
    };
};
