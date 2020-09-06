import img from '../img/js.png';
import { TitleBlock } from './classes/TitleBlock';
import { TextBlock } from './classes/TextBlock';
import { ColumnsTextBlock } from './classes/ColumnsTextBlock';
import { ImgBlock } from './classes/ImgBlock'; 
import { css } from './utils';

export const model = [
  new TitleBlock('Мой конструктор сайтов!', {    
    tag: 'h1',    
    styles: css({
      'text-align': 'center;',
      'widht': '100%;',
      'height': '100px;',
      'background': '#4D4234',
      'color': '#FFFFFF'
    }),
  }),
  new TextBlock('Учебный проект "Конструктор сайтов" написанный на чистом JS', {    
    tag: 'p',
    styles: css({
      'color': 'red'
    }),    
  }),
  new ColumnsTextBlock([
    'Используется только нативный JS.',
    'Разработка идет в ООП стиле с использованием одного из принципов солид.',
    'Учусь писать приложение с нуля.'
  ], 
  {
    styles: css({
      'padding': '1rem;'
    })
  }),
  new ImgBlock(img, {}), 
];