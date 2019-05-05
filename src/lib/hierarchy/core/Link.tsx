import React from 'react';
import { select } from 'd3-selection';
import { verticalLinkGenerator } from './generators';
import { HierarchyPointLink, HierarchyPointNode } from 'd3-hierarchy';
import HierachicalFilter from './HierarchialFilter';

interface IProps {
  link: HierarchyPointLink<any>;
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
    const { link, filter } = this.props;
    // let hasLinkMetFilterCriteria = true;
    // const hasSourceMetFilterCriteria = filter(link.source.data);
    // const hasTargetMetFilterCriteria = filter(link.target.data);
    // hasLinkMetFilterCriteria =
    //   hasSourceMetFilterCriteria || hasTargetMetFilterCriteria;
    const haveTargetNodeDescendantsMetFilterCritirea = haveDescendantsMetFilterCritirea(
      link.target,
      filter
    );

    return (
      <path
        ref={this.ref}
        fill={'none'}
        stroke={`rgba(0, 0, 0, ${
          haveTargetNodeDescendantsMetFilterCritirea ? 1 : 0.1
        })`}
      />
    );
  }
}

export default Link;
