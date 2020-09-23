/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '656px'],
                ["style", "width", '1000px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sceneDesplazamiento": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    type: 'image',
                    id: 'desplazamiento',
                    display: 'block',
                    rect: ['-18px', '-21px', '96px', '115px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/scroll/desplazamiento.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    type: 'image',
                    id: 'desplazamientoOver',
                    display: 'none',
                    rect: ['-18px', '-21px', '96px', '115px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/scroll/desplazamientoOver.png', '0px', '0px']
                },
                {
                    id: 'desplzamiento',
                    type: 'rect',
                    rect: ['13', '10', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    type: 'rect',
                    id: 'colision',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-4px', '-2px', '68px', '76px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'desplzamiento',
                symbolName: 'sceneDesplazamientoFlechas',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_desplazamiento}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-18px'],
                ["style", "display", 'block']
            ],
            "${_desplazamientoOver}": [
                ["style", "top", '-21px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-18px'],
                ["style", "display", 'none']
            ],
            "${_colision}": [
                ["style", "height", '76px'],
                ["style", "top", '-2px'],
                ["style", "left", '-4px'],
                ["style", "width", '68px']
            ],
            "${symbolSelector}": [
                ["style", "height", '72px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: true,
            labels: {
                "normal": 0,
                "over": 2000,
                "out": 4000
            },
            timeline: [
                { id: "eid1", tween: [ "style", "${_desplazamientoOver}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeOutCubic" },
                { id: "eid3", tween: [ "style", "${_desplazamientoOver}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeOutCubic" },
                { id: "eid2", tween: [ "style", "${_desplazamiento}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0, easing: "easeOutCubic" },
                { id: "eid4", tween: [ "style", "${_desplazamiento}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0, easing: "easeOutCubic" }            ]
        }
    }
},
"menuEscenaBoton": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo',
                    type: 'rect',
                    rect: ['9px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logoOver',
                    type: 'rect',
                    rect: ['9px', '5px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'label',
                    type: 'rect',
                    rect: ['115px', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-9px', '-8px', '288px', '109px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            {
                id: 'label',
                symbolName: 'menuEscenaBotonLabel',
                autoPlay: {

               }
            },
            {
                id: 'background',
                symbolName: 'menuEscenaBotonBackground',
                autoPlay: {

               }
            },
            {
                id: 'logoOver',
                symbolName: 'menuEscenaBotonLogo',
                autoPlay: {

               }
            },
            {
                id: 'logo',
                symbolName: 'menuEscenaBotonLogo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '5px'],
                ["style", "left", '19px'],
                ["transform", "scaleY", '1']
            ],
            "${_label}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '35px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '115px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '272px']
            ],
            "${_logoOver}": [
                ["style", "top", '5px'],
                ["transform", "scaleY", '1'],
                ["style", "left", '19px'],
                ["transform", "scaleX", '1']
            ],
            "${_colision}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "height", '109px'],
                ["style", "top", '-8px'],
                ["style", "left", '-9px'],
                ["style", "width", '288px']
            ],
            "${_background}": [
                ["transform", "scaleX", '1'],
                ["transform", "scaleY", '1']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "out": 3000,
                "selected": 4000
            },
            timeline: [
                { id: "eid35", tween: [ "transform", "${_logo}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid63", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid39", tween: [ "style", "${_logo}", "top", '4px', { fromValue: '5px'}], position: 1000, duration: 500 },
                { id: "eid61", tween: [ "style", "${_logo}", "top", '5px', { fromValue: '4px'}], position: 3000, duration: 500 },
                { id: "eid99", tween: [ "style", "${_logoOver}", "left", '15px', { fromValue: '19px'}], position: 1000, duration: 500 },
                { id: "eid100", tween: [ "style", "${_logoOver}", "left", '19px', { fromValue: '15px'}], position: 3000, duration: 500 },
                { id: "eid34", tween: [ "transform", "${_logo}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid62", tween: [ "transform", "${_logo}", "scaleX", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid101", tween: [ "transform", "${_logoOver}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid102", tween: [ "transform", "${_logoOver}", "scaleY", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid36", tween: [ "transform", "${_label}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid48", tween: [ "transform", "${_label}", "scaleX", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid32", tween: [ "transform", "${_background}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid54", tween: [ "transform", "${_background}", "scaleX", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid33", tween: [ "transform", "${_background}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid55", tween: [ "transform", "${_background}", "scaleY", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid103", tween: [ "transform", "${_logoOver}", "scaleX", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid104", tween: [ "transform", "${_logoOver}", "scaleX", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid37", tween: [ "transform", "${_label}", "scaleY", '1.05', { fromValue: '1'}], position: 1000, duration: 500 },
                { id: "eid49", tween: [ "transform", "${_label}", "scaleY", '1', { fromValue: '1.05'}], position: 3000, duration: 500 },
                { id: "eid38", tween: [ "style", "${_logo}", "left", '15px', { fromValue: '19px'}], position: 1000, duration: 500 },
                { id: "eid64", tween: [ "style", "${_logo}", "left", '19px', { fromValue: '15px'}], position: 3000, duration: 500 },
                { id: "eid97", tween: [ "style", "${_logoOver}", "top", '4px', { fromValue: '5px'}], position: 1000, duration: 500 },
                { id: "eid98", tween: [ "style", "${_logoOver}", "top", '5px', { fromValue: '4px'}], position: 3000, duration: 500 }            ]
        }
    }
},
"menuEscenaBotonLogo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'block',
                    rect: ['-20px', '-17px', '108px', '93px', 'auto', 'auto'],
                    id: 'menuSecondaryButtonLogo1',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/menuSecondaryButtonLogo1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-20px', '-17px', '108px', '93px', 'auto', 'auto'],
                    id: 'menuSecondaryButtonLogo2',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/menuSecondaryButtonLogo2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-20px', '-17px', '108px', '94px', 'auto', 'auto'],
                    id: 'menuSecondaryButtonLogo3',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/menuSecondaryButtonLogo3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-20px', '-17px', '108px', '93px', 'auto', 'auto'],
                    id: 'menuSecondaryButtonLogo4',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/menuSecondaryButtonLogo4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-20px', '-17px', '108px', '93px', 'auto', 'auto'],
                    id: 'menuSecondaryButtonLogo5',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/menuSecondaryButtonLogo5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_menuSecondaryButtonLogo5}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ],
            "${_menuSecondaryButtonLogo3}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '59px'],
                ["style", "width", '68px']
            ],
            "${_menuSecondaryButtonLogo1}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-20px'],
                ["style", "display", 'block']
            ],
            "${_menuSecondaryButtonLogo2}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ],
            "${_menuSecondaryButtonLogo4}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-20px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            timeline: [
                { id: "eid3417", tween: [ "style", "${_menuSecondaryButtonLogo1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid3422", tween: [ "style", "${_menuSecondaryButtonLogo4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid3423", tween: [ "style", "${_menuSecondaryButtonLogo4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid3424", tween: [ "style", "${_menuSecondaryButtonLogo5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid3420", tween: [ "style", "${_menuSecondaryButtonLogo3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid3421", tween: [ "style", "${_menuSecondaryButtonLogo3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid3418", tween: [ "style", "${_menuSecondaryButtonLogo2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid3419", tween: [ "style", "${_menuSecondaryButtonLogo2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"menuEscenaBotonLabel": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['0px', '0px', '116px', '40px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '40px'],
                ["style", "width", '116px']
            ],
            "${_contenedor}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '116px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"menuEscena": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button4',
                    type: 'rect',
                    rect: ['442px', '1520px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button5',
                    type: 'rect',
                    rect: ['228px', '1807px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button3',
                    type: 'rect',
                    rect: ['90px', '1176px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button2',
                    type: 'rect',
                    rect: ['393px', '931px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button1',
                    type: 'rect',
                    rect: ['667px', '745px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'menuEscenaBoton',
                autoPlay: {

               }
            },
            {
                id: 'button1',
                symbolName: 'menuEscenaBoton',
                autoPlay: {

               }
            },
            {
                id: 'button5',
                symbolName: 'menuEscenaBoton',
                autoPlay: {

               }
            },
            {
                id: 'button4',
                symbolName: 'menuEscenaBoton',
                autoPlay: {

               }
            },
            {
                id: 'button3',
                symbolName: 'menuEscenaBoton',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "top", '1176px'],
                ["transform", "scaleY", '0.40324'],
                ["transform", "scaleX", '0.40324'],
                ["style", "opacity", '0'],
                ["style", "left", '90px']
            ],
            "${_button1}": [
                ["style", "top", '745px'],
                ["transform", "scaleY", '0.40324'],
                ["transform", "scaleX", '0.40324'],
                ["style", "opacity", '0'],
                ["style", "left", '667px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1986px'],
                ["style", "width", '1000px']
            ],
            "${_button5}": [
                ["style", "top", '1807px'],
                ["transform", "scaleY", '0.40324'],
                ["transform", "scaleX", '0.40324'],
                ["style", "opacity", '0'],
                ["style", "left", '228px']
            ],
            "${_button2}": [
                ["style", "top", '931px'],
                ["transform", "scaleY", '0.40324'],
                ["transform", "scaleX", '0.40324'],
                ["style", "opacity", '0'],
                ["style", "left", '393px']
            ],
            "${_button4}": [
                ["style", "top", '1520px'],
                ["transform", "scaleY", '0.40324'],
                ["transform", "scaleX", '0.40324'],
                ["style", "opacity", '0'],
                ["style", "left", '442px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1500,
            autoPlay: true,
            labels: {
                "in": 0,
                "close": 1500
            },
            timeline: [
                { id: "eid16902", tween: [ "transform", "${_button1}", "scaleY", '1', { fromValue: '0.40324'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid16888", tween: [ "style", "${_button1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid16912", tween: [ "transform", "${_button5}", "scaleX", '1', { fromValue: '0.40324'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid16906", tween: [ "transform", "${_button4}", "scaleY", '1', { fromValue: '0.40324'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid16900", tween: [ "transform", "${_button1}", "scaleX", '1', { fromValue: '0.40324'}], position: 0, duration: 500, easing: "easeOutBack" },
                { id: "eid16914", tween: [ "transform", "${_button5}", "scaleY", '1', { fromValue: '0.40324'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid16908", tween: [ "transform", "${_button2}", "scaleX", '1', { fromValue: '0.40324'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid16894", tween: [ "style", "${_button5}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
                { id: "eid16910", tween: [ "transform", "${_button2}", "scaleY", '1', { fromValue: '0.40324'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid16898", tween: [ "transform", "${_button3}", "scaleY", '1', { fromValue: '0.40324'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid16892", tween: [ "style", "${_button2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
                { id: "eid16890", tween: [ "style", "${_button4}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid16904", tween: [ "transform", "${_button4}", "scaleX", '1', { fromValue: '0.40324'}], position: 1000, duration: 500, easing: "easeOutBack" },
                { id: "eid16896", tween: [ "transform", "${_button3}", "scaleX", '1', { fromValue: '0.40324'}], position: 500, duration: 500, easing: "easeOutBack" },
                { id: "eid16886", tween: [ "style", "${_button3}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" }            ]
        }
    }
},
"menuEscenaBotonBackground": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-34px', '-12px', '340px', '118px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.8', '0.8']],
                    id: 'btnMenu',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/btnMenu.png', '0px', '0px']
                },
                {
                    rect: ['-34px', '-12px', '340px', '118px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.8', '0.8']],
                    id: 'btnMenuOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/menus/escena/btnMenuOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_btnMenuOver}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.8'],
                ["style", "height", '118px'],
                ["transform", "scaleX", '0.8'],
                ["style", "display", 'none'],
                ["style", "left", '-34px'],
                ["style", "width", '340px']
            ],
            "${_btnMenu}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0.8'],
                ["style", "height", '118px'],
                ["transform", "scaleX", '0.8'],
                ["style", "display", 'block'],
                ["style", "left", '-34px'],
                ["style", "width", '340px']
            ],
            "${symbolSelector}": [
                ["style", "height", '94px'],
                ["style", "width", '272px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "selected": 2000,
                "out": 3000
            },
            timeline: [
                { id: "eid3238", tween: [ "style", "${_btnMenuOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3240", tween: [ "style", "${_btnMenuOver}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid3239", tween: [ "style", "${_btnMenu}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid3241", tween: [ "style", "${_btnMenu}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"subMenu1ButtonLabel": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    rect: ['-5px', '-3px', '93px', '30px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '23px'],
                ["style", "width", '83px']
            ],
            "${_contenedor}": [
                ["style", "top", '-3px'],
                ["style", "height", '30px'],
                ["style", "left", '-5px'],
                ["style", "width", '93px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"subMenu4": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button1',
                    type: 'rect',
                    rect: ['39px', '-48px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button2',
                    type: 'rect',
                    rect: ['130px', '-48px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button3',
                    type: 'rect',
                    rect: ['243px', '-48px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button4',
                    type: 'rect',
                    rect: ['335px', '-48px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button5',
                    type: 'rect',
                    rect: ['451px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button6',
                    type: 'rect',
                    rect: ['544px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button7',
                    type: 'rect',
                    rect: ['660px', '7px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button6',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button1',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button7',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button5',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button4',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            },
            {
                id: 'button3',
                symbolName: 'subMenu4Button',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "top", '142px'],
                ["style", "left", '243px']
            ],
            "${_button1}": [
                ["style", "top", '142px'],
                ["style", "left", '39px']
            ],
            "${_button2}": [
                ["style", "top", '74px'],
                ["style", "left", '130px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '889px']
            ],
            "${_button5}": [
                ["style", "top", '142px'],
                ["style", "left", '451px']
            ],
            "${_button4}": [
                ["style", "top", '74px'],
                ["style", "left", '335px']
            ],
            "${_button7}": [
                ["style", "top", '142px'],
                ["style", "left", '660px']
            ],
            "${_button6}": [
                ["style", "top", '74px'],
                ["style", "left", '544px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid6080", tween: [ "style", "${_button5}", "top", '1px', { fromValue: '142px'}], position: 0, duration: 1000 },
                { id: "eid6081", tween: [ "style", "${_button1}", "top", '1px', { fromValue: '142px'}], position: 0, duration: 1000 },
                { id: "eid6078", tween: [ "style", "${_button3}", "top", '1px', { fromValue: '142px'}], position: 0, duration: 1000 },
                { id: "eid6083", tween: [ "style", "${_button2}", "top", '-64px', { fromValue: '74px'}], position: 0, duration: 1000 },
                { id: "eid6079", tween: [ "style", "${_button7}", "top", '1px', { fromValue: '142px'}], position: 0, duration: 1000 },
                { id: "eid6084", tween: [ "style", "${_button6}", "top", '-64px', { fromValue: '74px'}], position: 0, duration: 1000 },
                { id: "eid6082", tween: [ "style", "${_button4}", "top", '-64px', { fromValue: '74px'}], position: 0, duration: 1000 }            ]
        }
    }
},
"subMenu4ButtonLogo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '47px', '48px', 'auto', 'auto'],
                    id: 'iconCrono1',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono2',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono3',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono4',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono5',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono6',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono6.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-9px', '-9px', '48px', '49px', 'auto', 'auto'],
                    id: 'iconCrono7',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconCrono7.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconCrono5}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_iconCrono1}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_iconCrono6}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_iconCrono7}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '30px']
            ],
            "${_iconCrono2}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_iconCrono4}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_iconCrono3}": [
                ["style", "top", '-9px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 7000,
            autoPlay: false,
            timeline: [
                { id: "eid4795", tween: [ "style", "${_iconCrono5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid4798", tween: [ "style", "${_iconCrono5}", "display", 'none', { fromValue: 'block'}], position: 6000, duration: 0 },
                { id: "eid4788", tween: [ "style", "${_iconCrono1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid4789", tween: [ "style", "${_iconCrono1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid4801", tween: [ "style", "${_iconCrono7}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid4792", tween: [ "style", "${_iconCrono3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid4793", tween: [ "style", "${_iconCrono3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid4794", tween: [ "style", "${_iconCrono4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid4797", tween: [ "style", "${_iconCrono4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid4799", tween: [ "style", "${_iconCrono6}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
                { id: "eid4800", tween: [ "style", "${_iconCrono6}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid4790", tween: [ "style", "${_iconCrono2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid4791", tween: [ "style", "${_iconCrono2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 }            ]
        }
    }
},
"subMenu4Button": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo',
                    type: 'rect',
                    rect: ['10px', '7px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'label',
                    type: 'rect',
                    rect: ['64px', '11px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['-5px', '-4px', '173px', '53px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'background',
                symbolName: 'subMenu4ButtonBackground',
                autoPlay: {

               }
            },
            {
                id: 'label',
                symbolName: 'subMenu1ButtonLabel',
                autoPlay: {

               }
            },
            {
                id: 'logo',
                symbolName: 'subMenu4ButtonLogo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_label}": [
                ["style", "left", '64px'],
                ["style", "top", '11px']
            ],
            "${_logo}": [
                ["style", "left", '10px'],
                ["style", "top", '7px']
            ],
            "${_colision}": [
                ["style", "top", '-4px'],
                ["style", "height", '53px'],
                ["style", "left", '-5px'],
                ["style", "width", '173px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '163px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"subMenu4ButtonBackground": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-14px', '-4px', '192px', '53px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.85', '0.85']],
                    id: 'buttonSubMenu2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/buttonSubMenu.png', '0px', '0px']
                },
                {
                    rect: ['-14px', '-4px', '192px', '53px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.85', '0.85']],
                    id: 'buttonSubMenuOver2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/buttonSubMenuOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_buttonSubMenu2}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.85'],
                ["style", "height", '53px'],
                ["transform", "scaleX", '0.85'],
                ["style", "display", 'block'],
                ["style", "left", '-14px'],
                ["style", "width", '192px']
            ],
            "${_buttonSubMenuOver2}": [
                ["style", "top", '-4px'],
                ["transform", "scaleY", '0.85'],
                ["style", "height", '53px'],
                ["style", "display", 'none'],
                ["transform", "scaleX", '0.85'],
                ["style", "left", '-14px'],
                ["style", "width", '192px']
            ],
            "${symbolSelector}": [
                ["style", "height", '45px'],
                ["style", "width", '163px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "selected": 2000,
                "out": 3000
            },
            timeline: [
                { id: "eid15395", tween: [ "style", "${_buttonSubMenuOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid15398", tween: [ "style", "${_buttonSubMenuOver2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid15396", tween: [ "style", "${_buttonSubMenu2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid15399", tween: [ "style", "${_buttonSubMenu2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"subMenu3Button": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo',
                    type: 'rect',
                    rect: ['0px', '2px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'label',
                    type: 'rect',
                    rect: ['48px', '8px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '141px', '39px', 'auto', 'auto'],
                    id: 'over',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'background',
                symbolName: 'subMenu1ButtonBackground',
                autoPlay: {

               }
            },
            {
                id: 'label',
                symbolName: 'subMenu1ButtonLabel',
                autoPlay: {

               }
            },
            {
                id: 'logo',
                symbolName: 'subMenu3ButtonLogo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '2px'],
                ["style", "left", '0px']
            ],
            "${_label}": [
                ["style", "left", '48px'],
                ["style", "top", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '140px']
            ],
            "${_over}": [
                ["style", "height", '39px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '141px']
            ],
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"subMenu3ButtonLogo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-13px', '-10px', '66px', '54px', 'auto', 'auto'],
                    id: 'iconReglas1',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconReglas1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-13px', '-10px', '67px', '54px', 'auto', 'auto'],
                    id: 'iconReglas2',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconReglas2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-13px', '-10px', '67px', '55px', 'auto', 'auto'],
                    id: 'iconReglas3',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconReglas3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-13px', '-10px', '67px', '55px', 'auto', 'auto'],
                    id: 'iconReglas4',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconReglas4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-13px', '-10px', '67px', '55px', 'auto', 'auto'],
                    id: 'iconReglas5',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconReglas5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconReglas1}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-13px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '42px']
            ],
            "${_iconReglas4}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-13px'],
                ["style", "display", 'none']
            ],
            "${_iconReglas5}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-13px'],
                ["style", "display", 'none']
            ],
            "${_iconReglas3}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-13px'],
                ["style", "display", 'none']
            ],
            "${_iconReglas2}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-13px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            timeline: [
                { id: "eid4586", tween: [ "style", "${_iconReglas2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid4587", tween: [ "style", "${_iconReglas2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid4592", tween: [ "style", "${_iconReglas5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid4584", tween: [ "style", "${_iconReglas1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid4585", tween: [ "style", "${_iconReglas1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid4590", tween: [ "style", "${_iconReglas4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid4591", tween: [ "style", "${_iconReglas4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 },
                { id: "eid4588", tween: [ "style", "${_iconReglas3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid4589", tween: [ "style", "${_iconReglas3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
        }
    }
},
"subMenu1ButtonBackground": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-41px', '-18px', '224px', '99px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'buttonSubMenu2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/buttonSubMenu.png', '0px', '0px']
                },
                {
                    rect: ['-41px', '-18px', '224px', '98px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'buttonSubMenuOver2',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/buttonSubMenuOver.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_buttonSubMenuOver2}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '62px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'none'],
                ["style", "left", '-41px'],
                ["style", "width", '222px']
            ],
            "${_buttonSubMenu2}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '62px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'block'],
                ["style", "left", '-41px'],
                ["style", "width", '222px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '140px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3000,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "selected": 2000,
                "out": 3000
            },
            timeline: [
                { id: "eid15395", tween: [ "style", "${_buttonSubMenuOver2}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid15398", tween: [ "style", "${_buttonSubMenuOver2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid15396", tween: [ "style", "${_buttonSubMenu2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid15399", tween: [ "style", "${_buttonSubMenu2}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }            ]
        }
    }
},
"subMenu3": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button1',
                    type: 'rect',
                    rect: ['9px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button2',
                    type: 'rect',
                    rect: ['184px', '-1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button3',
                    type: 'rect',
                    rect: ['359px', '-1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button4',
                    type: 'rect',
                    rect: ['526px', '-1px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button5',
                    type: 'rect',
                    rect: ['690px', '-1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'subMenu3Button',
                autoPlay: {

               }
            },
            {
                id: 'button1',
                symbolName: 'subMenu3Button',
                autoPlay: {

               }
            },
            {
                id: 'button5',
                symbolName: 'subMenu3Button',
                autoPlay: {

               }
            },
            {
                id: 'button4',
                symbolName: 'subMenu3Button',
                autoPlay: {

               }
            },
            {
                id: 'button3',
                symbolName: 'subMenu3Button',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "left", '359px'],
                ["style", "top", '99px']
            ],
            "${_button1}": [
                ["style", "left", '9px'],
                ["style", "top", '99px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '860px']
            ],
            "${_button5}": [
                ["style", "left", '690px'],
                ["style", "top", '99px']
            ],
            "${_button4}": [
                ["style", "left", '526px'],
                ["style", "top", '99px']
            ],
            "${_button2}": [
                ["style", "left", '184px'],
                ["style", "top", '99px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid6438", tween: [ "style", "${_button5}", "top", '-14px', { fromValue: '99px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6434", tween: [ "style", "${_button3}", "top", '-14px', { fromValue: '99px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6436", tween: [ "style", "${_button1}", "top", '-14px', { fromValue: '99px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6435", tween: [ "style", "${_button2}", "top", '-14px', { fromValue: '99px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6437", tween: [ "style", "${_button4}", "top", '-14px', { fromValue: '99px'}], position: 0, duration: 1000, easing: "easeOutBack" }            ]
        }
    }
},
"subMenu2": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button1',
                    type: 'rect',
                    rect: ['25px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button2',
                    type: 'rect',
                    rect: ['215px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button3',
                    type: 'rect',
                    rect: ['398px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button4',
                    type: 'rect',
                    rect: ['583px', '0px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'subMenu2Button',
                autoPlay: {

               }
            },
            {
                id: 'button3',
                symbolName: 'subMenu2Button',
                autoPlay: {

               }
            },
            {
                id: 'button4',
                symbolName: 'subMenu2Button',
                autoPlay: {

               }
            },
            {
                id: 'button1',
                symbolName: 'subMenu2Button',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "left", '428px'],
                ["style", "top", '98px']
            ],
            "${_button1}": [
                ["style", "left", '55px'],
                ["style", "top", '98px']
            ],
            "${symbolSelector}": [
                ["style", "height", '48px'],
                ["style", "width", '609px']
            ],
            "${_button2}": [
                ["style", "left", '245px'],
                ["style", "top", '98px']
            ],
            "${_button4}": [
                ["style", "left", '613px'],
                ["style", "top", '98px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid6262", tween: [ "style", "${_button4}", "top", '-14px', { fromValue: '98px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6261", tween: [ "style", "${_button1}", "top", '-14px', { fromValue: '98px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6263", tween: [ "style", "${_button2}", "top", '-14px', { fromValue: '98px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6260", tween: [ "style", "${_button3}", "top", '-14px', { fromValue: '98px'}], position: 0, duration: 1000, easing: "easeOutBack" }            ]
        }
    }
},
"subMenu2Button": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'label',
                    type: 'rect',
                    rect: ['71', '8px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '-1px', '141px', '40px', 'auto', 'auto'],
                    id: 'over',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'background',
                symbolName: 'subMenu1ButtonBackground',
                autoPlay: {

               }
            },
            {
                id: 'label',
                symbolName: 'subMenu1ButtonLabel',
                autoPlay: {

               }
            },
            {
                id: 'logo',
                symbolName: 'subMenu2ButtonLogo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '0px'],
                ["style", "left", '0px']
            ],
            "${_label}": [
                ["style", "left", '48px'],
                ["style", "top", '8px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '140px']
            ],
            "${_over}": [
                ["style", "height", '40px'],
                ["style", "top", '-1px'],
                ["style", "left", '0px'],
                ["style", "width", '141px']
            ],
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"subMenu2ButtonLogo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-10px', '-11px', '54px', '60px', 'auto', 'auto'],
                    id: 'iconConte1',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconConte1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-10px', '-11px', '55px', '61px', 'auto', 'auto'],
                    id: 'iconConte2',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconConte2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-10px', '-11px', '55px', '61px', 'auto', 'auto'],
                    id: 'iconConte3',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconConte3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-10px', '-11px', '55px', '61px', 'auto', 'auto'],
                    id: 'iconConte4',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconConte4.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconConte2}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${_iconConte3}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '35px']
            ],
            "${_iconConte1}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${_iconConte4}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid4189", tween: [ "style", "${_iconConte2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid4190", tween: [ "style", "${_iconConte2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid4187", tween: [ "style", "${_iconConte1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid4188", tween: [ "style", "${_iconConte1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid4193", tween: [ "style", "${_iconConte4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid4191", tween: [ "style", "${_iconConte3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid4192", tween: [ "style", "${_iconConte3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
        }
    }
},
"subMenu1ButtonLogo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    rect: ['-12px', '-11px', '63px', '57px', 'auto', 'auto'],
                    display: 'none',
                    id: 'iconIntro1',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconIntro1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    rect: ['-12px', '-11px', '64px', '57px', 'auto', 'auto'],
                    display: 'none',
                    id: 'iconIntro2',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconIntro2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    rect: ['-12px', '-11px', '64px', '57px', 'auto', 'auto'],
                    display: 'none',
                    id: 'iconIntro3',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconIntro3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    rect: ['-12px', '-11px', '64px', '57px', 'auto', 'auto'],
                    display: 'none',
                    id: 'iconIntro4',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconIntro4.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    rect: ['-12px', '-11px', '64px', '57px', 'auto', 'auto'],
                    display: 'none',
                    id: 'iconIntro5',
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/menuSecundary/subMenu/iconIntro5.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_iconIntro1}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '36px'],
                ["style", "width", '40px']
            ],
            "${_iconIntro5}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ],
            "${_iconIntro3}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ],
            "${_iconIntro2}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ],
            "${_iconIntro4}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-12px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            timeline: [
                { id: "eid3004", tween: [ "style", "${_iconIntro3}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid3005", tween: [ "style", "${_iconIntro3}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid3002", tween: [ "style", "${_iconIntro2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid3003", tween: [ "style", "${_iconIntro2}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid3000", tween: [ "style", "${_iconIntro1}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid3001", tween: [ "style", "${_iconIntro1}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid3007", tween: [ "style", "${_iconIntro5}", "display", 'block', { fromValue: 'none'}], position: 5000, duration: 0 },
                { id: "eid3006", tween: [ "style", "${_iconIntro4}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid3009", tween: [ "style", "${_iconIntro4}", "display", 'none', { fromValue: 'block'}], position: 5000, duration: 0 }            ]
        }
    }
},
"subMenu1": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'button1',
                    type: 'rect',
                    rect: ['14px', '-15px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button2',
                    type: 'rect',
                    rect: ['179px', '-15px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button3',
                    type: 'rect',
                    rect: ['348px', '-14px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button4',
                    type: 'rect',
                    rect: ['520px', '-14px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'button5',
                    type: 'rect',
                    rect: ['693px', '-14px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'button2',
                symbolName: 'subMenu1Button',
                autoPlay: {

               }
            },
            {
                id: 'button1',
                symbolName: 'subMenu1Button',
                autoPlay: {

               }
            },
            {
                id: 'button5',
                symbolName: 'subMenu1Button',
                autoPlay: {

               }
            },
            {
                id: 'button4',
                symbolName: 'subMenu1Button',
                autoPlay: {

               }
            },
            {
                id: 'button3',
                symbolName: 'subMenu1Button',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_button3}": [
                ["style", "left", '348px'],
                ["style", "top", '126px']
            ],
            "${_button1}": [
                ["style", "left", '14px'],
                ["style", "top", '126px']
            ],
            "${symbolSelector}": [
                ["style", "height", '65px'],
                ["style", "width", '738px']
            ],
            "${_button5}": [
                ["style", "left", '693px'],
                ["style", "top", '126px']
            ],
            "${_button2}": [
                ["style", "left", '179px'],
                ["style", "top", '126px']
            ],
            "${_button4}": [
                ["style", "left", '520px'],
                ["style", "top", '126px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid6258", tween: [ "style", "${_button2}", "top", '-14px', { fromValue: '126px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6257", tween: [ "style", "${_button3}", "top", '-14px', { fromValue: '126px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6256", tween: [ "style", "${_button5}", "top", '-14px', { fromValue: '126px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6255", tween: [ "style", "${_button1}", "top", '-14px', { fromValue: '126px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6259", tween: [ "style", "${_button4}", "top", '-14px', { fromValue: '126px'}], position: 0, duration: 1000, easing: "easeOutBack" }            ]
        }
    }
},
"subMenu1Button": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'background',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'logo',
                    type: 'rect',
                    rect: ['1px', '2px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'label',
                    type: 'rect',
                    rect: ['47px', '8px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['0px', '0px', '142px', '39px', 'auto', 'auto'],
                    id: 'over',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            {
                id: 'background',
                symbolName: 'subMenu1ButtonBackground',
                autoPlay: {

               }
            },
            {
                id: 'label',
                symbolName: 'subMenu1ButtonLabel',
                autoPlay: {

               }
            },
            {
                id: 'logo',
                symbolName: 'subMenu1ButtonLogo',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "left", '1px'],
                ["style", "top", '2px']
            ],
            "${_label}": [
                ["style", "top", '8px'],
                ["style", "left", '47px']
            ],
            "${symbolSelector}": [
                ["style", "height", '39px'],
                ["style", "width", '140px']
            ],
            "${_over}": [
                ["style", "height", '39px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '142px']
            ],
            "${_background}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"windowPresentationBack": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'backCloseText',
                    rect: ['17px', '13px', '202px', '61px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/backCloseText.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'block',
                    rect: ['-25px', '-25px', '138px', '135px', 'auto', 'auto'],
                    id: 'backClose',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/backClose.png', '0px', '0px']
                },
                {
                    type: 'image',
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    display: 'none',
                    rect: ['-26px', '-24px', '138px', '135px', 'auto', 'auto'],
                    id: 'backCloseOver',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/backCloseOver.png', '0px', '0px']
                },
                {
                    type: 'text',
                    rect: ['94px', '35px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Volver',
                    align: 'center',
                    font: ['Arial, Helvetica, sans-serif', 16, 'rgba(255,255,255,1)', '700', 'none', 'normal']
                },
                {
                    rect: ['-5px', '-5px', '203px', '93px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_backCloseText}": [
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '97px'],
                ["transform", "scaleX", '0.63'],
                ["style", "opacity", '0'],
                ["style", "left", '-19px'],
                ["style", "width", '321px']
            ],
            "${_Text}": [
                ["style", "top", '25px'],
                ["style", "opacity", '0'],
                ["style", "font-weight", '700'],
                ["style", "left", '58px'],
                ["style", "font-size", '16px']
            ],
            "${_backClose}": [
                ["style", "top", '-19px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '103px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'block'],
                ["style", "left", '-21px'],
                ["style", "width", '116px']
            ],
            "${_backCloseOver}": [
                ["style", "top", '-19px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '103px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'none'],
                ["style", "left", '-21px'],
                ["style", "width", '116px']
            ],
            "${_colision}": [
                ["style", "top", '-5px'],
                ["style", "height", '93px'],
                ["style", "left", '-5px'],
                ["style", "width", '203px']
            ],
            "${symbolSelector}": [
                ["style", "height", '85px'],
                ["style", "width", '195px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 3500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "out": 2000,
                "click": 3000
            },
            timeline: [
                { id: "eid96", tween: [ "style", "${_Text}", "top", '25px', { fromValue: '25px'}], position: 1500, duration: 0, easing: "easeOutCubic" },
                { id: "eid17144", tween: [ "style", "${_backCloseText}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
                { id: "eid17152", tween: [ "style", "${_backCloseText}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid93", tween: [ "style", "${_backCloseText}", "height", '97px', { fromValue: '97px'}], position: 1500, duration: 0, easing: "easeOutCubic" },
                { id: "eid17142", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeOutCubic" },
                { id: "eid17150", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid92", tween: [ "style", "${_backCloseText}", "width", '321px', { fromValue: '321px'}], position: 1500, duration: 0, easing: "easeOutCubic" },
                { id: "eid17140", tween: [ "style", "${_backCloseText}", "left", '-59px', { fromValue: '-19px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
                { id: "eid17151", tween: [ "style", "${_backCloseText}", "left", '-19px', { fromValue: '-59px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid95", tween: [ "style", "${_backCloseText}", "top", '-16px', { fromValue: '-16px'}], position: 1500, duration: 0, easing: "easeOutCubic" },
                { id: "eid90", tween: [ "style", "${_backCloseOver}", "top", '-19px', { fromValue: '-19px'}], position: 1000, duration: 0, easing: "easeOutCubic" },
                { id: "eid88", tween: [ "style", "${_backCloseOver}", "width", '116px', { fromValue: '116px'}], position: 1000, duration: 0, easing: "easeOutCubic" },
                { id: "eid89", tween: [ "style", "${_backCloseOver}", "height", '103px', { fromValue: '103px'}], position: 1000, duration: 0, easing: "easeOutCubic" },
                { id: "eid91", tween: [ "style", "${_backCloseOver}", "left", '-21px', { fromValue: '-21px'}], position: 1000, duration: 0, easing: "easeOutCubic" },
                { id: "eid17138", tween: [ "style", "${_Text}", "left", '99px', { fromValue: '58px'}], position: 1000, duration: 500, easing: "easeOutCubic" },
                { id: "eid17149", tween: [ "style", "${_Text}", "left", '58px', { fromValue: '99px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid17127", tween: [ "style", "${_backCloseOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid17153", tween: [ "style", "${_backCloseOver}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid17128", tween: [ "style", "${_backClose}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid17154", tween: [ "style", "${_backClose}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
        }
    }
},
"windowPresentation": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-1378px', '-177px', '1700px', '1009px', 'auto', 'auto'],
                    id: 'fondoPresentacion',
                    transform: [[], [], [], ['0.6', '0.6']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/fondoPresentacion.png', '0px', '0px']
                },
                {
                    rect: ['75px', '123px', '844px', '385px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    id: 'title',
                    type: 'rect',
                    rect: ['33', '35px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'close',
                    type: 'rect',
                    rect: ['946', '56px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'pagination',
                    type: 'rect',
                    rect: ['921px', '507px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'next',
                    type: 'rect',
                    rect: ['939', '508px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'back',
                    type: 'rect',
                    transform: [[], [], [], ['-1']],
                    rect: ['939', '508px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'title',
                symbolName: 'windowPresentationTitle',
                autoPlay: {

               }
            },
            {
                id: 'close',
                symbolName: 'windowPresentationClose',
                autoPlay: {

               }
            },
            {
                id: 'pagination',
                symbolName: 'windowPresentationPagination',
                autoPlay: {

               }
            },
            {
                id: 'next',
                symbolName: 'windowPresentationPaginationButton',
                autoPlay: {

               }
            },
            {
                id: 'back',
                symbolName: 'windowPresentationPaginationButton',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_close}": [
                ["style", "left", '-105px'],
                ["style", "top", '56px']
            ],
            "${_next}": [
                ["style", "left", '-147px'],
                ["style", "top", '508px']
            ],
            "${_back}": [
                ["style", "top", '508px'],
                ["style", "left", '-147px'],
                ["transform", "scaleX", '-1']
            ],
            "${symbolSelector}": [
                ["style", "height", '656px'],
                ["style", "width", '1000px']
            ],
            "${_fondoPresentacion}": [
                ["style", "top", '-177px'],
                ["transform", "scaleX", '0.6'],
                ["style", "left", '-1378px'],
                ["transform", "scaleY", '0.6']
            ],
            "${_contenedor}": [
                ["style", "top", '123px'],
                ["style", "height", '385px'],
                ["style", "left", '-935px'],
                ["style", "width", '844px']
            ],
            "${_pagination}": [
                ["style", "left", '-150px'],
                ["style", "top", '507px']
            ],
            "${_title}": [
                ["style", "top", '35px'],
                ["style", "left", '-955px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "in": 0,
                "out": 2000,
                "close": 2500
            },
            timeline: [
                { id: "eid16713", tween: [ "style", "${_back}", "left", '819px', { fromValue: '-147px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid16714", tween: [ "style", "${_back}", "left", '-147px', { fromValue: '819px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid6922", tween: [ "style", "${_close}", "left", '913px', { fromValue: '-105px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6950", tween: [ "style", "${_close}", "left", '-105px', { fromValue: '913px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid16540", tween: [ "style", "${_fondoPresentacion}", "left", '-362px', { fromValue: '-1378px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid16541", tween: [ "style", "${_fondoPresentacion}", "left", '-1378px', { fromValue: '-362px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid6926", tween: [ "style", "${_contenedor}", "left", '70px', { fromValue: '-935px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6952", tween: [ "style", "${_contenedor}", "left", '-935px', { fromValue: '70px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid6930", tween: [ "style", "${_pagination}", "left", '843px', { fromValue: '-150px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6947", tween: [ "style", "${_pagination}", "left", '-150px', { fromValue: '843px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid6928", tween: [ "style", "${_title}", "left", '9px', { fromValue: '-955px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6951", tween: [ "style", "${_title}", "left", '-955px', { fromValue: '9px'}], position: 2000, duration: 500, easing: "easeOutCubic" },
                { id: "eid6920", tween: [ "style", "${_next}", "left", '887px', { fromValue: '-147px'}], position: 0, duration: 1000, easing: "easeOutBack" },
                { id: "eid6948", tween: [ "style", "${_next}", "left", '-147px', { fromValue: '887px'}], position: 2000, duration: 500, easing: "easeOutCubic" }            ]
        }
    }
},
"windowPresentationClose": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-24px', '-20px', '130px', '106px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'botonCerrar2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/botonCerrar.png', '0px', '0px']
                },
                {
                    rect: ['-24px', '-20px', '130px', '106px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'botonCerrarOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/botonCerrarOver.png', '0px', '0px']
                },
                {
                    rect: ['-30px', '-25px', '142px', '118px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'colision',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.0039)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_botonCerrar2}": [
                ["style", "top", '-20px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '106px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'block'],
                ["style", "left", '-24px'],
                ["style", "width", '130px']
            ],
            "${_botonCerrarOver}": [
                ["style", "top", '-20px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '106px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'none'],
                ["style", "left", '-24px'],
                ["style", "width", '130px']
            ],
            "${_colision}": [
                ["style", "top", '-25px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '118px'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-30px'],
                ["style", "width", '142px']
            ],
            "${symbolSelector}": [
                ["style", "height", '67px'],
                ["style", "width", '82px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2250,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "out": 2000
            },
            timeline: [
                { id: "eid16527", tween: [ "style", "${_botonCerrar2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid16528", tween: [ "style", "${_botonCerrar2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid16526", tween: [ "style", "${_botonCerrarOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid16529", tween: [ "style", "${_botonCerrarOver}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"windowPresentationPagination": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'pagination',
                    type: 'image',
                    rect: ['-18px', '-11px', '95px', '60px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/pagination.png', '0px', '0px']
                },
                {
                    rect: ['13px', '7px', '34px', '27px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_contenedor}": [
                ["style", "left", '13px'],
                ["style", "top", '7px']
            ],
            "${_pagination}": [
                ["style", "top", '-11px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "height", '60px'],
                ["style", "left", '-18px'],
                ["style", "width", '95px']
            ],
            "${symbolSelector}": [
                ["style", "height", '41px'],
                ["style", "width", '64px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"windowPresentationPaginationButton": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-12px', '-10px', '65px', '56px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'next',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/next.png', '0px', '0px']
                },
                {
                    rect: ['-12px', '-10px', '65px', '56px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'nextOver',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/nextOver.png', '0px', '0px']
                },
                {
                    rect: ['-4px', '-4px', '53px', '42px', 'auto', 'auto'],
                    id: 'colision',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '35px'],
                ["style", "width", '41px']
            ],
            "${_nextOver}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '56px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'none'],
                ["style", "left", '-12px'],
                ["style", "width", '65px']
            ],
            "${_colision}": [
                ["style", "top", '-4px'],
                ["style", "height", '42px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "left", '-4px'],
                ["style", "width", '53px']
            ],
            "${_next}": [
                ["style", "top", '-10px'],
                ["transform", "scaleY", '0.63'],
                ["style", "height", '56px'],
                ["transform", "scaleX", '0.63'],
                ["style", "display", 'block'],
                ["style", "left", '-12px'],
                ["style", "width", '65px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2500,
            autoPlay: false,
            labels: {
                "normal": 0,
                "over": 1000,
                "out": 2000
            },
            timeline: [
                { id: "eid16535", tween: [ "style", "${_nextOver}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid16536", tween: [ "style", "${_nextOver}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid16534", tween: [ "style", "${_next}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid16537", tween: [ "style", "${_next}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }            ]
        }
    }
},
"windowPresentationTitle": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    id: 'titulo',
                    rect: ['-130px', '-23px', '705px', '122px', 'auto', 'auto'],
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    fill: ['rgba(0,0,0,0)', 'images/windows/presentation/titulo.png', '0px', '0px']
                },
                {
                    rect: ['125px', '30px', '271px', '35px', 'auto', 'auto'],
                    id: 'contenedor',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0)']
                },
                {
                    rect: ['42px', '3px', '57px', '56px', 'auto', 'auto'],
                    id: 'logo',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["color", "background-color", 'rgba(192,192,192,0)'],
                ["style", "height", '56px'],
                ["style", "top", '3px'],
                ["style", "left", '42px'],
                ["style", "width", '57px']
            ],
            "${_contenedor}": [
                ["style", "top", '30px'],
                ["style", "height", '35px'],
                ["style", "left", '125px'],
                ["style", "width", '271px']
            ],
            "${_titulo}": [
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-130px'],
                ["transform", "scaleY", '0.63'],
                ["style", "top", '-23px']
            ],
            "${symbolSelector}": [
                ["style", "height", '77px'],
                ["style", "width", '444px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"sceneDesplazamientoFlechas": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    type: 'image',
                    id: 'desplazamientoFlecha',
                    display: 'none',
                    rect: ['-10px', '-8px', '54px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/scroll/desplazamientoFlecha.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.45', '0.45']],
                    type: 'image',
                    id: 'desplazamientoFlecha2',
                    display: 'none',
                    rect: ['-10px', '1px', '54px', '42px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/scroll/desplazamientoFlecha.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_desplazamientoFlecha}": [
                ["style", "top", '-8px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${_desplazamientoFlecha2}": [
                ["style", "top", '1px'],
                ["transform", "scaleY", '0.45'],
                ["transform", "scaleX", '0.45'],
                ["style", "left", '-10px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid5", tween: [ "style", "${_desplazamientoFlecha2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutCubic" },
                { id: "eid7", tween: [ "style", "${_desplazamientoFlecha2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0, easing: "easeOutCubic" },
                { id: "eid6", tween: [ "style", "${_desplazamientoFlecha}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" }            ]
        }
    }
},
"scene": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'fondo1',
                    type: 'image',
                    rect: ['-329px', '-229px', '1655px', '1115px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/fondo1.png', '0px', '0px']
                },
                {
                    id: 'characterMujer',
                    type: 'rect',
                    rect: ['727px', '95', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'characterHombre',
                    type: 'rect',
                    rect: ['1377px', '364px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'fondo2',
                    type: 'image',
                    rect: ['-324px', '429px', '1649px', '1122px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/fondo2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'fondo3',
                    type: 'image',
                    rect: ['-330px', '1096px', '1661px', '1116px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/fondo3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'decoracion2',
                    type: 'image',
                    rect: ['-409px', '444px', '1800px', '420px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/decoracion2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'decoracion3',
                    type: 'image',
                    rect: ['-256px', '599px', '744px', '684px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/decoracion3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'decoracion4',
                    type: 'image',
                    rect: ['522px', '805px', '696px', '672px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/decoracion4.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'decoracion5',
                    type: 'image',
                    rect: ['-193px', '1219px', '666px', '672px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/decoracion5.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'decoracion6',
                    type: 'image',
                    rect: ['557px', '1327px', '678px', '702px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/decoracion6.png', '0px', '0px']
                },
                {
                    id: 'sceneTitulo',
                    type: 'rect',
                    rect: ['194', '198', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'characterHombre',
                symbolName: 'characterHombre',
                autoPlay: {

               }
            },
            {
                id: 'sceneTitulo',
                symbolName: 'sceneTitulo',
                autoPlay: {

               }
            },
            {
                id: 'characterMujer',
                symbolName: 'characterMujer',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_characterHombre}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '-52px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-113px']
            ],
            "${_decoracion6}": [
                ["style", "top", '1327px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '557px'],
                ["transform", "scaleX", '0.63']
            ],
            "${_decoracion5}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '1219px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-193px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1986px'],
                ["style", "width", '1000px']
            ],
            "${_characterMujer}": [
                ["style", "left", '727px']
            ],
            "${_decoracion4}": [
                ["style", "top", '805px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '522px'],
                ["transform", "scaleX", '0.63']
            ],
            "${_fondo1}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '-229px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-329px']
            ],
            "${_decoracion3}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '599px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-256px']
            ],
            "${_fondo2}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '429px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-324px']
            ],
            "${_fondo3}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '1096px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-330px']
            ],
            "${_decoracion2}": [
                ["transform", "scaleX", '0.63'],
                ["style", "top", '444px'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-409px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"characterHombre": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'hombreCuerpo',
                    type: 'image',
                    rect: ['0px', '246px', '523px', '615px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/characters/hombre/hombreCuerpo.png', '0px', '0px']
                },
                {
                    id: 'characterHombreOjos',
                    type: 'rect',
                    rect: ['118', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'characterHombreOjos',
                symbolName: 'characterHombreOjos',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_characterHombreOjos}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg']
            ],
            "${_hombreCuerpo}": [
                ["style", "left", '0px'],
                ["style", "top", '246px']
            ],
            "${symbolSelector}": [
                ["style", "height", '861px'],
                ["style", "width", '523px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "transform", "${_characterHombreOjos}", "rotateZ", '4deg', { fromValue: '0deg'}], position: 1000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid11", tween: [ "transform", "${_characterHombreOjos}", "rotateZ", '0deg', { fromValue: '4deg'}], position: 2000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid12", tween: [ "transform", "${_characterHombreOjos}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 5000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid14", tween: [ "transform", "${_characterHombreOjos}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 6000, duration: 1000, easing: "easeOutCubic" }            ]
        }
    }
},
"characterHombreOjos": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'hombreCabeza',
                    type: 'image',
                    rect: ['0px', '0px', '267px', '317px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/characters/hombre/hombreCabeza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['1.01', '1.01']],
                    type: 'image',
                    id: 'hombreOjos',
                    display: 'none',
                    rect: ['89px', '110px', '159px', '77px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/characters/hombre/hombreOjos.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_hombreCabeza}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '317px'],
                ["style", "width", '267px']
            ],
            "${_hombreOjos}": [
                ["style", "top", '110px'],
                ["transform", "scaleY", '1.01'],
                ["style", "display", 'none'],
                ["style", "left", '89px'],
                ["transform", "scaleX", '1.01']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: true,
            timeline: [
                { id: "eid8", tween: [ "style", "${_hombreOjos}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutCubic" }            ]
        }
    }
},
"characterMujer": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'mujerCabeza',
                    type: 'image',
                    rect: ['-39px', '-158px', '382px', '452px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/characters/mujer/mujerCabeza.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'mujerCuerpo',
                    type: 'image',
                    rect: ['-85px', '82px', '462px', '610px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/characters/mujer/mujerCuerpo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_mujerCuerpo}": [
                ["style", "top", '82px'],
                ["transform", "scaleX", '0.63'],
                ["transform", "scaleY", '0.63'],
                ["style", "left", '-85px']
            ],
            "${_mujerCabeza}": [
                ["style", "top", '-158px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-39px'],
                ["style", "-webkit-transform-origin", [42.28,93.56], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [42.28,93.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [42.28,93.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [42.28,93.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [42.28,93.56],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [42.28,93.56],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '579px'],
                ["style", "width", '291px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "transform", "${_mujerCabeza}", "rotateZ", '3deg', { fromValue: '0deg'}], position: 0, duration: 1000, easing: "easeOutCubic" },
                { id: "eid26", tween: [ "transform", "${_mujerCabeza}", "rotateZ", '0deg', { fromValue: '3deg'}], position: 2000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid27", tween: [ "transform", "${_mujerCabeza}", "rotateZ", '-3deg', { fromValue: '0deg'}], position: 5000, duration: 1000, easing: "easeOutCubic" },
                { id: "eid29", tween: [ "transform", "${_mujerCabeza}", "rotateZ", '0deg', { fromValue: '-3deg'}], position: 8000, duration: 1000, easing: "easeOutCubic" }            ]
        }
    }
},
"sceneTitulo": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.63', '0.63']],
                    id: 'tituloEscenario',
                    type: 'image',
                    rect: ['-180px', '-58px', '972px', '312px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/escenario/tituloEscenario.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_tituloEscenario}": [
                ["style", "top", '-477px'],
                ["transform", "scaleY", '0.63'],
                ["transform", "scaleX", '0.63'],
                ["style", "left", '-161px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '197px'],
                ["style", "width", '612px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid77", tween: [ "style", "${_tituloEscenario}", "top", '-58px', { fromValue: '-477px'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-6204285");
