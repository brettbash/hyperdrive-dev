export default () => {
    return {
        scale: 1,
        opacity: 1,
        mousePos: {
            x: 0,
            y: 0
        },
        posDot: {
            x: 0,
            y: 0
        },
        posCircle: {
            x: 0,
            y: 0
        },
        active: false,
        animating: false,

        start() {
            // cursorActions.init();
            this.cursorActions();

            gsap.set(this.$refs.dot, { opacity: 0 });
            gsap.set(this.$refs.ring, { opacity: 0 });
            gsap.to(this.$refs.circle, { opacity: 1, duration: 0.2 });

            gsap.set(this.$refs.dot, { xPercent: -50, yPercent: -50 });
            gsap.set(this.$refs.circle, { xPercent: -50, yPercent: -50 });

            window.addEventListener('mousemove', ev => this.moveMe(ev));
            gsap.ticker.add(this.updatePosition);

            // :: Do with Spruce ------------ //
            // this.$root.$on('cursorEnter', this.enter);
            // this.$root.$on('cursorLeave', this.leave);
            // this.$root.$on('cursorClick', this.click);
        },

        moveMe(ev) {
            this.mousePos.x = ev.clientX;
            this.mousePos.y = ev.clientY;
        },

        updatePosition() {
            if (!this.active) {
                this.posDot.x += (this.mousePos.x - this.posDot.x) * 0.3;
                this.posDot.y += (this.mousePos.y - this.posDot.y) * 0.3;

                this.posCircle.x += (this.mousePos.x - this.posCircle.x) * 0.1;
                this.posCircle.y += (this.mousePos.y - this.posCircle.y) * 0.1;

                gsap.set(this.$refs.dot, { x: this.posDot.x, y: this.posDot.y });
                gsap.set(this.$refs.circle, { x: this.posCircle.x, y: this.posCircle.y });
            }
        },

        cursorActions() {
            [...document.querySelectorAll('a, button')].forEach(link => {
                link.addEventListener('mouseenter', () => {
                    // this.$root.$emit('cursorEnter');
                });
                link.addEventListener('mouseleave', () => {
                    // this.$root.$emit('cursorLeave');
                });
                link.addEventListener('click', () => {
                    // this.$root.$emit('cursorClick');
                });
            });
        },

        /* Finished checking here. Everything above looks good. */
        enter() {
            this.animating = true;

            setTimeout(() => {
                if (this.animating) {
                    this.animateIn();
                }
            }, 200);
        },

        animateIn() {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (!this.animating) {
                        this.leave();
                    }
                }
            });

            tl.add('start')
                .to(this.$refs.ring, {
                    opacity: 0.25,
                    duration: 0.3
                })
                .to(
                    this.$refs.dot,
                    {
                        opacity: 0.3,
                        duration: 0.3
                    },
                    'start'
                )
                .to(
                    this.$refs.ring,
                    {
                        scale: 2.7,
                        duration: 0.5,
                        ease: 'circ.inOut'
                    },
                    'start'
                )
                .to(
                    this.$refs.dot,
                    {
                        scale: 1.7,
                        duration: 0.4,
                        ease: 'circ.inOut'
                    },
                    'start'
                );
        },

        leave() {
            this.animating = false;
            const tl = gsap.timeline();

            tl.to(this.$refs.ring, {
                scale: 1,
                opacity: 0,
                duration: 0.2
            }).to(
                this.$refs.dot,
                {
                    scale: 1,
                    opacity: 0,
                    duration: 0.2
                },
                '<0'
            );
        },

        click() {
            gsap.fromTo(
                this.$refs.pulse,
                {
                    scale: 0,
                    opacity: 1
                },
                {
                    scale: 3.5,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'quad.out'
                }
            );
        }
    };
};
