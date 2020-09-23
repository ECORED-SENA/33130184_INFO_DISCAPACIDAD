/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'desplazamiento'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         // Reproducir la línea de tiempo en un momento o etiqueta específicos. Por ejemplo:
         // sym.play(500); o sym.play("myLabel");
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("sceneDesplazamiento");
   //Edge symbol end:'sceneDesplazamiento'

   //=========================================================
   
   //Edge symbol: 'menuEscena'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("menuEscena");
   //Edge symbol end:'menuEscena'

   //=========================================================
   
   //Edge symbol: 'menuEscenaBoton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("menuEscenaBoton");
   //Edge symbol end:'menuEscenaBoton'

   //=========================================================
   
   //Edge symbol: 'menuEscenaBotonLabel'
   (function(symbolName) {   
   
   })("menuEscenaBotonLabel");
   //Edge symbol end:'menuEscenaBotonLabel'

   //=========================================================
   
   //Edge symbol: 'menuEscenaBotonLogo'
   (function(symbolName) {   
   
   })("menuEscenaBotonLogo");
   //Edge symbol end:'menuEscenaBotonLogo'

   //=========================================================
   
   //Edge symbol: 'menuEscenaBotonBackground'
   (function(symbolName) {   
   
   })("menuEscenaBotonBackground");
   //Edge symbol end:'menuEscenaBotonBackground'

   //=========================================================
   
   //Edge symbol: 'subMenu4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("subMenu4");
   //Edge symbol end:'subMenu4'

   //=========================================================
   
   //Edge symbol: 'subMenu1ButtonLabel'
   (function(symbolName) {   
   
   })("subMenu1ButtonLabel");
   //Edge symbol end:'subMenu1ButtonLabel'

   //=========================================================
   
   //Edge symbol: 'subMenu4ButtonLogo'
   (function(symbolName) {   
   
   })("subMenu4ButtonLogo");
   //Edge symbol end:'subMenu4ButtonLogo'

   //=========================================================
   
   //Edge symbol: 'subMenu4ButtonBackground'
   (function(symbolName) {   
   
   })("subMenu4ButtonBackground");
   //Edge symbol end:'subMenu4ButtonBackground'

   //=========================================================
   
   //Edge symbol: 'subMenu4Button'
   (function(symbolName) {   
   
   })("subMenu4Button");
   //Edge symbol end:'subMenu4Button'

   //=========================================================
   
   //Edge symbol: 'subMenu3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("subMenu3");
   //Edge symbol end:'subMenu3'

   //=========================================================
   
   //Edge symbol: 'subMenu3Button'
   (function(symbolName) {   
   
   })("subMenu3Button");
   //Edge symbol end:'subMenu3Button'

   //=========================================================
   
   //Edge symbol: 'subMenu3ButtonLogo'
   (function(symbolName) {   
   
   })("subMenu3ButtonLogo");
   //Edge symbol end:'subMenu3ButtonLogo'

   //=========================================================
   
   //Edge symbol: 'subMenu1ButtonBackground'
   (function(symbolName) {   
   
   })("subMenu1ButtonBackground");
   //Edge symbol end:'subMenu1ButtonBackground'

   //=========================================================
   
   //Edge symbol: 'subMenu2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("subMenu2");
   //Edge symbol end:'subMenu2'

   //=========================================================
   
   //Edge symbol: 'subMenu2Button'
   (function(symbolName) {   
   
   })("subMenu2Button");
   //Edge symbol end:'subMenu2Button'

   //=========================================================
   
   //Edge symbol: 'subMenu2ButtonLogo'
   (function(symbolName) {   
   
   })("subMenu2ButtonLogo");
   //Edge symbol end:'subMenu2ButtonLogo'

   //=========================================================
   
   //Edge symbol: 'subMenu1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("subMenu1");
   //Edge symbol end:'subMenu1'

   //=========================================================
   
   //Edge symbol: 'subMenu1Button'
   (function(symbolName) {   
   
   })("subMenu1Button");
   //Edge symbol end:'subMenu1Button'

   //=========================================================
   
   //Edge symbol: 'subMenu1ButtonLogo'
   (function(symbolName) {   
   
   })("subMenu1ButtonLogo");
   //Edge symbol end:'subMenu1ButtonLogo'

   //=========================================================
   
   //Edge symbol: 'windowPresentationBack'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("windowPresentationBack");
   //Edge symbol end:'windowPresentationBack'

   //=========================================================
   
   //Edge symbol: 'windowPresentation'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("windowPresentation");
   //Edge symbol end:'windowPresentation'

   //=========================================================
   
   //Edge symbol: 'windowPresentationClose'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("windowPresentationClose");
   //Edge symbol end:'windowPresentationClose'

   //=========================================================
   
   //Edge symbol: 'windowPresentationPaginationButton'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // introducir código aquí
         sym.play();

      });
      //Edge binding end

   })("windowPresentationPaginationButton");
   //Edge symbol end:'windowPresentationPaginationButton'

   //=========================================================
   
   //Edge symbol: 'windowPresentationPagination'
   (function(symbolName) {   
   
   })("windowPresentationPagination");
   //Edge symbol end:'windowPresentationPagination'

   //=========================================================
   
   //Edge symbol: 'windowPresentationTitle'
   (function(symbolName) {   
   
   })("windowPresentationTitle");
   //Edge symbol end:'windowPresentationTitle'

   //=========================================================
   
   //Edge symbol: 'desplzamiento'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("sceneDesplazamientoFlechas");
   //Edge symbol end:'sceneDesplazamientoFlechas'

   //=========================================================
   
   //Edge symbol: 'escene'
   (function(symbolName) {   
   
   })("scene");
   //Edge symbol end:'scene'

   //=========================================================
   
   //Edge symbol: 'characterHombre'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("characterHombre");
   //Edge symbol end:'characterHombre'

   //=========================================================
   
   //Edge symbol: 'characterHombreOjos'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("characterHombreOjos");
   //Edge symbol end:'characterHombreOjos'

   //=========================================================
   
   //Edge symbol: 'characterMujer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.play(0);

      });
      //Edge binding end

   })("characterMujer");
   //Edge symbol end:'characterMujer'

   //=========================================================
   
   //Edge symbol: 'sceneTitulo'
   (function(symbolName) {   
   
   })("sceneTitulo");
   //Edge symbol end:'sceneTitulo'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(jQuery, AdobeEdge, "EDGE-6204285");