import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Form, Input, Space, Col, Table, Row, message } from 'antd';


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
  const [username,setUsername] = useState();
  const [password, setPassword] = useState();
  const [isUsernameChanged,setIsUsernamneChanged] = useState(false);
  const [isPasswordChanged,setIsPasswordChanged] = useState(false);

  const onFinish = () => {

    var postData = {
      username: username, 
      password: password, 
      isUsernameChanged: isUsernameChanged, 
      isPasswordChanged: isPasswordChanged
    }

    fetch("http://localhost:9000/profile",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then((response) => response.json(response))
      .then((data) => {
        console.log(data)
        message.success("Successful Update of account")}
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <>
    <Col offset={4} span={15}>
        <h2>Change Profile Data</h2>
          <Form>
          <Form.Item >
              <Input placeholder='Username' onChange={(val)=>{ setUsername(val.target.value); setIsUsernamneChanged(true)}}/>
          </Form.Item>
          <Form.Item >
              <Input placeholder='Password' type='password' onChange={(val)=>{setPassword(val.target.value); setIsPasswordChanged(true)}}/>
          </Form.Item>
          <Form.Item >
              <Button type="primary" htmlType="submit" onClick={()=>{onFinish()}}>
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