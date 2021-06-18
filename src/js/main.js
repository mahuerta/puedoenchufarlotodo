import './../css/styless.css';
import data from '../../public/postprocessed-cost.json';
import { week, weekEnd } from './templates.js';
import { reloadPage, share } from './utils.js';

let userHour = new Date().getHours();
let userMinutes = new Date().getMinutes();
let userDay = new Date().getDay();

const [{ price, zone }] = data.filter(({ hour }) => +hour === userHour);
const filterDataByUserHour = data.filter(({ hour }) => +hour > userHour);

userHour = userHour < 10 ? `0${userHour}` : userHour;
userMinutes = userMinutes < 10 ? `0${userMinutes}` : userMinutes;

const priceElement = document.getElementById('price');
const hoursElement = document.getElementById('titleWithHours');
const calendar = document.getElementById('calendar');

priceElement.textContent = `${price}`;
hoursElement.textContent =
    "Son las " + userHour + ":" + (userMinutes);

const getZone = zone =>
  zone === 'valle' ? '#a2fcc1' : zone === 'llano' ? '#ffae3a' : '#ec1d2f';

const mainElement = document.getElementsByTagName('main')[0];

if (userDay > 0 && userDay <= 5) {
  calendar.innerHTML = week;
  mainElement.style.backgroundColor = getZone(zone);
} else {
  calendar.innerHTML = weekEnd;
  calendar.style.gridTemplateColumns = '1fr';
  mainElement.style.backgroundColor = '#a2fcc1';
}

setTimeout(function () {
  document.getElementById('info').style.display = 'block';
}, 1300);

if (zone === 'punta') {
  yesNoMessage.textContent = 'NO';
  zoneMessage.textContent = 'ZONA PUNTA';
  principalMessage.textContent =
    'Poner la lavadora sale caro, así que vete a pasear 🚶‍♂️';
  document.querySelector('link[rel~="icon"]').href = 'no-icon.png';
} else if (zone === 'valle') {
  yesNoMessage.textContent = 'SÍ';
  zoneMessage.className = 'green';
  zoneMessage.textContent = 'ZONA VALLE';
  principalMessage.textContent = 'Aprovecha y pon la lavadora 🏊';
} else {
  yesNoMessage.textContent = 'SÍ';
  zoneMessage.textContent = 'ZONA LLANA';
  principalMessage.textContent = 'Si te urge mucho, pasa la aspiradora 🧹';
}

/**
 * Share button Twitter
 */
document.getElementById('btn_media').onclick = share;

/**
 * Reload Page when mins stay on :00
 */
reloadPage(userMinutes);
