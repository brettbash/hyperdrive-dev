import '@ryangjchandler/spruce';
import 'alpine-magic-helpers';
import 'alpinejs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'focus-visible';

import stateManager from '@/StateManager';
import core from '@/Core';
import router from '@/Router';

gsap.registerPlugin(ScrollTrigger);
global.gsap = gsap;
global.ScrollTrigger = ScrollTrigger;

stateManager();
core();
router();
