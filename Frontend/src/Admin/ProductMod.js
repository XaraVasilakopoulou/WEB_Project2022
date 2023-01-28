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

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Upload Product File" valuePropName="fileList">
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
