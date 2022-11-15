import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Menu } from 'antd';
import './navBar.css'

export const UserNavBar = (props) => {
  return(
  <>
    <div className="logo" /> 

    {(props.auth)?
      <div className="logOut" > 
        <Button type='primary' onClick={()=>{props.logOut()}}>
          Log out
        </Button>
      </div>:
      <></>
    }
    
  <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['0']}
  > 
  {(props.auth)?(props.user)?
  <>
    <Menu.Item key={0}>
      <Link to='/'>Home</Link>
    </Menu.Item>
    <Menu.Item key={1}>
      <Link to='/search-interest-points'>Interest Points</Link>
    </Menu.Item>
    <Menu.Item key={2}>
      <Link to='/register-visit'>Register Visit</Link>
    </Menu.Item>
    <Menu.Item key={3}>
      <Link to='/case-report'>Case Report</Link>
    </Menu.Item>
    <Menu.Item key={4}>
      <Link to='/contact-case'>Contact Case</Link>
    </Menu.Item>
    <Menu.Item key={5}>
      <Link to='/profile'>Profile</Link>
    </Menu.Item>
    </>:
    <>
    </>
    :
    <>
    <Menu.Item key={0}>
      <Link to='/sign-up'>Sing up</Link>
    </Menu.Item>
    <Menu.Item key={1}>
      <Link to='/sign-in'>Sign in</Link>
    </Menu.Item>
    </>
  }
  </Menu>
    </>
);
}

