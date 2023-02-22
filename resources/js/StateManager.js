export default () => {
    window.Spruce.store('site', {
        animationDelay: 0.3,
        enterDelay: 1
    });

    window.Spruce.store('lightboxVideo', {
        open: false,
        source: '',
        videoID: '',
        mp4: '',
        webm: '',
        poster: ''
    });
};
