import React from 'react';
import { select } from 'd3-selection';
import { verticalLinkGenerator } from './generators';
import { HierarchyPointLink } from 'd3-hierarchy';

interface IProps {
  link: HierarchyPointLink<any>;
}

class Link extends React.Component<IProps> {
  private ref: React.RefObject<SVGPathElement>;
  constructor(props: IProps) {
    super(props);
    this.ref = React.createRef<SVGPathElement>();
  }

  componentDidMount() {
    const path = select(this.ref.current);
    path.data([this.props.link]).attr('d', d => verticalLinkGenerator(d));
  }

  render() {
    return <path ref={this.ref} stroke={'black'} fill={'none'} />;
  }
}

export default Link;
