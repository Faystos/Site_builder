import Block from './Block';
import { row, col } from '../utils';

export class ImgBlock extends Block {
  constructor(value, options) {
    super('image', value, options)
  }
  toHTML() {
    const html = `<img src="${this.value}"/>`;
    return row(html);
  }
}