import React from 'react';
import { HierarchyLink, HierarchyPointLink } from 'd3-hierarchy';
import Link from './Link';

interface IProps {
  links: HierarchyLink<any>[];
}

const Links: React.FC<IProps> = ({ links }) => (
  <g>
    {links.map((link, i) => (
      <Link key={i} link={link as HierarchyPointLink<any>} />
    ))}
  </g>
);

export default Links;
