import * as screesnfull from 'screenfull';
import { createCardWithInpt } from './input.logic';
declare const screenfull: any;

$('#go-full-screen').on('click', () => {
  if ((screesnfull as any).enabled) {
    (screesnfull as any).toggle();
  }
});

$('#add-new-input').on('click', () => {
  createCardWithInpt();
});
