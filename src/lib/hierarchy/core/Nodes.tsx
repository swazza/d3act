import React from 'react';
import { HierarchyNode, HierarchyPointNode } from 'd3-hierarchy';
import Node from './Node';
import HierachicalFilter from './HierarchialFilter';

interface IProps {
  nodes: HierarchyNode<any>[];
  filter: HierachicalFilter;
}

const Nodes: React.FC<IProps> = ({ nodes, filter }) => (
  <g>
    {nodes.map((node, i) => (
      <Node key={i} node={node as HierarchyPointNode<any>} filter={filter} />
    ))}
  </g>
);

export default Nodes;
