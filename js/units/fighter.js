import Unit from "./unit.js";

export default class extends Unit {
    constructor(gridPosition, direction, texture, status) {
        super(gridPosition, direction, texture, status);
    }
    tileSize = 64;
    create(app) {
        this.texture.anchor.set(0.5, 0.5);
        (this.texture.position.x = this.gridPosition.x * this.tileSize + this.tileSize / 2),
            (this.texture.position.y = this.gridPosition.y * this.tileSize + this.tileSize / 2);
        if (this.direction === "right") {
            this.texture.scale.x = -1;
        }
        app.stage.addChild(this.texture);
    }
}
