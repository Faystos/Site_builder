import Block from './Block';
import { row, col } from '../utils';

export class TitleBlock extends Block {
  constructor(value, options) {
    super('title', value, options)
  }
  toHTML() {
    const { styles, tag = 'h1', className='', } = this.options;
    return row(col(`<${ tag }>${ this.value }</${ tag }>`), styles);
  }
}