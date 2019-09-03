import * as screesnfull from 'screenfull';
import { createCardWithInpt } from './input.logic';
import * as html2canvas from 'html2canvas';
import neuralNetwork from '../../json/particles/neural-network.json';
import neuralNetwork2 from '../../json/particles/neural-network2.json';
import neuralNetwork3 from '../../json/particles/neural-network3.json';
import edge from '../../json/particles/edge.json';
import polygon from '../../json/particles/polygon.json';
import 'particles.js';
import { globals } from './globals.conf';
import {
  mainColor,
  mainLinkedLargeWidth
} from '../../json/particles/colors.helpers';
declare const particlesJS: any;

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

$('.background-patricels').on('click', (e: JQuery.ClickEvent) => {
  switch (e.target.id) {
    case 'neuralNetwork':
      globals.bg = 'neuralNetwork';
      particlesJS('particles-js', mixColorWithConfs(neuralNetwork));
      break;
    case 'edge':
      globals.bg = 'edge';
      particlesJS('particles-js', mixColorWithConfs(edge));
      break;
    case 'polygon':
      globals.bg = 'polygon';
      particlesJS('particles-js', mixColorWithConfs(polygon));
      break;
    case 'neuralNetwork2':
      globals.bg = 'neuralNetwork2';
      particlesJS('particles-js', mixColorWithConfs(neuralNetwork2));
      break;
    case 'neuralNetwork3':
      globals.bg = 'neuralNetwork3';
      particlesJS('particles-js', mixColorWithConfs(neuralNetwork3));
      break;
    default:
      break;
  }
});

const mixColorWithConfs = (conf: any) => ({
  ...conf,
  particles: {
    ...conf.particles,
    color: { value: globals.shapesColor || conf.particles.color.value },
    shape: {
      ...conf.particles.shape,
      stroke: {
        color: globals.shapesColor || conf.particles.shape.stroke.color
      }
    },
    line_linked: {
      ...conf.particles.line_linked,
      enable: conf.particles.line_linked.enable,
      color:
        globals.bg === 'neuralNetwork3'
          ? mainLinkedLargeWidth
          : globals.shapesColor || (conf.particles.line_linked.color || '#fff')
    }
  }
});
