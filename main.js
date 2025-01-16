(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,":root {\n    --blue-theme: rgb(0, 102, 255);\n    --background0: rgb(241, 242, 249);\n    --bg-input: rgb(233, 229, 229);\n\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n\nbody {\n    background-color: black;\n    height: 100dvh;\n    overflow: hidden;\n}\n\nbutton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    color: var(--blue-theme);\n    gap: 0.6rem;\n    background-color: transparent;\n    font-size: 1.15rem;\n}\n\n.main {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100dvh;\n    padding: 0.75rem;\n    transition: all 300ms;\n    /* border-radius: 10px; */\n    background-color: var(--background0);\n}\n\nspan.pending {\n    color: var(--blue-theme);\n    font-weight: 300;\n    font-size: 3dvh;\n}\n\nspan.search {\n    color: grey;\n    font-weight: 300;\n    font-size: 3dvh;\n    padding: 0.25rem 0rem 0.25rem 0.25rem;\n\n}\n\n.top-tool {\n    display: flex;\n    position: sticky;\n    top: 0px;\n    justify-content: flex-end;\n    z-index: 12;\n    height: 3rem;\n    align-items: center;\n    border-bottom: 0.1px solid transparent;\n    background-color: var(--background0);\n    transition: all 300ms;\n    padding: 0rem 1rem 0rem 1rem;\n}\n\n.main>.top-tool {\n    padding: 0rem;\n    z-index: 0;\n}\n\n.white-bg {\n    background-color: rgba(255, 255, 255, 0.8);\n    backdrop-filter: blur(10px);\n}\n\n.bottom-border {\n    border-bottom: 0.1px solid rgb(189, 189, 189);\n}\n\n.search-input {\n    border: none;\n    background-color: var(--bg-input);\n    width: 80%;\n    height: 4dvh;\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n    font-size: 2dvh;\n    align-self: center;\n}\n\n.search {\n    height: 1.85rem;\n    border-radius: 9px;\n    margin-bottom: 1dvh;\n}\n\n.search-input:focus {\n    outline: none;\n}\n\n.search-bar {\n    display: flex;\n    /* justify-content: center; */\n    /* align-items: center; */\n    background-color: var(--bg-input);\n    /* height: 1.75rem; */\n    border-radius: 8px;\n}\n\n.organize span {\n    color: white;\n    padding: 5px;\n}\n\nspan.today {\n    /* height: max-content; */\n    background-color: rgb(69, 69, 238);\n    border-radius: 50px;\n    position: relative;\n}\n\n.organize {\n    margin-top: 3dvh;\n    margin-bottom: 4dvh;\n}\n\n.card {\n    background-color: white;\n    border-radius: 9px;\n}\n\n.card-contents {\n    padding: 0.25rem 1rem 1rem 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n\n}\n\n.icon-and-count {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    /* align-items: flex-start; */\n}\n\n.item-count {\n    display: inline;\n    font-family: monospace;\n    font-weight: bold;\n    font-size: 5dvh;\n    align-self: flex-start;\n}\n\n.calendar_month {\n    background-color: rgb(238, 69, 69);\n    /* position: relative; */\n}\n\n.inventory_2 {\n    background-color: rgb(34, 34, 34);\n}\n\n.flag_2 {\n    background-color: rgb(255, 175, 55);\n}\n\n.check {\n    background-color: rgb(89, 89, 89);\n}\n\n.organize {\n    display: grid;\n    grid-template-columns: repeat(2, 48%);\n    row-gap: 4%;\n    column-gap: 3%;\n    justify-content: center;\n}\n\n.my-lists {\n    margin-left: 1rem;\n}\n.lists {\n    margin-bottom: auto;\n}\n\n.space-between {\n    display: flex;\n    justify-content: space-between;\n}\n\n.add {\n    color: white;\n    background-color: var(--blue-theme);\n}\n\n.new-reminder {\n    font-size: 0.95rem;\n    font-weight:560;\n}\n\n.list-wrap {\n    position: relative;\n    background-color: var(--background0);\n    z-index: 10;\n    height: 95dvh;\n    border-radius: 15px 15px 0px 0px;\n    box-shadow: 0px -1px 10px grey;\n    transition: all 300ms;\n    overflow: scroll;\n}\n\n.color-span-wrap, .icon-span-wrap {\n    display: inline-flex;\n    height: calc((100% - 1.6rem)/7);\n    /* width: calc((100% - 1.6rem)/7); */\n    padding: 0.25rem;\n    border-radius: 50px;\n    justify-content: center;\n    align-items: center;\n}\n\n\n.wrap-center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nspan.color, span.icon {\n    height: 2.5rem;\n    width: 2.5rem;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.circle {\n    padding: 0.25rem;\n    border-radius: 50px;\n}\n\n.circle-select {\n    border: 2.25px solid rgb(176, 176, 176);\n}\n\n.circle-not-select {\n    border: 2.25px solid transparent;\n\n}\n\n.card-wrap {\n    background-color: white;\n    padding: 0.8rem;\n    border-radius: 10px;\n}\n\nspan.icon {\n    background-color: rgb(240, 238, 238);\n}\n\nbutton:disabled {\n    color: grey;\n}\n\nspan.big-icon {\n    color: white;\n    font-size: 4rem;\n    padding: 0.5rem;\n}\n\n.init {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 0.25rem;\n}\n\n#list-name {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--bg-input);\n    /* height: 2rem; */\n    font-size: 1.85rem;\n    padding: 0.35rem 0rem 0.35rem 0rem;\n    border: none;\n    border-radius: 10px;\n    margin-top: 1rem;\n}\n\n.big-icon {\n    margin-top: 0.15rem;\n}\n\nspan.new-list {\n    font-size: 1.55rem;\n}",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var r=t(72),o=t.n(r),a=t(825),i=t.n(a),c=t(659),s=t.n(c),l=t(56),d=t.n(l),p=t(540),u=t.n(p),m=t(113),g=t.n(m),b=t(365),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(b.A,f),b.A&&b.A.locals&&b.A.locals;const v=["list","bookmark","keep","featured_seasonal_and_gifts","cake","school","personal_bag","design_services","description","import_contacts","wallet","credit_card","payments","exercise","restaurant","wine_bar","pill","stethoscope","weekend","house","apartment","account_balance","camping","tv","music_note","shopping_cart","shopping_basket","diversity_3","bath_private","directions_car","work","content_cut","sports_esports","headphones","pets","spa","dark_mode","wb_sunny","beach_access","flight","local_library","map","camera_alt","emoji_events","settings","alarm","event","eco","emoji_food_beverage","fingerprint","health_and_safety","wifi","bluetooth","battery_charging_full","local_offer","mail","phone","verified","sync","photo","security","science","cloud","construction","crop","face","filter","flare","language","lock","mic","note","palette","person","power","print","save","timer"],h=["red","orange","gold","green","skyblue","royalblue","purple","indianred","violet","rosybrown","grey","salmon"],y=function(){const n=document.createElement("div");n.classList.add("list-wrap"),n.innerHTML='\n    <div class="new-list-card">\n        <div class="top-tool space-between">\n            <button class="cancel">Cancel</button>\n            <span class="new-list">New List</span>\n            <button class="done">Done</button>\n        </div>\n        <div class="card-contents">\n            <div class="init card-wrap">\n                <div class="big-icon">\n\n                </div>\n                <input id="list-name" type="text" placeholder="List Name">\n            </div>\n\n            <div class="wrap-center">\n                <div class="color-wrap card-wrap"></div>\n            </div>\n            \n            <div class="wrap-center icon-wrap-center">\n                <div class="icons-wrap card-wrap"></div>\n            </div>\n        <div/>\n    \n    </div>\n    ',n.style.transform="translateY(10%)";const e=n.querySelector("button.done"),t=n.querySelector("button.cancel"),r=n.querySelector(".big-icon"),o=document.createElement("span"),a=document.querySelector(".main");e.disabled=!0;const i=n.querySelector(".color-wrap");let c="royalblue";h.forEach((n=>{const e=document.createElement("span");"royalblue"===n?e.classList.add("color-span-wrap","circle-select"):e.classList.add("color-span-wrap","circle-not-select");const t=document.createElement("span");t.classList.add("color","circle",`${n}`),t.style.backgroundColor=`${n}`,t.addEventListener("click",(e=>{c=n,e.target.parentElement.classList.add("circle-select"),e.target.parentElement.classList.remove("circle-not-select"),e.target.parentElement.parentElement.childNodes.forEach((e=>{e.firstChild.classList.contains(n)?(e.classList.remove("circle-not-select"),e.classList.add("circle-select")):(e.classList.add("circle-not-select"),e.classList.remove("circle-select"))})),o.style.backgroundColor=`${c}`})),e.append(t),i.appendChild(e)}));const s=n.querySelector(".icons-wrap");let l,d="list";v.forEach((n=>{const e=document.createElement("span");"list"===n?e.classList.add("icon-span-wrap","circle-select"):e.classList.add("icon-span-wrap","circle-not-select");const t=document.createElement("span");t.classList.add("icon","circle",`${n}`,"material-symbols-outlined"),t.textContent=`${n}`,t.addEventListener("click",(e=>{d=n,e.target.parentElement.classList.add("circle-select"),e.target.parentElement.classList.remove("circle-not-select"),e.target.parentElement.parentElement.childNodes.forEach((e=>{e.firstChild.classList.contains(n)?(e.classList.remove("circle-not-select"),e.classList.add("circle-select")):(e.classList.add("circle-not-select"),e.classList.remove("circle-select"))})),o.textContent=`${d}`})),e.append(t),s.appendChild(e)})),n.querySelector("#list-name").addEventListener("input",(n=>{n.preventDefault(),n.target.value&&(e.disabled=!1),l=n.target.value})),o.classList.add("circle","big-icon","material-symbols-outlined"),o.textContent=`${d}`,o.style.backgroundColor=`${c}`,r.append(o);const p=n.querySelector(".top-tool"),u=n.querySelector(".init");n.addEventListener("scroll",(n=>{let e=p.getBoundingClientRect().bottom;u.getBoundingClientRect().top<=e?p.classList.add("white-bg","bottom-border"):p.classList.remove("white-bg","bottom-border")}));const m=function(){requestAnimationFrame((()=>{n.style.transform="translateY(10%)",a.style.transform="scale(1)",a.style.borderRadius="0px"})),setTimeout((function(){n.parentElement.removeChild(n)}),300)};return t.addEventListener("click",(n=>{n.preventDefault(),m()})),e.addEventListener("click",(n=>{var e,t,r;n.preventDefault(),m(),e=d,t=c,r=l,console.log({icon:e,color:t,name:r})})),n}(),x=document.querySelector("button.add-list"),w=(document.querySelector("button.new-reminder"),document.querySelector(".main")),k=document.querySelector("body");x.addEventListener("click",(n=>{n.preventDefault(),k.append(y),requestAnimationFrame((()=>{y.style.height="98dvh",y.style.transform="translateY(-98%)",w.style.borderRadius="10px",w.style.transform="scale(0.95)"}))}))})();