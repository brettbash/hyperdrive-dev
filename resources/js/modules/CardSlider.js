import Flickyity from 'flickity';

export default () => {
    return {
        slider: null,
        cellAlign: 'left',

        init() {
            this.slider = new Flickyity(this.$refs.slider, {
                cellAlign: this.cellAlign,
                prevNextButtons: false,
                pageDots: false,
                imagesLoaded: true,
                groupCells: false
            });
        },

        next() {
            this.slider.next();
        },

        prev() {
            this.slider.previous();
        }
    };
};
