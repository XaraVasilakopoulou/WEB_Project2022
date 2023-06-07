import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Upload,
  Divider,
  message
} from 'antd';
export const ShopsMod = () => {
   
  const [radioButton,setRadioButton] = useState('Upload')
  const [fileShops, setFileShops] = useState({some: 'hi'})
  const [shopID, setShopId] = useState(null)
  const [shopName, setShopName] = useState(null)
  const [shopCoorX, setShopCoorX] = useState(null)
  const [shopCoorY, setShopCoorY] = useState(null)
  

  const Submit = (radioButton) => {
    
    const Shop = {
      shopID: shopID, 
      shopName: shopName,
      shopCoorX: shopCoorX,
      shopCoorY: shopCoorY,
      radioButton: radioButton
    }
      fetch("http://localhost:9000/adminShopsMod",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Shop)
        }).then((response) => response.json(response))
        .then((data) => {
          message.success("Successful Update of shops")}
        )
        .catch((error) => {
          console.error('Error:', error);
        });
      
      
  }
 
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Action">
          <Radio.Group defaultValue='Upload' onChange={(e)=>{setRadioButton(e.target.value); console.log(e.target.value)}}>
            <Radio value="Upload"> Upload New</Radio>
            <Radio value="Update"> Update </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Shop Id">
          <Input onChange={(e)=>{setShopId(e.target.value)}} />
        </Form.Item>
        <Form.Item label="Shop Name">
          <Input onChange={(e)=>{setShopName(e.target.value)}}/>
        </Form.Item>
        <Form.Item label="Shop Coordinates X">
          <Input onChange={(e)=>{setShopCoorX(e.target.value)}}/>
        </Form.Item>
        <Form.Item label="Shop Coordinates Y">
          <Input onChange={(e)=>{setShopCoorY(e.target.value)}}/>
        </Form.Item>
        <Form.Item style={{marginLeft: 265}}>
            <Button type='primary' onClick={()=>{Submit(radioButton)}}>Submit</Button>
        </Form.Item>
        <Form.Item>
          <Divider orientation="center" style={{margin:'20px 150px'}}>Upload Shops</Divider>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload  
            accept=".geojson"
            listType='picture-card'
            beforeUpload={file => {
              const reader = new FileReader();

              reader.onload = e => {
                  setFileShops(JSON.parse(e.target.result))
                  console.log(fileShops[1])                  
              };
              reader.readAsText(file);

              // Prevent upload
              return false;
          }}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item style={{marginLeft: 265}}>
            <Button type='primary' onClick={()=>{
              
              const fileShop = {
                shopID: 'gggg',
                shopName: 'hugui',
                shopCoorX: '40',
                shopCoorY: '55',
                file: fileShops,
                delete: false
              }
              fetch("http://localhost:9000/adminShops",{
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fileShop)
                }).then((response) => response.json(response))
                .then((data) => {
                  message.success("Successful Upload of shops")}
                )
                .catch((error) => {
                  console.error('Error:', error);
                });
                }}>
                Submit File
            </Button>
        </Form.Item>
        <Form.Item style={{marginLeft: 1050}}>
          <Button type="danger"
          onClick={()=>{
            const fileShop = {
              file: fileShops,
              delete: true
            }
            console.log(fileShop)
            fetch("http://localhost:9000/adminShops",{
              method: "POST",
              headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(fileShop)
              }).then((response) => response.json(response))
              .then((data) => {
                message.success("Successful delete of all the shops ")}
              )
              .catch((error) => {
                console.error('Error:', error);
              });
              }}
          >
            Delete all shops</Button>
        </Form.Item>
      </Form>
    </>
  );
};
