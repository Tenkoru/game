import background from "./tiles/background.js";
import field from "./tiles/grid.js";
import Fighter from './units/fighter.js';
//Aliases
let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

// Check for WebGL
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

// Создать приложение с заданой шириной и высотой
let app = new Application({ width: 800, height: 600 });

// Добавить приложение к странице
document.body.appendChild(app.view);

// Растянуть приложение на весь экран и перезапускать растяжку при ресайзе
function scaleToWindowFunction() {
    var scale = scaleToWindow(app.renderer.view, "gray");
}
scaleToWindowFunction();
window.addEventListener("resize", scaleToWindowFunction);

const tileSize = 64;
const playerUnits = [];
let player;

class Player {
    constructor(position, direction, texture, status) {
        this.position = position;
        this.direction = direction;
        this.texture = texture;
        this.status = status;
    }
}

function setupImages() {
    let id;
    const sprite = "assets/sprite.json";
    function loadImages() {
        loader
            .add(sprite)
            .on("progress", loadProgressHandler)
            .load(setup);
    }

    function loadProgressHandler(loader, resource) {
        console.log("loading: " + resource.url);
        console.log("progress: " + loader.progress + "%");
        console.log("loading: " + resource.name);
    }
    function initPlayer() {
        const playerPosition = {
            x: gridParams.size / 2,
            y: Math.round(gridParams.rows / 2) * gridParams.size - gridParams.size / 2
        };
        const playerTexture = new Sprite(id["knight.png"]);
        player = new Player(playerPosition, "right", playerTexture, "idle");
        player.texture.anchor.set(0.5, 0.5);
        player.texture.x = player.position.x;
        player.texture.y = player.position.y;
        if (player.direction === "right") {
            player.texture.scale.x = -1;
        }
        app.stage.addChild(player.texture);
    }

    function setup() {
        console.log("All files loaded");
        id = PIXI.loader.resources[sprite].textures;
        background.init(app, id);
        field.init(app, id);
        // initPlayer();
        let fighterTexture = new PIXI.Sprite(id["fighter.png"]);
        let fighter = new Fighter({x:1,y:1}, "right", fighterTexture, "idle");
        fighter.create(app)
    }

    loadImages();
}

setupImages();
