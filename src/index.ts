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

declare const particlesJS: any;

particlesJS('particles-js', polygon);

requestAnimationFrame(() => {});
