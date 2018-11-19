import './style.css';
import { renderGrid } from './renderGrid';
import { select } from 'd3';

const svg = select('svg');
renderGrid(svg, [
  [['red', 'red', 'blue', 'blue'], ['red', 'red', 'blue']],
  [['red', 'red', 'blue'], ['red', 'red', 'blue']],
  [['red', 'red', 'blue'], ['red', 'red', 'blue']]
]);
