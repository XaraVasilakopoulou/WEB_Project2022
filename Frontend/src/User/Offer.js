import React, { useState } from 'react';
import { SearchBar } from './SearchbarOffer';
import { Slider } from 'antd';

export const Offer = () => {
    const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
  <>
  
    <h2>Search for product</h2>
    <SearchBar/>
    <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
  </>
  );
};
