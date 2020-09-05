import Block from './Block';
import { row, col } from '../utils';

export class TextBlock extends Block {
  constructor(value, options) {
    super('text', value, options)
  }
  toHTML() {
    const { styles, tag, className } = this.options;
    return row(col(`<${ tag } class = "${ className }">${ this.value }</${ tag }>`), styles);
  }
}