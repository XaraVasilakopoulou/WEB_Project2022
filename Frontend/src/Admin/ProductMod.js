import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Button,
  Upload,
  message
} from 'antd';
export const ProductMod = () => {
    const [fileShops, setFileShops] = useState()
    const [fileOffer, setFileOffer] = useState()

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Upload Product File" valuePropName="fileList">
          <Upload  
            accept=".json"
            listType='picture-card'
            beforeUpload={file => {
              const reader = new FileReader();

              reader.onload = e => {
                  setFileShops(JSON.parse(e.target.result))
                  console.log(fileShops)                  
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
                file: fileShops.products
              }

              fetch("http://localhost:9000/adminProducts",{
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
        <Form.Item  >
            <Button type='danger' style={{marginLeft: 1400}}>
                Delete all products
            </Button>
        </Form.Item>
        <Form.Item label="Upload Offer File" valuePropName="fileList">
          <Upload  
            accept=".json"
            listType='picture-card'
            beforeUpload={file => {
              const reader = new FileReader();

              reader.onload = e => {
                  setFileOffer(JSON.parse(e.target.result))
                                    
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
              
              
                }}>
                Submit File
            </Button>
        </Form.Item>
        <Form.Item  >
            <Button type='danger' style={{marginLeft: 1400}}>
                Delete all products
            </Button>
        </Form.Item>
      </Form>
    </>
  );
};
