import barba from '@barba/core';
import primaryOnce from '@modules/pageTransitions/PrimaryOnce';
import primaryLeave from '@modules/pageTransitions/PrimaryLeave';
import primaryEnter from '@modules/pageTransitions/PrimaryEnter';

export default () => {
    barba.hooks.enter(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 200);
    });

    barba.hooks.afterLeave(() => {
        Spruce.reset('site', { enterDelay: 1.5 });
        Spruce.reset('nav', { open: false });
    });

    barba.hooks.after(() => {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    });

    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    barba.init({
        timeout: 10000,
        transitions: [
            {
                once({ next }) {
                    primaryOnce();
                    console.log(`Page Load`);
                },
                leave({ current }) {
                    const done = this.async();
                    primaryLeave(current.container, done);
                    console.log(`Bye Felicia`);
                },
                enter({ next }) {
                    primaryEnter();
                    console.log(`New Page`);
                }
            }
        ],
        schema: {
            prefix: 'data-portal',
            wrapper: 'realm',
            container: 'destination'
        }
    });
};
