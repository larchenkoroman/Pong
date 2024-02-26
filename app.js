class GameView {
    constructor() {
        /** @type {HTMLCanvasElement} */
        let canvas = document.querySelector('#canvas');
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.offsetTop = canvas.offsetTop;
    }

    draw(...entities) {
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.width, this.height);

        entities.forEach(entity => entity.draw(this.ctx));
    }
}