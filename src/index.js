import './style.css';
import Icon from './images/icon.png';
import './modules/api.js';

const myIcon = new Image();
myIcon.src = Icon;

document.querySelector('.logo').appendChild(myIcon);
