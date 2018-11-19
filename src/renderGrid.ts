import { BaseType, Selection } from 'd3';
import { renderDivision } from './renderDivision';

type divisionDataset = string[];
type dataRow = divisionDataset[];

const width = 1000;
const height = 1000;

const blockSize = 24;
const blockPadding = 5;

type Datum = {
  fill: string;
  offsetX: number;
  offsetY: number;
  x: number;
  y: number;
};

export function renderGrid(
  parent: Selection<BaseType, any, any, any>,
  data: dataRow[]
) {
  const rows = data.length;
  const columns = data[0].length;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  const newDataset: Datum[] = [];
  data.forEach((row, rowIndex) => {
    row.forEach((divisionData, columnIndex) => {
      const columns = Math.ceil(Math.sqrt(divisionData.length));

      divisionData.forEach((d, groupIndex) => {
        newDataset.push({
          fill: d,
          offsetX: cellWidth * columnIndex,
          offsetY: cellHeight * rowIndex,
          x: (groupIndex % columns) * (blockSize + blockPadding),
          y: Math.floor(groupIndex / columns) * (blockSize + blockPadding)
        });
      });
    });
  });

  const blocksSelection = parent
    .selectAll('rect.divisionBlock')
    .data(newDataset);

  blocksSelection
    .enter()
    .append('rect')
    .attr('class', 'divisionBlock')
    .attr('x', d => d.x + d.offsetX)
    .attr('y', d => d.y + d.offsetY)
    .attr('width', blockSize)
    .attr('height', blockSize)
    .attr('fill', d => d.fill);
}
