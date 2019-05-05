import React from 'react';
import Dendogram from '../../../lib/hierarchy/dendogram';
import { IHierarchialData } from '../../../lib/hierarchy/core';

const data = require('../data.json');
delete data.description;

const getFilter = (searchText: string) => (data: IHierarchialData) =>
  data.name.includes(searchText);

class DendogramExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchFilter: () => true
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchFilter: getFilter(e.currentTarget.value)
    });
  };

  render() {
    return (
      <>
        <input type="text" onChange={this.onChange} />
        <Dendogram
          height={1000}
          width={1000}
          data={data}
          margin={25}
          filter={this.state.searchFilter}
        />
      </>
    );
  }
}

export default DendogramExample;
