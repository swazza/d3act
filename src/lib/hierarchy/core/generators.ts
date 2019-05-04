import { linkVertical } from 'd3-shape';
import { HierarchyPointNode } from 'd3-hierarchy';

export const verticalLinkGenerator = linkVertical<
  any,
  HierarchyPointNode<any>
>()
  .x((d: HierarchyPointNode<any>) => d.x)
  .y((d: HierarchyPointNode<any>) => d.y);
