class GameView {
    constructor() {
        /** @type {HTMLCanvasElement} */
        let canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.offsetTop = canvas.offsetTop;
    }
}