(()=>{"use strict";var n={832:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto&display=swap);"]),r.push([n.id,":root {\n    --primary-color: #689B36;\n    --font-light: #E4EDDA;\n    --font-dark: #141313;\n}\n\n*, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', sans-serif;\n    color: var(--font-dark);\n}\n\nheader {\n    min-width: 100%;\n    height: 70px;\n    background: var(--primary-color);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 60px 0 90px;\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n\n.logo {\n    font-family: 'Merriweather', sans-serif;\n    font-size: 19px;\n    color: rgb(238, 230, 230);\n}\n\nnav {\n    color: rgb(238, 230, 230);\n    display: flex;\n    justify-content: end;\n}\n\n.nav-break {\n    width: 2px;\n    background: rgb(238, 230, 230);\n}\n\nnav > *:not(:last-child) {\n    margin-right : 20px;\n}\n\nnav p:hover {\n    background: rgba(255, 255, 255, 0.3);\n    cursor: pointer;\n}\n\n/* #content {\n    border: 1px solid red;\n    margin: 0 auto;\n    max-width: 100%;\n} */\n\n.hero {\n    color: var(--font-light);\n    padding-top: 200px;\n}\n\n.hero-background {\n    position: fixed;\n    z-index: -1;\n    top: -30px;\n    width: 100%;\n    object-fit: cover;\n}\n\n.headline {\n    font-family: 'Merriweather', serif;\n    font-size: 2.5rem;\n    font-weight: lighter;\n}\n\n.headline,\n.sub-headline,\n.hero .line-styling {\n    margin-left: 90px;\n}\n\n.sub-headline {\n    font-size: 1.2rem;\n    max-width: 620px;\n    margin-top: 20px;\n    line-height: 1.6rem;\n}\n\n.line-styling {\n    height: 5px;\n    background: var(--primary-color);\n}\n\n.hero .line-styling {\n    width: 150px;\n    margin-top: 25px;\n}\n\n.about-us {\n    margin-top: 250px;\n    width: 100%;\n    padding: 80px 90px;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    column-gap: 80px;\n}\n\n.details-column {\n    width: 500px;\n}\n\n.about-us h1 {\n    color: #689B36;\n    font-family: 'Merriweather', serif;\n    font-size: 2rem;\n}\n\n.about-us p {\n    margin-top: 20px;\n    line-height: 1.3rem;\n}\n\n.about-us img {\n    height: 280px;\n    width: 280px;\n    object-fit: cover;\n    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);\n}\n\n.about-us .line-styling {\n    width: 150px;\n    margin-top: 25px;\n}\n\n.specialties {\n    position: relative;\n    display: flex;\n    justify-content: center;\n}\n\n.specialties main {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 80px;\n}\n\n.specialties h1 {\n    color: var(--primary-color);\n    font-family: 'Merriweather', serif;\n    font-size: 2rem;\n}\n\n.specialties p {\n    color: var(--font-light);\n    margin-top: 20px;\n    width: 700px;\n    text-align: center;\n}\n\n.specialties-background {\n    width: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    z-index: -1;\n}\n\n.dish-gallery {\n    display: flex;\n    column-gap: 25px;\n    margin-top: 25px;\n}\n\n.specialty-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: white;\n    padding: 2px 2px 12px 2px;\n}\n\n.specialty-container img {\n    width: 170px;\n    height: 170px;\n    object-fit: cover;\n}\n\n.specialty-container p {\n    width: fit-content;\n    color: var(--font-dark);\n}\n\n#menu-btn {\n    margin-top: 25px;\n    font-size: 1.1rem;\n    background: var(--primary-color);\n    color: var(--font-light);\n    border: none;\n    padding: 0.5em 1.5em;\n}\n\n#menu-btn:hover {\n    background: #84b356;\n}\n\n.logo:hover,\n#menu-btn {\n    cursor: pointer;\n}",""]);const s=r},424:(n,e,t)=>{t.d(e,{Z:()=>s});var i=t(81),a=t.n(i),o=t(645),r=t.n(o)()(a());r.push([n.id,".menu-background {\n    width: 100%;\n    object-fit: cover;\n    position: fixed;\n    z-index: -1;\n}\n\n.menu-title {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.round-design {\n    margin-top: 120px;\n    width: 110px;\n    height: 110px;\n    background: var(--primary-color);\n    border-radius: 50%;\n    z-index: -1;\n    position: relative;\n    top: 38px;\n}\n\n.menu-title h1 {\n    font-family: 'Merriweather', serif;\n    font-size: 2.8rem;\n    letter-spacing: 3px;\n}\n\n.menu-restaurant-title {\n    display: flex;\n    align-items: center;\n    margin-top: 20px;\n}\n\n.menu-restaurant-title h4 {\n    margin: 0 8px 0 8px;\n    letter-spacing: 3px;\n}\n\n.menu-restaurant-title .line-styling {\n    width: 60px;\n    height: 3px;\n    background: var(--font-dark);\n}\n\n.down-icon {\n    width: 50px;\n    margin-top: 60px;\n}\n\n.menu-gallery {\n    max-width: 950px;\n    background: var(--font-light);\n    margin: 0 auto;\n    margin-top: 45px;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n}\n\n.dish-image {\n    grid-column: span 2;\n    height: 400px;\n}\n\n.dish-image img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.dish-details {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.dish-name {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n.dish-details .line-styling {\n    width: 50px;\n    height: 4px;\n    background: var(--primary-color);\n    margin-top: 30px;\n}\n\n.dish-details .description {\n    text-align: center;\n    padding: 30px;\n    font-style: italic;\n    line-height: 1.5rem;\n}",""]);const s=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var o={},r=[],s=0;s<n.length;s++){var d=n[s],c=i.base?d[0]+i.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=a(u,i);i.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var r=0;r<o.length;r++){var s=t(o[r]);e[s].references--}for(var d=i(n,a),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,a&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={id:i,exports:{}};return n[i](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),i=t(795),a=t.n(i),o=t(569),r=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),m=t.n(p),u=t(832),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=r().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var g=t(424),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals,(()=>{const n=document.querySelector("#content"),e=document.createElement("img");e.setAttribute("src","../images/wood-background.jpg"),e.setAttribute("alt","white-wood-background"),e.classList.add("menu-background");const t=document.createElement("section");t.classList.add("menu-title");const i=document.createElement("div");i.classList.add("round-design"),t.appendChild(i);const a=document.createElement("h1");a.textContent="MENU",t.appendChild(a);const o=document.createElement("div");o.classList.add("menu-restaurant-title"),t.appendChild(o);const r=document.createElement("div");r.classList.add("line-styling"),o.appendChild(r);const s=document.createElement("h4");s.textContent="RAMEN RHAPSODY",o.appendChild(s);const d=document.createElement("div");d.classList.add("line-styling"),o.appendChild(d);const c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.classList.add("down-icon"),c.setAttribute("viewBox","0 0 24 24"),c.setAttribute("fill","none");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("fill-rule","evenodd"),l.setAttribute("clip-rule","evenodd"),l.setAttribute("d","M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"),l.setAttribute("fill","#628a3a"),c.appendChild(l),t.appendChild(c);const p=document.createElement("section");p.classList.add("menu-gallery");const m=document.createElement("div");m.classList.add("dish-details");const u=document.createElement("p");u.classList.add("dish-name"),u.textContent="Shoyu Ramen";const h=document.createElement("div");h.classList.add("line-styling");const g=document.createElement("p");g.classList.add("description"),g.textContent="A ramen compared to a salty symphony - with each ingredient playing a different note, but the soy sauce taking center stage. It's the secret ingredient that brings all the flavors together in perfect harmony, like a maestro conducting a delicious orchestra.",m.appendChild(u),m.appendChild(h),m.appendChild(g);const f=document.createElement("div");f.classList.add("dish-image");const y=document.createElement("img");y.setAttribute("src","../images/shoyu.jpg"),y.setAttribute("alt","shoyu ramen"),f.appendChild(y),p.appendChild(m),p.appendChild(f);const x=document.createElement("div");x.classList.add("dish-image");const v=document.createElement("img");v.setAttribute("src","../images/spicy-beef.jpg"),v.setAttribute("alt","spicy beef ramen"),x.appendChild(v);const b=document.createElement("div");b.classList.add("dish-details");const w=document.createElement("p");w.classList.add("dish-name"),w.textContent="Spicy Beef Ramen";const C=document.createElement("div");C.classList.add("line-styling");const E=document.createElement("p");E.classList.add("description"),E.textContent="A rollercoaster ride in a bowl - with twists and turns of savory beef, chewy noodles, and a spicy broth that'll have you screaming for more. Just be sure to buckle up and hold onto your chopsticks, it's one spicy adventure you won't forget.",b.appendChild(w),b.appendChild(C),b.appendChild(E),p.appendChild(x),p.appendChild(b);const k=document.createElement("div");k.classList.add("dish-details");const L=document.createElement("p");L.classList.add("dish-name"),L.textContent="Shio Ramen";const A=document.createElement("div");A.classList.add("line-styling");const j=document.createElement("p");j.classList.add("description"),j.textContent="Shio ramen is like a breath of fresh air - light, crisp, and oh so satisfying. Its chicken broth base is the perfect complement to its simple yet delicious flavor, making it a noodle dish that you can enjoy anytime, anywhere.",k.appendChild(L),k.appendChild(A),k.appendChild(j);const M=document.createElement("div");M.classList.add("dish-image");const S=document.createElement("img");S.setAttribute("src","../images/shio.jpg"),S.setAttribute("alt","shio ramen"),M.appendChild(S),p.appendChild(k),p.appendChild(M);const z=document.createElement("div");z.classList.add("dish-image");const T=document.createElement("img");T.setAttribute("src","../images/ichiraku.webp"),T.setAttribute("alt","ichiraku ramen"),z.appendChild(T);const I=document.createElement("div");I.classList.add("dish-details");const R=document.createElement("p");R.classList.add("dish-name"),R.textContent="Ichiraku Ramen";const Z=document.createElement("div");Z.classList.add("line-styling");const N=document.createElement("p");N.classList.add("description"),N.textContent="It's like a warm hug from your favorite anime character. This ramen will let you feel like you're living your own personal anime moment. It's a noodle dish that's so flavorful, you'll swear you can hear the catchy theme song playing in the background.",I.appendChild(R),I.appendChild(Z),I.appendChild(N),p.appendChild(z),p.appendChild(I);const P=document.createElement("div");P.classList.add("dish-details");const O=document.createElement("p");O.classList.add("dish-name"),O.textContent="Tonkotsu Ramen";const B=document.createElement("div");B.classList.add("line-styling");const D=document.createElement("p");D.classList.add("description"),D.textContent="Tonkotsu ramen is like a bowl of liquid gold - except instead of precious minerals, you're slurping up rich, creamy pork broth that's been simmered to perfection for hours. It's so good, you might even start speaking in pig latin after your first bite!",P.appendChild(O),P.appendChild(B),P.appendChild(D);const q=document.createElement("div");q.classList.add("dish-image");const H=document.createElement("img");H.setAttribute("src","../images/tonkotsu.jpg"),H.setAttribute("alt","tonkotsu ramen"),q.appendChild(H),p.appendChild(P),p.appendChild(q),n.appendChild(e),n.appendChild(t),n.appendChild(p)})()})()})();