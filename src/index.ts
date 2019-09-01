import '../src/styles/index.scss';
import * as jquery from 'jquery';
import 'jqueryui';
(window as any).$ = (window as any).jQuery = jquery;
// import 'jquery-ui/themes/base/core.css';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/selectable.css';
// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/selectable';

import 'bootstrap';
import 'particles.js';
import neuralNetwork from './json/particles/neural-network.json';
import './typescript/optionsMenu/options.behavior';

declare const particlesJS: any;

particlesJS('particles-js', neuralNetwork);

requestAnimationFrame(() => {});
