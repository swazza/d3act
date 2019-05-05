import React from 'react';
import { HierarchyLink, HierarchyPointLink } from 'd3-hierarchy';
import Link from './Link';
import HierachicalFilter from './HierarchialFilter';

interface IProps {
  links: HierarchyLink<any>[];
  filter: HierachicalFilter;
}

const Links: React.FC<IProps> = ({ links, filter }) => (
  <g>
    {links.map((link, i) => (
      <Link key={i} link={link as HierarchyPointLink<any>} filter={filter} />
    ))}
  </g>
);

export default Links;
