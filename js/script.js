function initPixi() {
    function scaleToWindowFunction() {
        var scale = scaleToWindow(app.renderer.view, "gray");
    }
    let type = "WebGL";
    if (!PIXI.utils.isWebGLSupported()) {
        type = "canvas";
    }

    // Создать приложение с заданой шириной и высотой
    let app = new PIXI.Application({ width: 800, height: 600 });

    // Добавить приложение к странице
    document.body.appendChild(app.view);

    // Растянуть приложение на весь экран и перезапускать растяжку при ресайзе
    scaleToWindowFunction();
    window.addEventListener("resize", scaleToWindowFunction);
}

initPixi();

