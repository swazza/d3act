import React from 'react';
import { select } from 'd3-selection';
import { HierarchyPointNode, HierarchyNode } from 'd3-hierarchy';
import HierachicalFilter from './HierarchialFilter';

interface IProps {
  node: HierarchyPointNode<any>;
  filter: HierachicalFilter;
}

function haveDescendantsMetFilterCritirea(
  node: HierarchyPointNode<any>,
  filter: HierachicalFilter
) {
  const filteredDescendants = node
    .descendants()
    .filter(descendant => filter(descendant.data));
  return filteredDescendants.length > 0;
}

class Node extends React.Component<IProps> {
  private ref: React.RefObject<SVGCircleElement>;
  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef<SVGCircleElement>();
  }

  componentDidMount() {
    const circle = select(this.ref.current);
    circle
      .data([this.props.node])
      .attr('cx', d => d.x)
      .attr('cy', d => d.y);
  }

  render() {
    const { node, filter } = this.props;
    const hasNodeMetFilterCriteria = filter(node.data);
    const shouldNodeBeDisplayed =
      hasNodeMetFilterCriteria ||
      haveDescendantsMetFilterCritirea(node, filter);

    return (
      <circle
        ref={this.ref}
        fill={`rgba(0, 0, 0, ${shouldNodeBeDisplayed ? 1 : 0.1})`}
        r={5}
        onMouseOver={() => console.log(node.children, node.descendants())}
      />
    );
  }
}

export default Node;
