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
  const [fileShops, setFileShops] = useState()

  const Submit = (radioButton) => {
      fetch("http://localhost:9000/adminShopsMod",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: null
        }).then((response) => response.json(response))
        .then((data) => {
          console.log(data)
          message.success("Successful Update of account")}
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
          <Radio.Group defaultValue='Upload' onChange={(e)=>{setRadioButton(e.target.value)}}>
            <Radio value="Upload"> Upload New</Radio>
            <Radio value="Update"> Update </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Shop Id">
          <Input />
        </Form.Item>
        <Form.Item label="Shop Name">
          <Input />
        </Form.Item>
        <Form.Item label="Shop Coordinates">
          <Input />
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
                  setFileShops(e.target.result)
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
              fetch("http://localhost:9000/adminShops",{
                method: "POST",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fileShops)
                }).then((response) => response.json(response))
                .then((data) => {
                  console.log(data)
                  message.success("Successful Update of account")}
                )
                .catch((error) => {
                  console.error('Error:', error);
                });
                }}>
                Submit File
            </Button>
        </Form.Item>
      </Form>
    </>
  );
};
