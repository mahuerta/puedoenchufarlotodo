!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(a){const t=new URL(e,location),l=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((a,o)=>{const r=new URL(e,t);if(self[n].moduleMap[r])return a(self[n].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${n}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){o(new Error(`Failed to import: ${e}`)),l(c)},onload(){a(self[n].moduleMap[r]),l(c)}});document.head.appendChild(c)})),self[n].moduleMap={}}}("/assets/");let e=(new Date).getHours(),n=(new Date).getMinutes(),a=(new Date).getDay();const[{price:t,zone:l}]=[{day:"01/01/2022",hour:0,price:.204,zone:"valle"},{day:"01/01/2022",hour:1,price:.171,zone:"valle"},{day:"01/01/2022",hour:2,price:.172,zone:"valle"},{day:"01/01/2022",hour:3,price:.156,zone:"valle"},{day:"01/01/2022",hour:4,price:.159,zone:"valle"},{day:"01/01/2022",hour:5,price:.157,zone:"valle"},{day:"01/01/2022",hour:6,price:.158,zone:"valle"},{day:"01/01/2022",hour:7,price:.157,zone:"valle"},{day:"01/01/2022",hour:8,price:.156,zone:"valle"},{day:"01/01/2022",hour:9,price:.118,zone:"valle"},{day:"01/01/2022",hour:10,price:.122,zone:"valle"},{day:"01/01/2022",hour:11,price:.127,zone:"valle"},{day:"01/01/2022",hour:12,price:.139,zone:"valle"},{day:"01/01/2022",hour:13,price:.141,zone:"valle"},{day:"01/01/2022",hour:14,price:.143,zone:"valle"},{day:"01/01/2022",hour:15,price:.147,zone:"valle"},{day:"01/01/2022",hour:16,price:.172,zone:"valle"},{day:"01/01/2022",hour:17,price:.212,zone:"valle"},{day:"01/01/2022",hour:18,price:.24,zone:"valle"},{day:"01/01/2022",hour:19,price:.244,zone:"valle"},{day:"01/01/2022",hour:20,price:.247,zone:"valle"},{day:"01/01/2022",hour:21,price:.248,zone:"valle"},{day:"01/01/2022",hour:22,price:.248,zone:"valle"},{day:"01/01/2022",hour:23,price:.229,zone:"valle"}].filter((({hour:n})=>+n===e));e=e<10?`0${e}`:e,n=n<10?`0${n}`:n;const o=document.getElementById("price"),r=document.getElementById("titleWithHours"),s=document.getElementById("calendar");o.textContent=`${t}`,r.textContent="Son las "+e+":"+n;const c=document.getElementsByTagName("main")[0];var i;a>0&&a<=5?(s.innerHTML='<div class="container-calendar-element valle">\n          <span class="container-calendar-element-hour">00:00 - 08:00</span>\n          <span class="container-calendar-element-text">Hora valle</span>\n          <span class="container-calendar-element-text">La más barata</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">08:00 - 10:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>\n        <div class="container-calendar-element punta">\n          <span class="container-calendar-element-hour">10:00 - 14:00</span>\n          <span class="container-calendar-element-text">Hora punta</span>\n          <span class="container-calendar-element-text">La más cara</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">14:00 - 18:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>\n        <div class="container-calendar-element punta">\n          <span class="container-calendar-element-hour">18:00 - 22:00</span>\n          <span class="container-calendar-element-text">Hora punta</span>\n          <span class="container-calendar-element-text">La más cara</span>\n        </div>\n        <div class="container-calendar-element intermedia">\n          <span class="container-calendar-element-hour">22:00 - 24:00</span>\n          <span class="container-calendar-element-text">Hora llana</span>\n          <span class="container-calendar-element-text">Intermedia</span>\n        </div>',c.style.backgroundColor="valle"===(i=l)?"#a2fcc1":"llano"===i?"#ffae3a":"#ec1d2f"):(s.innerHTML='<div class="container-calendar-element valle">\n          <span class="container-calendar-element-hour">00:00 - 24:00</span>\n          <span class="container-calendar-element-text">Sábado, Domingo y festivos nacionales</span>\n          <span class="container-calendar-element-text">Hora valle</span>\n          <span class="container-calendar-element-text">La más barata</span>\n        </div>',s.style.gridTemplateColumns="1fr",c.style.backgroundColor="#a2fcc1"),setTimeout((function(){document.getElementById("info").style.display="block"}),1300),"punta"===l?(yesNoMessage.textContent="NO",zoneMessage.textContent="ZONA PUNTA",principalMessage.textContent="Poner la lavadora sale caro, así que vete a pasear 🚶‍♂️",document.querySelector('link[rel~="icon"]').href="/assets/no-icon.629501ee.png"):"valle"===l?(yesNoMessage.textContent="SÍ",zoneMessage.textContent="ZONA VALLE",principalMessage.textContent="Aprovecha y pon la lavadora 🏊"):(yesNoMessage.textContent="SÍ",zoneMessage.textContent="ZONA LLANA",principalMessage.textContent="Si te urge mucho, pasa la aspiradora 🧹"),document.getElementById("btn_media").onclick=function(){var e=document.title,n=document.location.href;navigator.share?navigator.share({title:e,url:n}):window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(e)+"&tw_p=tweetbutton&url="+encodeURIComponent(n))},setTimeout((()=>{location.reload()}),1e3*(0+60*(60-n)+0));
