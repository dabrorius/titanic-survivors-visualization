import { BaseType, Selection } from 'd3';

type divisionDataset = string[];
type dataRow = divisionDataset[];

const width = 1000;
const height = 1000;

const blockSize = 10;
const blockPadding = 4;

type Datum = {
  fill: string;
  offsetX: number;
  offsetY: number;
  x: number;
  y: number;
};

interface Input {
  id: string;
  column: string | number;
  row: string | number;
  color: string;
}

const unique = (d: any, i: number, a: any[]) => a.indexOf(d) === i;

export function renderGrid(
  parent: Selection<BaseType, any, any, any>,
  data: Input[]
) {
  const columnUniqueValues = data.map(d => d.column).filter(unique);
  const rowUniqueValues = data
    .map(d => d.row)
    .filter(unique)
    .sort();

  console.log('Rows', rowUniqueValues);
  console.log('Columns', columnUniqueValues);

  const columns = columnUniqueValues.length;
  const rows = rowUniqueValues.length;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  const newDataset: Datum[] = [];

  interface Dictionary {
    [Key: string]: number;
  }

  const groupIndices: Dictionary = {};

  const columnsWithinCell = 20;
  data.forEach(d => {
    const columnIndex = columnUniqueValues.indexOf(d.column);
    const rowIndex = rowUniqueValues.indexOf(d.row);
    const key = `${rowIndex}_${columnIndex}`;
    if (groupIndices.hasOwnProperty(key)) {
      groupIndices[key] += 1;
    } else {
      groupIndices[key] = 1;
    }
    const groupIndex = groupIndices[key];
    newDataset.push({
      fill: d.color,
      offsetX: cellWidth * columnIndex,
      offsetY: cellHeight * rowIndex,
      x: (groupIndex % columnsWithinCell) * (blockSize + blockPadding),
      y: Math.floor(groupIndex / columnsWithinCell) * (blockSize + blockPadding)
    });
  });

  console.log(data, newDataset);

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
