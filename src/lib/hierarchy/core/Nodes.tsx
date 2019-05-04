import React from 'react';
import { HierarchyNode, HierarchyPointNode } from 'd3-hierarchy';
import Node from './Node';

interface IProps {
  nodes: HierarchyNode<any>[];
}

const Nodes: React.FC<IProps> = ({ nodes }) => (
  <g>
    {nodes.map((node, i) => (
      <Node key={i} node={node as HierarchyPointNode<any>} />
    ))}
  </g>
);

export default Nodes;
