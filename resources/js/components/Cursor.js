export default () => {
    return {
        scale: 1,
        opacity: 1,

        cursorPos: {
            x: 0,
            y: 0,
        },

        layerTopPos: {
            x: 0,
            y: 0,
        },

        layerMiddlePos: {
            x: 0,
            y: 0,
        },

        layerBottomPos: {
            x: 0,
            y: 0,
        },

        animation: '',
        entering: false,

        start() {
            window.addEventListener('mousemove', ev => this.moveCursor(ev))
            this.moveLayers()

            /* :: Hide Default Browser Cursor
            {+} ---------------------------------- */
            setTimeout(() => {
                document.body.classList.add('lg:cursor-none')
                this.$refs.cursorContainer.classList.add('lg:visible')
            }, 200)

            /* :: Default Cursor
            {+} ---------------------------------- */
            window.addEventListener('cursorEnter', () => this.enter())
            window.addEventListener('cursorLeave', () => this.leave())
            window.addEventListener('cursorClick', () => this.click())

            /* :: Loading
            {+} ---------------------------------- */
            // window.addEventListener('cursorLoadingEnter', () => this.loadingEnter());
            // window.addEventListener('cursorLoadingLeave', () => this.loadingLeave());
        },

        // π ----
        // :: UTILITIES ---------------------------::
        // ____
        createSpin(element, duration = 7, paused = true, rotation = '360deg') {
            const tl = gsap.timeline({
                paused: paused,
                repeat: -1,
            })

            tl.to(element, { duration: duration, rotate: rotation, ease: 'none' })

            return tl
        },

        // π ----
        // :: CURSOR POSITIONING ---------------------------::
        // ____
        moveCursor(ev) {
            this.cursorPos.x = ev.clientX
            this.cursorPos.y = ev.clientY

            gsap.set(this.$refs.cursor, {
                css: {
                    left: this.cursorPos.x,
                    top: this.cursorPos.y,
                },
            })
        },

        moveLayers() {
            gsap.to({}, 0.01, {
                repeat: -1,
                onRepeat: () => {
                    this.layerBottomPos.x += (this.cursorPos.x - this.layerBottomPos.x) * 0.1
                    this.layerBottomPos.y += (this.cursorPos.y - this.layerBottomPos.y) * 0.1

                    this.layerMiddlePos.x += (this.cursorPos.x - this.layerMiddlePos.x) * 0.2
                    this.layerMiddlePos.y += (this.cursorPos.y - this.layerMiddlePos.y) * 0.2

                    this.layerTopPos.x += (this.cursorPos.x - this.layerTopPos.x) * 0.3
                    this.layerTopPos.y += (this.cursorPos.y - this.layerTopPos.y) * 0.3

                    gsap.set(this.$refs.layerBottom, {
                        css: {
                            left: this.layerBottomPos.x,
                            top: this.layerBottomPos.y,
                        },
                    })

                    gsap.set(this.$refs.layerMiddle, {
                        css: {
                            left: this.layerMiddlePos.x,
                            top: this.layerMiddlePos.y,
                        },
                    })

                    gsap.set(this.$refs.layerTop, {
                        css: {
                            left: this.layerTopPos.x,
                            top: this.layerTopPos.y,
                        },
                    })
                },
            })
        },

        // π ----
        // :: ANIMATION CONTROLLERS ---------------------------::
        // ____
        setEnter(animation) {
            this.animation = animation
            this.entering = true

            if (!this.entering) {
                return
            }

            const tl = gsap.timeline({
                onComplete: () => {
                    if (!this.entering) {
                        this.findLeave(animation)
                    }
                },
            })

            return tl
        },

        findLeave(animation) {
            if (animation === 'default') {
                this.leave()
            } else if (animation === 'logo') {
                this.logoLeave()
            } else {
                console.log(`You forgot to add your cursor animation to this method!`)
            }
        },

        setLeave() {
            this.entering = false

            const tl = gsap.timeline({
                onComplete: () => {
                    this.animation = ''
                },
            })

            return tl
        },

        // π ----
        // :: ENTER ---------------------------::
        // ____
        enter() {
            const tl = this.setEnter('default')

            tl.add('start')
                .to(
                    this.$refs.ring,
                    {
                        opacity: 1,
                        duration: 0.22,
                    },
                    'start',
                )

                .to(
                    this.$refs.pointerDot,
                    {
                        opacity: 1,
                        duration: 0.22,
                    },
                    'start',
                )

                .fromTo(
                    this.$refs.ring,
                    {
                        scale: 0.6,
                        yPercent: 60,
                    },
                    {
                        scale: 1,
                        yPercent: 0,
                        duration: 0.3,
                        ease: 'circ.out',
                    },
                    'start',
                )
        },

        // π ----
        // :: LEAVE ---------------------------::
        // ____
        leave() {
            const tl = this.setLeave()

            tl.add('start')
                .to(
                    this.$refs.pointerDot,
                    {
                        opacity: 0,
                        duration: 0.25,
                    },
                    'start',
                )

                .to(
                    this.$refs.ring,
                    {
                        scale: 0.7,
                        yPercent: -15,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'circ.inOut',
                    },
                    'start',
                )
        },

        // π ----
        // :: CLICK ---------------------------::
        // ____
        click() {
            const tl = this.setLeave()

            tl.fromTo(
                this.$refs.pulse,
                {
                    scale: 0,
                    opacity: 0.3,
                },
                {
                    scale: 2.5,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'quad.out',
                },
            )
        },

        // π ----
        // :: LOADING ---------------------------::
        // ____
        loadingEnter() {
            const tl = gsap.timeline()
            document.body.classList.add('lg:cursor-none')

            tl.add('start').to(this.$refs.loaderCursor, {
                opacity: 1,
                duration: 0.5,
            })
        },

        loadingLeave() {
            const tl = gsap.timeline({
                delay: 0.6,
                onComplete: () => {
                    document.body.classList.remove('lg:cursor-none')
                },
            })

            tl.add('start').to(this.$refs.loaderCursor, {
                opacity: 0,
                duration: 0.5,
            })
        },
    }
}
