import React from 'react';
import { select } from 'd3-selection';
import { HierarchyPointNode } from 'd3-hierarchy';

interface IProps {
  node: HierarchyPointNode<any>;
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
    return <circle ref={this.ref} fill={'black'} r={5} />;
  }
}

export default Node;
