import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const treeData = [
  {
    value: 'parent 1',
    title: 'parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'parent 1-0',
        children: [
          {
            value: 'leaf1',
            title: <b style={{ color: '#08c' }}>leaf1</b>,
          },
          {
            value: 'leaf2',
            title: <b style={{ color: '#08c' }}>leaf2</b>,
          },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'parent 1-1',
        children: [
          {
            value: 'leaf3',
            title: <b style={{ color: '#08c' }}>leaf3</b>,
          },
        ],
      },
    ],
  },
];
export const SearchBar = () => {
  const [value, setValue] = useState();

  const onChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: '50%' }}
      value={value}
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
    />
  );
};