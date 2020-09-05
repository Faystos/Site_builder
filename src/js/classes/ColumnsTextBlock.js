import Block from './Block';
import { row, col } from '../utils';

export class ColumnsTextBlock extends Block {
  constructor(value, options) {
    super('textColumns', value, options)
  }
  toHTML() {
    const { styles } = this.options;
    const html = this.value.map(item => col(`<p>${ item }</p>`));
    return row(html.join(''), styles);
  }
}