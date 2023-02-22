export default () => {
    return {
        delay: false,
        scrollTrigger: true,
        scrollSettings: false,

        mounted() {
            if (this.scrollTrigger) {
                this.scrollSettings = {
                    start: 'top 85%',
                    trigger: this.$refs.element
                };
            }

            if (!this.delay) {
                this.delay = this.$store.site.animationDelay;
            }

            gsap.from(this.$refs.element, {
                opacity: 0,
                duration: 0.5,
                delay: this.delay,
                ease: 'quad.out',
                scrollTrigger: this.scrollSettings
            });
        }
    };
};
