var scroll = new UtilsScroll();
var menuScene = new Menu("menuScene");
var presentation = new WindowPresentation("presentation");
var zoom = new UtilsZoom();
var menuWeb = new MenuWeb("menuWeb");
var timerMenu = new UtilsTimer();
var subMenuThemeContent = new Menu("contenidos");
var subMenuThemeCrono = new Menu("descripcion");
var subMenuThemeIntro = new Menu("justificacion");
var subMenuThemeRules = new Menu("software");

Core.register('bmgiraldo24');

function Main() {
    loadConfiguration();
    initialize();
}

/**
 * @description
 * Inicia la carga de los archivos de configuración de la multimedia.
 */
function loadConfiguration() {
    scroll.config('./json/scroll.json');
    menuScene.config('./json/menus/menuScene.json');
    presentation.config('./json/windows/presentation.json');
    zoom.config('./json/zoom.json');
    menuWeb.config('./json/menus/menuweb.json');
    subMenuThemeContent.config("./json/menus/subMenuTemaContenido.json");
    subMenuThemeCrono.config("./json/menus/subMenuTemaCronograma.json");
    subMenuThemeIntro.config("./json/menus/subMenuTemaIntroduccion.json");
    subMenuThemeRules.config("./json/menus/subMenuTemaReglas.json");
}

/**
 * @description
 * Carga el inicio de la multimedia. La función se utiliza tambien para el
 * reinicio de la multimedia.
 */
function initialize() {
    scroll.load();
    menuWeb.load();
    scroll.addChild('scene');
    timerMenu.load(addMenu, 2).resume();
}

function addMenu() {
    scroll.addChildMenu(menuScene);
}

function menuButtonPress(textForButton, position, button) {
    destroySubMenus();
    presentation.load(textForButton, button);
    openSubMenu(textForButton);
}

function subMenuButtonPress(textForButton, position, button) {
    presentation.load(textForButton, button);
}

function openSubMenu(submenu) {
    switch (submenu) {
        case "justificacion":
            subMenuThemeIntro.load();
            break;
        case "contenidos":
            subMenuThemeContent.load();
            break;
        case "software":
            subMenuThemeRules.load();
            break;
        case "descripcion":
            subMenuThemeCrono.load();
            break;
    }
}

function closePresentation() {
    presentation.destroy();
    destroySubMenus();    
}

function destroySubMenus() {
    subMenuThemeIntro.destroy();
    subMenuThemeContent.destroy();
    subMenuThemeRules.destroy();
    subMenuThemeCrono.destroy();
}

/**
 * @description
 * Se utiliza para abrie el simbolo de mapa conceptual en una especie de ventana
 * modal
 */
function openFullSize(image) {
    zoom.load('images/contenido/' + image);

}

function goHome() {
    timerMenu.pause();
    destroySubMenus();
    menuScene.destroy();
    menuWeb.destroy();
    scroll.destroy();
    presentation.destroy();
    initialize();
}

