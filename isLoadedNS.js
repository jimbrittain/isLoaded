"use strict";
/* global window, IMDebugger, document, window, __imns */
var adr = __imns('util.validation');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('isLoaded' in adr)){
    /**
      @function isLoaded
      @param elem {Element}
      @return {Boolean}
      @requires isHTMLElement, isNumber
      @description - attempts to determine if element resource has loaded, defaults to true if unable to successfully check
     **/
    adr.isLoaded = function(elem){
        var uv = __imns('util.validation');
        if(uv.isHTMLElement(elem) || elem === document){
            //ReadyState, uses two alternatives;
            var com = '';
            if('readyState' in elem){ 
                com = 'readyState'; 
            } else if('readystate' in elem){
                com = 'readystate'; }
            if(com !== ''){
                switch(elem[com]){
                    case 'complete':
                        return true;
                    case 'loading':
                        return false;
                    case 'interactive':
                        return false; }}
            if(uv.isNumber(elem[com])){ return (elem[com] > 3) ? true : false; }
            if('completed' in elem){ return elem.completed; }
            if('networkState' in elem){ return (elem.networkState === 1) ? true : false; }
            if('complete' in elem){
                var ud = __imns('util.dom');
                if(ud.isImageElement(elem)){
                    var src = ud.getAttribute(elem, 'src'),
                        srcset = ud.getAttribute(elem, 'srcset');
                    if(src === null || src === ''){
                        return (srcset === null || srcset === '') ? false : elem.complete;
                    } else { return elem.complete; }
                } else { return elem.complete; }}
            return true; }};
}
