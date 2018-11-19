import { Selection, BaseType } from 'd3';

const blockSize = 14;
const blockPadding = 5;

export function renderDivision(
  parent: Selection<BaseType, any, any, any>,
  blocks: string[]
) {
  const columns = Math.ceil(Math.sqrt(blocks.length));

  const blocksSelection = parent.selectAll('rect.divisionBlock').data(blocks);

  blocksSelection
    .enter()
    .append('rect')
    .attr('class', 'divisionBlock')
    .attr('x', (_, i) => (i % columns) * (blockSize + blockPadding))
    .attr('y', (_, i) => Math.floor(i / columns) * (blockSize + blockPadding))
    .attr('width', blockSize)
    .attr('height', blockSize)
    .attr('fill', d => d);
}
