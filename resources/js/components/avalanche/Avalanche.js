import fadeIn from '@components/avalanche/animations/FadeIn.js';
import linesRight from '@components/avalanche/animations/LinesRight.js';
import magnetic from '@components/avalanche/animations/Magnetic.js';
import marquee from '@components/avalanche/animations/Marquee.js';
import parallax from '@components/avalanche/animations/Parallax.js';
import parallaxBackground from '@components/avalanche/animations/ParallaxBackground.js';
import spin from '@components/avalanche/animations/Spin.js';
import wordsUp from '@components/avalanche/animations/WordsUp.js';

// π ----
// :: 🏔 AVALANCHE ---------------------------::
// ____
/* :: Utility Alpine Animation Library
{+} ---------------------------------- */
export default () => {
    window.fadeIn = fadeIn;
    window.linesRight = linesRight;
    window.magnetic = magnetic;
    window.marquee = marquee;
    window.parallax = parallax;
    window.parallaxBackground = parallaxBackground;
    window.spin = spin;
    window.wordsUp = wordsUp;
};
