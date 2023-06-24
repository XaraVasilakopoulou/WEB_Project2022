import React, { useState } from 'react';
import 'antd/dist/antd.css';
import validator from 'validator'
import { Button, Form, Input, Space, Col, Table, Row, message } from 'antd';


const col = [
  {
    title: 'Product',
    dataIndex: 'product_name',
    key: 'product_name',
  },
  {
    title: 'Type',
    dataIndex: 'action',
    key: 'action',
  },
  
]

export const Profile = (props) => {
  const [username,setUsername] = useState();
  const [password, setPassword] = useState();
  const [isUsernameChanged,setIsUsernamneChanged] = useState(false);
  const [isPasswordChanged,setIsPasswordChanged] = useState(false);
  const [tokenData, setTokenData] = useState(null)
  const [tableData, setTableData] = useState(null)


  fetch("http://localhost:9000/profileGetData",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: props.email})
  }).then((response) => response.json(response))
  .then((data) => {
    setTokenData(data)
  }
  )
  .catch((error) => {
  })

  fetch("http://localhost:9000/likes",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: props.email})
  }).then((response) => response.json(response))
  .then((data) => {
    setTableData(data)
  }
  )
  .catch((error) => {
  })

  const onFinish = () => {

    var passValues = true;

    if(!validator.isStrongPassword(password,{minLength: 8,minUppercase: 1, minNumbers: 1, minSymbols: 1})){
      message.error('Password must contain at least one uppercase letter, one number and one symbol. The minimum length must be 8 characters.')
      passValues = false;
    }
    if(passValues){
    var postData = {
      username: username, 
      password: password, 
      isUsernameChanged: isUsernameChanged, 
      isPasswordChanged: isPasswordChanged,
      email: props.email
    }

    fetch("http://localhost:9000/profileEdit",{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      }).then((response) => response.json(response))
      .then((data) => {
        message.success("Successful Update of account")}
      )
      .catch((error) => {
        message.error("Something went wrong!")
      });
    }
  };


  return (
    <>
    <Col offset={7} span={15}>
      <Space size='large' direction='vertical '>
        <Row>
          {tokenData&&
          <Space size='large'>
          <>Total score: <b>{tokenData[0].score_total}</b></>
          <>Score of month: <b>{tokenData[0].score_month}</b></>
          <>Last month's tokens: <b>{tokenData[0].token_month}</b></>
          <>Total of recieved tokens: <b>N/A</b></>
          </Space>}
        </Row>
        <h2>Change Profile Data</h2>
          <Form>
          <Form.Item >
              <Input placeholder='Username' onChange={(val)=>{ if(val!==''){setUsername(val.target.value); setIsUsernamneChanged(true)} else{setUsername(val.target.value); setIsUsernamneChanged(false)}}}/>
          </Form.Item>
          <Form.Item >
              <Input placeholder='Password' type='password' onChange={(val)=>{if(val!==''){setPassword(val.target.value); setIsPasswordChanged(true)} else{setPassword(val.target.value); setIsPasswordChanged(false)}}}/>
          </Form.Item>
          <Form.Item >
              <Button type="primary" htmlType="submit" onClick={()=>{onFinish()}}>
              Submit
              </Button>
          </Form.Item>
          </Form>
          <Form>
            {tableData&&<Table columns={col} dataSource={tableData}/>}
          </Form>
          </Space>
    </Col>
    </>
  );
};