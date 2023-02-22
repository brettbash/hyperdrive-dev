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
                type: 'words, lines',
                linesClass: 'overflow-hidden'
            });

            gsap.from(split.words, {
                yPercent: 101,
                duration: 0.8,
                stagger: 0.18,
                delay: this.delay,
                ease: 'expo.out',
                scrollTrigger: this.scrollSettings
            });
        }
    };
};
