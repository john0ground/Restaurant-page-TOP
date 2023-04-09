(()=>{"use strict";var n={832:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto&display=swap);"]),a.push([n.id,":root {\n    --primary-color: #689B36;\n    --font-light: #E4EDDA;\n    --font-dark: #141313;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    color: var(--font-dark);\n}\n\nheader {\n    min-width: 100%;\n    height: 70px;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 60px 0 90px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n\n.logo {\n    font-family: 'Merriweather', sans-serif;\n    font-size: 19px;\n    color: rgb(238, 230, 230);\n}\n\nnav {\n    color: rgb(238, 230, 230);\n    display: flex;\n    justify-content: end;\n}\n\n.nav-break {\n    width: 2px;\n    background: rgb(238, 230, 230);\n}\n\nnav > *:not(:last-child) {\n    margin-right : 20px;\n}\n\nnav p:hover {\n    background: rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n/* #content {\n    border: 1px solid red;\n    margin: 0 auto;\n    max-width: 100%;\n} */\n\n.hero {\n    color: var(--font-light);\n    padding-top: 200px;\n}\n\n.hero-background {\n    position: fixed;\n    z-index: -1;\n    top: -30px;\n    width: 100%;\n    object-fit: cover;\n}\n\n.headline {\n    font-family: 'Merriweather', serif;\n    font-size: 2.5rem;\n    font-weight: lighter;\n}\n\n.headline,\n.sub-headline,\n.hero .line-styling {\n    margin-left: 90px;\n}\n\n.sub-headline {\n    font-size: 1.2rem;\n    max-width: 620px;\n    margin-top: 20px;\n    line-height: 1.6rem;\n}\n\n.line-styling {\n    height: 5px;\n    background: var(--primary-color);\n}\n\n.hero .line-styling {\n    width: 150px;\n    margin-top: 25px;\n}\n\n.about-us {\n    margin-top: 250px;\n    width: 100%;\n    padding: 80px 90px;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 80px;\n}\n\n.details-column {\n    width: 500px;\n}\n\n.about-us h1 {\n    color: #689B36;\n    font-family: 'Merriweather', serif;\n    font-size: 2rem;\n}\n\n.about-us p {\n    margin-top: 20px;\n    line-height: 1.3rem;\n}\n\n.about-us img {\n    height: 280px;\n    width: 280px;\n    object-fit: cover;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);\n}\n\n.about-us .line-styling {\n    width: 150px;\n    margin-top: 25px;\n}\n\n.specialties {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n\n.specialties main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 80px;\n}\n\n.specialties h1 {\n    color: var(--primary-color);\n    font-family: 'Merriweather', serif;\n    font-size: 2rem;\n}\n\n.specialties p {\n    color: var(--font-light);\n    margin-top: 20px;\n    width: 700px;\n    text-align: center;\n}\n\n.specialties-background {\n    width: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    z-index: -1;\n}\n\n.dish-gallery {\n    display: flex;\n    column-gap: 25px;\n    margin-top: 25px;\n}\n\n.specialty-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: white;\n    padding: 2px 2px 12px 2px;\n}\n\n.specialty-container img {\n    width: 170px;\n    height: 170px;\n    object-fit: cover;\n}\n\n.specialty-container p {\n    width: fit-content;\n    color: var(--font-dark);\n}\n\n#menu-btn {\n    margin-top: 25px;\n    font-size: 1.1rem;\n    background: var(--primary-color);\n    color: var(--font-light);\n    border: none;\n    padding: 0.5em 1.5em;\n}\n\n#menu-btn:hover {\n    background: #84b356;\n}\n\n.logo:hover,\n#menu-btn {\n    cursor: pointer;\n}",""]);const s=a},424:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),i=t.n(r),o=t(645),a=t.n(o)()(i());a.push([n.id,".menu-background {\n    width: 100%;\n    object-fit: cover;\n    position: fixed;\n    z-index: -1;\n}\n\n.menu-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.round-design {\n    margin-top: 120px;\n    width: 110px;\n    height: 110px;\n    background: var(--primary-color);\n    border-radius: 50%;\n    z-index: -1;\n    position: relative;\n    top: 38px;\n}\n\n.menu-title h1 {\n    font-family: 'Merriweather', serif;\n    font-size: 2.8rem;\n    letter-spacing: 3px;\n}\n\n.menu-restaurant-title {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n}\n\n.menu-restaurant-title h4 {\n    margin: 0 8px 0 8px;\n    letter-spacing: 3px;\n}\n\n.menu-restaurant-title .line-styling {\n    width: 60px;\n    height: 3px;\n    background: var(--font-dark);\n}\n\n.down-icon {\n    width: 50px;\n    margin-top: 60px;\n}\n\n.menu-gallery {\n    max-width: 950px;\n    background: var(--font-light);\n    margin: 0 auto;\n    margin-top: 45px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.dish-image {\n    grid-column: span 2;\n    height: 400px;\n}\n\n.dish-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.dish-details {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.dish-name {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.dish-details .line-styling {\n    width: 50px;\n    height: 4px;\n    background: var(--primary-color);\n    margin-top: 30px;\n}\n\n.dish-details .description {\n    text-align: center;\n    padding: 30px;\n    font-style: italic;\n    line-height: 1.5rem;\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var p=this[s][0];null!=p&&(a[p]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);r&&a[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],s=0;s<n.length;s++){var p=n[s],l=r.base?p[0]+r.base:p[0],c=o[l]||0,d="".concat(l," ").concat(c);o[l]=c+1;var u=t(d),f={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=t(o[a]);e[s].references--}for(var p=r(n,i),l=0;l<o.length;l++){var c=t(o[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}o=p}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),i=t.n(r),o=t(569),a=t.n(o),s=t(565),p=t.n(s),l=t(216),c=t.n(l),d=t(589),u=t.n(d),f=t(832),m={};m.styleTagTransform=u(),m.setAttributes=p(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=c(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(424),g={};g.styleTagTransform=u(),g.setAttributes=p(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals})()})();