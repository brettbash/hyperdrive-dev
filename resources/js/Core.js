// :: Templates ------------ //

// :: Blocks ------------ //

// :: Modules ------------ //

// :: Components ------------ //
import avalanche from '@components/avalanche/Avalanche';
import cursor from '@components/cursor';

// :: Utilities ------------ //
import tokens from '@/utilities/Tokens';
import cookies from '@/utilities/Cookies';

export default () => {
    // :: Templates ------------ //

    // :: Blocks ------------ //

    // :: Modules ------------ //
    // window.lightboxVideo = lightboxVideo;
    // window.header = header;
    // window.videoPlayer = video;

    // :: Components ------------ //
    avalanche();
    window.cursor = cursor;

    // :: Utilities ------------ //
    tokens();
    cookies();
};
