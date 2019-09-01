import '../src/styles/index.scss';
import * as jquery from 'jquery';
import 'bootstrap';
import 'particles.js';
import neuralNetwork from './json/particles/neural-network.json';

declare const particlesJS: any;

(window as any).$ = (window as any).jQuery = jquery;

particlesJS('particles-js', neuralNetwork);

requestAnimationFrame(() => {});
