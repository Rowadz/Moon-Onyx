import '../src/styles/index.scss';
import * as jquery from 'jquery';
(window as any).$ = (window as any).jQuery = jquery;

import 'bootstrap';
import 'particles.js';
import neuralNetwork from './json/particles/neural-network.json';
import './typescript/options.behavior';

declare const particlesJS: any;

particlesJS('particles-js', neuralNetwork);

requestAnimationFrame(() => {});
