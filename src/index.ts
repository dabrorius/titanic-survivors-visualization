import './style.css';
import './data.csv';

import { renderGrid } from './renderGrid';
import { select } from 'd3';
import { loadData } from './loadData';

loadData().then(dataset => {
  console.log('DS', dataset);
  const svg = select('svg');
  const mappedDataset = dataset.map(e => {
    return {
      id: e.ticketId,
      column: e.sex,
      row: e.ticketClass,
      color: e.survived === '0' ? 'black' : 'green'
    };
  });
  renderGrid(svg, mappedDataset);
});
