"use strict";
/* global window, IMDebugger, document, window, isNumber, isHTMLElement, getAttributer, isImageElement */
/**
  @function isLoaded
  @param elem {Element}
  @return {Boolean}
  @requires isHTMLElement, isNumber
  @description - attempts to determine if element resource has loaded, defaults to true if unable to successfully check, does not check validity
                 of src/error of load etc. Just if the load has completed;
 **/
var isLoaded = function(elem){
    if(isHTMLElement(elem) || elem === document){
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
        if(isNumber(elem[com])){ return (elem[com] > 3) ? true : false; }
        if('completed' in elem){ return elem.completed; }
        if('networkState' in elem){ return (elem.networkState === 1) ? true : false; }
        if('complete' in elem){
            if(isImageElement(elem)){
                var src = getAttributer(elem, 'src');
                var srcset = getAttributer(elem, 'srcset');
                if(src === null || src === ''){
                    return (srcset === null || srcset === '') ? false : elem.complete;
                } else { return elem.complete; }
            } else { return elem.complete; }}
        return true; }};
