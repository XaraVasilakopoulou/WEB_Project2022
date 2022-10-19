import React from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Space, Col, Table, Row } from 'antd';


const col = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  
]

export const Profile = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <>
    <Col offset={4} span={15}>
        <h2>Change Profile Data</h2>
          <Form  name="nest-messages" onFinish={onFinish} >
          <Form.Item >
              <Input placeholder='Username'/>
          </Form.Item>
          <Form.Item >
              <Input placeholder='Password' type='password'/>
          </Form.Item>
          <Form.Item >
              <Button type="primary" htmlType="submit">
              Submit
              </Button>
          </Form.Item>
          </Form>
          <Form>
            <Table columns={col}/>
          </Form>
    </Col>
    </>
  );
};