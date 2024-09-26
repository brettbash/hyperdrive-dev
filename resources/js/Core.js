// import lightboxVideo from '@modules/LightboxVideo';
import cursor from '@components/Cursor'
import mouse from '@components/MouseController'
// import videoPlayer from '@components/VideoPlayer';

export default () => {
    // Alpine.data('lightboxVideo', lightboxVideo);
    Alpine.data('cursor', cursor)
    window.mouse = mouse
    // Alpine.data('videoPlayer', videoPlayer);
}
