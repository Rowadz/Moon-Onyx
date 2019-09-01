import * as screesnfull from 'screenfull';

declare const screenfull: any;

$('#go-full-screen').on('click', () => {
  if ((screesnfull as any).enabled) {
    (screesnfull as any).toggle();
  }
});

$('#add-new-input').on('click', () => {});
