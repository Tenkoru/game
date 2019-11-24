import Tile from './tile.js';

export default {
    grid: [],
    type: "battlefield",
    cols: 6,
    rows: 5,
    size: 64,
    offset: {
        top: 64,
        left: 64,
    },
    contains: undefined,
    init: function(app, id) {
        for (let c = 0; c < this.cols; c++) {
            this.grid[c] = [];
            for (let r = 0; r < this.rows; r++) {
                let position = {
                    x: this.size * c + this.offset.left,
                    y: this.size * r + this.offset.top
                };
                let texture = new PIXI.Sprite(id["grass.png"]);
                this.grid[c][r] = new Tile(this.type, this.size, position);
                texture.x = position.x;
                texture.y = position.y;
                app.stage.addChild(texture);
            }
        }
    }
};
