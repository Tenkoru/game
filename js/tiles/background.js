import Tile from './tile.js';

export default {
    grid: [],
    type: "background",
    cols: 8,
    rows: 7,
    size: 64,
    init: function(app, id) {
        for (let c = 0; c < this.cols; c++) {
            this.grid[c] = [];
            for (let r = 0; r < this.rows; r++) {
                let position = {
                    x: this.size * c,
                    y: this.size * r
                };
                let texture = new PIXI.Sprite(id["sideGrass.png"]);
                this.grid[c][r] = new Tile(this.type, this.size, position);
                texture.x = position.x;
                texture.y = position.y;
                app.stage.addChild(texture);
            }
        }
    }
};
