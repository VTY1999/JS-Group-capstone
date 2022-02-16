import './style.css';
import Icon from './images/icon.png';
import './apipop.js';

const myIcon = new Image();
myIcon.src = Icon;

document.querySelector('.logo').appendChild(myIcon);
