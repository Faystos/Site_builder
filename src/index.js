import { model } from './js/model';
import Site from './js/classes/Site';
import Sidebar from './js/classes/Sidebar';
import './css/main.css';

new Site('#site').render(model);
new Sidebar('#panel', updtaneSite);

function updtaneSite(newBlock) {
 const newModel = [ newBlock ]
  new Site('#site').render(newModel);
}

