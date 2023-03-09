import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import persist from '@alpinejs/persist';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

import stateManager from '@/StateManager';
import core from '@/Core';
import router from '@/Router';

Alpine.plugin(persist);
Alpine.plugin(focus);
window.Alpine = Alpine;

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);
window.gsap = gsap;
window.mm = gsap.matchMedia();
window.ScrollTrigger = ScrollTrigger;
window.SplitText = SplitText;

stateManager();
core();

console.log(
    '%c🚀 HYPERDRIVE',
    'background: #fff202; color: #000000; font-size: 13px; padding: 4px 8px;'
);

router();
