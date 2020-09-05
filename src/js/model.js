import img from '../img/js.png';
import { TitleBlock } from './classes/TitleBlock';
import { TextBlock } from './classes/TextBlock';
import { ColumnsTextBlock } from './classes/ColumnsTextBlock';
import { ImgBlock } from './classes/ImgBlock'; 

export const model = [
  new TitleBlock('Мой конструктор сайтов', {
    styles: '',
    tag: 'h1',
    className: 'display-4'
  }),
  new TextBlock('Учебный проект "Конструктор сайтов" написанный на чистом JS', {
    styles: '',
    tag: 'p',
    className: 'lead my-3'
  }),
  new ColumnsTextBlock([
    'Используется только нативный JS.',
    'Разработка идет в ООП стиле с использованием одного из принципов солид.',
    'Учусь писать приложение с нуля.'
  ], 
  {
    styles: 'padding: 1rem;'
  }),
  new ImgBlock(img, {}), 
];