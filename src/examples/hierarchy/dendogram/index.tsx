import React from 'react';
import Dendogram from '../../../lib/hierarchy/dendogram';

const data = require('../data.json');
delete data.description;

const DendogramExample: React.FC<any> = () => (
  <Dendogram height={1000} width={1000} data={data} margin={25} />
);

export default DendogramExample;
