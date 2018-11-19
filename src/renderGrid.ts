import { BaseType, Selection } from 'd3';
import { renderDivision } from './renderDivision';

type divisionDataset = string[];
type dataRow = divisionDataset[];

const width = 1000;
const height = 1000;

export function renderGrid(
  parent: Selection<BaseType, any, any, any>,
  data: dataRow[]
) {
  const rows = data.length;
  const columns = data[0].length;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  data.forEach((row, rowIndex) => {
    row.forEach((divisionData, columnIndex) => {
      const divisionGroup = parent.append('g');
      divisionGroup.attr(
        'transform',
        `translate(${cellWidth * columnIndex},${cellHeight * rowIndex})`
      );
      renderDivision(divisionGroup, divisionData);
    });
  });
}
