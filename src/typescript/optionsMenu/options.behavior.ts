import * as screesnfull from 'screenfull';
import { createCardWithInpt } from './input.logic';
import * as html2canvas from 'html2canvas';

$('#go-full-screen').on('click', () => {
  if ((screesnfull as any).enabled) {
    (screesnfull as any).toggle();
  }
});

(screesnfull as any).onchange(() => {
  if ((screesnfull as any).isFullscreen) {
    $('#options').hide();
  } else {
    $('#options').show();
  }
});

$('#add-new-input').on('click', () => {
  createCardWithInpt();
});

$('#record-screen').on('click', () => {
  ($('#image-modal') as any).modal();
  $('#image-modal').on('hidden.bs.modal', e => {
    $('#options').show();
  });
  $('#options').hide();
  html2canvas(document.querySelector('body'), { width: 200, height: 200 }).then(
    (canvas: HTMLCanvasElement) => {
      $('#particles-js').remove();
      // $('#modal-body').html(canvas);
      document.body.appendChild(canvas);
    }
  );
});
