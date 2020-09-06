import { formSidebar } from '../utils';
import { TitleBlock } from './TitleBlock';
import { TextBlock } from './TextBlock';

export default class Sidebar {
  constructor(selector, cbUpdate) {
    this.$el = document.querySelector(selector);
    this.cbUpdate = cbUpdate;
    this.init();
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template () {
    return [
      formSidebar('title'),
      formSidebar('text') 
    ].join('');
  }

  addBlock(evt) {
    evt.preventDefault();
    const type = evt.target.name;
    const value = evt.target.value.value;
    const styles = evt.target.styles.value;

    const Constructor = type === 'text' ? TextBlock : TitleBlock;
    const newBlock = new Constructor(value, styles);
    this.cbUpdate(newBlock);
    
    evt.target.reset();
  }

}