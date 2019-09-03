import '../src/styles/index.scss';
import * as jquery from 'jquery';
import 'jqueryui';
(window as any).$ = (window as any).jQuery = jquery;
// import 'jquery-ui/themes/base/core.css';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/selectable.css';
// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/selectable';
import '../src/lib/jquery.ui.touch-punch.min.js';

import 'bootstrap';
import 'particles.js';
import polygon from './json/particles/polygon.json';
import './typescript/optionsMenu/options.behavior';
import { globals } from './typescript/optionsMenu/globals.conf';

declare const particlesJS: any;

particlesJS('particles-js', polygon);

requestAnimationFrame(() => {});
const btnColors = [
  'ash',
  'le',
  'hogan',
  'jeronimo',
  'brevil',
  'delacroix',
  'smoky',
  'umbra',
  'jinx',
  'argent',
  'lobo',
  'mock',
  'graeme',
  'darth'
];
btnColors.forEach((s: string, i: number) => {
  $('#insetColorOptions').append(`
    <div class="col-2 p-1">
    <button
      type="button"
      id="${s}"
      class="btn btn-primary color-box ${s}"
    ></button>
    </div>
    `);
});

$('#insetColorOptions').on('click', (e: JQuery.ClickEvent) => {
  if (btnColors.includes(e.target.id)) {
    globals.shapesColor = hexc($(e.target).css('background-color'));
    $(`#${globals.bg}`).click();
  }
});

const hexc = (colorval: string) => {
  const parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  delete parts[0];
  for (let i = 1; i <= 3; i++) {
    parts[i] = parseInt(parts[i]).toString(16);
    if (parts[i].length === 1) parts[i] = '0' + parts[i];
  }
  return `#${parts.join('')}`;
};
