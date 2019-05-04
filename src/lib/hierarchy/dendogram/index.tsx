import React from 'react';
import { cluster, hierarchy, HierarchyLink, HierarchyNode } from 'd3-hierarchy';
import { IChartStyle } from '../../core';
import { Links, Nodes, IHierarchialData } from '../core';

interface IProps extends IChartStyle {
  height: number;
  width: number;
  data: IHierarchialData;
}

interface IState {
  links: HierarchyLink<any>[];
  nodes: HierarchyNode<any>[];
}

export default class Dendogram extends React.Component<IProps, IState> {
  private ref: React.RefObject<SVGSVGElement>;
  private g: any;

  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      links: [],
      nodes: []
    };
  }

  componentDidMount() {
    const { data, height, width, margin } = this.props;
    const clusterWidth = width - 2 * (margin as number);
    const clusterHeight = height - 2 * (margin as number);
    const rootNode = hierarchy(data);
    cluster().size([clusterWidth, clusterHeight])(rootNode);

    const links = rootNode.links();
    const nodes = rootNode.descendants();
    this.setState({ links, nodes });
  }

  render() {
    const { height, width, margin } = this.props;
    const { links, nodes } = this.state;

    return (
      <svg
        ref={this.ref}
        height={height}
        width={width}
        style={{ border: '1px solid black' }}
      >
        <g style={{ transform: `translate(${margin}px, ${margin}px)` }}>
          <Links links={links} />
          <Nodes nodes={nodes} />
        </g>
      </svg>
    );
  }
}
