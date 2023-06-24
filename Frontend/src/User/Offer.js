import React, { useState } from 'react';
import { SearchBar } from './SearchbarOffer';
import { Slider, Form, Col, DatePicker, Row, Space, Input, Button } from 'antd';

export const Offer = () => {
    const [inputValue, setInputValue] = useState(1);
    
  const onChange = (newValue) => {
    setInputValue(newValue);
    console.log(inputValue)
  };
  return (
  <>
  <Col offset={6} span={15}>
  <Space size='large' direction='vertical'>
  <h2 style={{marginLeft: 300}}>Offer submition</h2>
  <p></p>
  <Form labelCol={{ span: 12 }}
        layout="horizontal"
        >
  <Space size='large' direction='vertical'>
    
    <Form.Item label="Products searchBar" valuePropName="ProductsSearchBar" >
      <SearchBar />
    </Form.Item>
    
    <Form.Item label="Offer's product price" valuePropName="price">
        <Slider
          min={0.0}
          max={10.0}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.01}
          style={{ width: '300%' }}
        />
    </Form.Item>

    <Form.Item label="Supermarket name" valuePropName="supermarket">
      <Input placeholder="Supermarket name..." style={{ width: '300%' }}/>
    </Form.Item>
    
    <Form.Item label="Date of offer" valuePropName="datePicker">
      <DatePicker onChange={null} />
    </Form.Item>

    <Form.Item style={{marginLeft: 265}}>
      <Button type='primary' onClick={()=>{   }}>
        Submit File
      </Button>
    </Form.Item>
  </Space>
  </Form>
  </Space>
  </Col>
  </>
  );
};
