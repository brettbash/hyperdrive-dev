import { SplitText } from '@/utilities/SplitText';

export default () => {
    return {
        delay: false,
        scrollTrigger: true,
        scrollSettings: false,

        mounted() {
            if (this.scrollTrigger) {
                this.scrollSettings = {
                    start: 'top 85%',
                    trigger: this.$refs.wrapper,
                    toggleActions: 'play none play none'
                };
            }

            this.animate();
        },

        animate() {
            const split = new SplitText(this.$refs.wrapper, {
                type: 'lines',
                linesClass: 'overflow-hidden'
            });

            gsap.from(split.lines, {
                xPercent: -101,
                duration: 1.2,
                stagger: 0.5,
                delay: this.delay,
                ease: 'expo.out',
                scrollTrigger: this.scrollSettings
            });
        }
    };
};
