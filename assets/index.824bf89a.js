!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((a,l)=>{const r=new URL(e,t);if(self[n].moduleMap[r])return a(self[n].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${n}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){l(new Error(`Failed to import: ${e}`)),o(c)},onload(){a(self[n].moduleMap[r]),o(c)}});document.head.appendChild(c)})),self[n].moduleMap={}}}("/assets/");let e=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getDay();const[{price:t,zone:o}]=[{day:"18/01/2022",hour:0,price:.274,zone:"valle"},{day:"18/01/2022",hour:1,price:.263,zone:"valle"},{day:"18/01/2022",hour:2,price:.261,zone:"valle"},{day:"18/01/2022",hour:3,price:.254,zone:"valle"},{day:"18/01/2022",hour:4,price:.254,zone:"valle"},{day:"18/01/2022",hour:5,price:.266,zone:"valle"},{day:"18/01/2022",hour:6,price:.285,zone:"valle"},{day:"18/01/2022",hour:7,price:.284,zone:"valle"},{day:"18/01/2022",hour:8,price:.32,zone:"llano"},{day:"18/01/2022",hour:9,price:.315,zone:"llano"},{day:"18/01/2022",hour:10,price:.37,zone:"punta"},{day:"18/01/2022",hour:11,price:.365,zone:"punta"},{day:"18/01/2022",hour:12,price:.364,zone:"punta"},{day:"18/01/2022",hour:13,price:.364,zone:"punta"},{day:"18/01/2022",hour:14,price:.293,zone:"llano"},{day:"18/01/2022",hour:15,price:.291,zone:"llano"},{day:"18/01/2022",hour:16,price:.299,zone:"llano"},{day:"18/01/2022",hour:17,price:.317,zone:"llano"},{day:"18/01/2022",hour:18,price:.415,zone:"punta"},{day:"18/01/2022",hour:19,price:.437,zone:"punta"},{day:"18/01/2022",hour:20,price:.422,zone:"punta"},{day:"18/01/2022",hour:21,price:.399,zone:"punta"},{day:"18/01/2022",hour:22,price:.314,zone:"llano"},{day:"18/01/2022",hour:23,price:.3,zone:"llano"}].filter((({hour:n})=>+n===e));e=e<10?`0${e}`:e,n=n<10?`0${n}`:n;const l=document.getElementById("price"),r=document.getElementById("titleWithHours"),s=document.getElementById("calendar");l.textContent=`${t}`,r.textContent="Son las "+e+":"+n;const c=document.getElementsByTagName("main")[0];var i;a>0&&a<=5?(s.innerHTML='<div class="container-calendar-element valle">\n          <span class="container-calendar-element-hour">00:00 - 08:00</span>\n          <span class="container-calendar-element-text">Hora valle</span>\n          <span class="container-calendar-element-text">La más barata</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">08:00 - 10:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>\n        <div class="container-calendar-element punta">\n          <span class="container-calendar-element-hour">10:00 - 14:00</span>\n          <span class="container-calendar-element-text">Hora punta</span>\n          <span class="container-calendar-element-text">La más cara</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">14:00 - 18:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>\n        <div class="container-calendar-element punta">\n          <span class="container-calendar-element-hour">18:00 - 22:00</span>\n          <span class="container-calendar-element-text">Hora punta</span>\n          <span class="container-calendar-element-text">La más cara</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">22:00 - 24:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>',c.style.backgroundColor="valle"===(i=o)?"#a2fcc1":"llano"===i?"#ffae3a":"#ec1d2f"):(s.innerHTML='<div class="container-calendar-element valle">\n          <span class="container-calendar-element-hour">00:00 - 24:00</span>\n          <span class="container-calendar-element-text">Sábado, Domingo y festivos nacionales</span>\n          <span class="container-calendar-element-text">Hora valle</span>\n          <span class="container-calendar-element-text">La más barata</span>\n        </div>',s.style.gridTemplateColumns="1fr",c.style.backgroundColor="#a2fcc1"),setTimeout((function(){document.getElementById("info").style.display="block"}),1300),"punta"===o?(yesNoMessage.textContent="NO",zoneMessage.textContent="ZONA PUNTA",principalMessage.textContent="Poner la lavadora sale caro, así que vete a pasear 🚶‍♂️",document.querySelector('link[rel~="icon"]').href="/assets/no-icon.629501ee.png"):"valle"===o?(yesNoMessage.textContent="SÍ",zoneMessage.textContent="ZONA VALLE",principalMessage.textContent="Aprovecha y pon la lavadora 🏊"):(yesNoMessage.textContent="SÍ",zoneMessage.textContent="ZONA LLANA",principalMessage.textContent="Si te urge mucho, pasa la aspiradora 🧹"),document.getElementById("btn_media").onclick=function(){var e=document.title,n=document.location.href;navigator.share?navigator.share({title:e,url:n}):window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e)+"&tw_p=tweetbutton&url="+encodeURIComponent(n))},setTimeout((()=>{location.reload()}),1e3*(0+60*(60-n)+0));
