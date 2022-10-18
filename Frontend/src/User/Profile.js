import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Space, Col } from 'antd';




export const Profile = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
    <Col offset={6} span={20}>
      <Space size='large' direction="vertical">
        <h2>Change Profile Data</h2>
          <Form  name="nest-messages" onFinish={onFinish} >
          <Form.Item rules={[{ required: true }]}>
              <Input placeholder='Username'/>
          </Form.Item>
          <Form.Item rules={[{ type: 'email' }]}>
              <Input placeholder='Email'/>
          </Form.Item>
          <Form.Item >
              <Button type="primary" htmlType="submit">
              Submit
              </Button>
          </Form.Item>
          </Form>
        </Space>
    </Col>
    </>
  );
};