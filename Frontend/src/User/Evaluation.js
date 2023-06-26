import React, { useState } from 'react';
import { SearchBar } from './SearchbarOffer';
import { Slider, Form, Col, DatePicker, Row, Space, Button, Select, message } from 'antd';

export const Evaluation = () => {
    const [markets, setMarkets] = useState(null)
    const [marketName, setMarketName] = useState(null)
    const [product, setProducts] = useState(null);
    const [price, setPrice] = useState(null)
    const [date, setDate] = useState(null)

    if(markets === null){
    fetch("http://localhost:9000/supermarket",{
                method: "GET",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                }
                }).then((response) => response.json(response))
                .then((data) => {
                  setMarkets(data)
                }
                )
                .catch((error) => {
                  console.error('Error:', error);
                });
    }

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
    
  {markets && 
    <Form.Item label="Supermarket name" valuePropName="supermarket">
      <Select placeholder="Supermarket name.." style={{ width: '300%' }} onChange={(val)=>{setMarketName(val)}}>
        {markets.map((val)=><Select.Option key={val.name} value={val.name}/>)}
      </Select>
    </Form.Item>}

    <Form.Item label="Products searchBar" valuePropName="ProductsSearchBar" >
      <SearchBar onChange ={(val)=>{setProducts(val)}} />
    </Form.Item>
    
    <Form.Item label="Offer's product price" valuePropName="price">
        <Slider
          min={0.0}
          max={10.0}
          onChange={(val)=>{setPrice(val)}}
          step={0.01}
          style={{ width: '300%' }}
        />
    </Form.Item>
    
    <Form.Item label="Date of offer" valuePropName="datePicker">
      <DatePicker onChange={(obj,dateval)=>{setDate(dateval)}} />
    </Form.Item>

    <Form.Item style={{marginLeft: 265}}>
      <Button type='primary' onClick={()=>{ 
        const fileOffer = {
          product: product,
          supermarket: marketName,
          price: price,
          date: date
        }
        console.log(fileOffer)

        fetch("http://localhost:9000/offerSubmit",{
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(fileOffer)
          }).then((response) => response.json(response))
          .then((data) => {
            message.success("Successful Upload of offer")
            console.log(data)}
          )
          .catch((error) => {
            console.error('Error:', error);
          });
           }}>
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
