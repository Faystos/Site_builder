import { model } from './js/model';
import './css/main.css';

model.forEach(block => document.querySelector('#site').insertAdjacentHTML('beforeend', block.toHTML()));