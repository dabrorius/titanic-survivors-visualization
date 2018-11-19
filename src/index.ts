import './style.css';
import { renderGrid } from './renderGrid';
import { select } from 'd3';

const svg = select('svg');

const mappedDataset = [
  {
    id: 1,
    column: 'Male',
    row: 'Class 1',
    color: 'blue'
  },
  {
    id: 2,
    column: 'Female',
    row: 'Class 1',
    color: 'red'
  },
  {
    id: 3,
    column: 'Female',
    row: 'Class 3',
    color: 'blue'
  },
  {
    id: 4,
    column: 'Female',
    row: 'Class 1',
    color: 'blue'
  },
  {
    id: 5,
    column: 'Male',
    row: 'Class 2',
    color: 'blue'
  },
  {
    id: 6,
    column: 'Male',
    row: 'Class 3',
    color: 'blue'
  }
];

renderGrid(svg, mappedDataset);
