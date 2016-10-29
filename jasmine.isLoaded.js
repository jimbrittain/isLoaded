"use strict";
var __imns = function(){ return window; }
describe("isLoaded Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/f/isHTMLElement/isHTMLElement.js',
            'dist/f/isNumber/isNumber.js',
            'dist/f/isImageElement/isImageElement.js',
            'dist/f/findAttribute/findAttribute.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }


        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];
        var divElem = document.createElement('div');
        var validImgElem = document.createElement('img');
        validImgElem.src = 'http://www.google.co.uk/images/branding/googleg/1x/googleg_standard_color_128dp.png';
        var invalidImgElem = document.createElement('img');
        invalidImgElem.src = '';
        var imageObject = new Image();
        imageObject.src = 'http://www.google.co.uk/images/branding/googleg/1x/googleg_standard_color_128dp.png';

    it("isLoaded is a function", function(){ expect(typeof adr.isLoaded === 'function').toBe(true); });
    it("isLoaded: {divElement} = true", function(){ expect(adr.isLoaded(divElem)).toBe(true); });
    it("isLoaded: {valid Img Element} = true", function(){ expect(adr.isLoaded(validImgElem)).toBe(true); });
    it("isLoaded: {invalid Img Element} = true", function(){ expect(adr.isLoaded(invalidImgElem)).toBe(false); });
    it("isLoaded: {valid Object Element} = false", function(){ expect(adr.isLoaded(imageObject)).toBe(true); });
});
