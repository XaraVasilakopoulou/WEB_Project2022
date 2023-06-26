import React from 'react';
import {Link} from 'react-router-dom'
import { Button, Menu } from 'antd';
import './navBar.css'

export const UserNavBar = (props) => {
  return(
  <>

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
      <Link to='/submit-offer'>Offer Submition</Link>
    </Menu.Item>
    <Menu.Item key={2}>
      <Link to='/profile'>Profile</Link>
    </Menu.Item>
    </>:
    <>
      <Menu.Item key={0}>
        <Link to='/'>Products Μodification</Link>
      </Menu.Item>
      <Menu.Item key={1}>
        <Link to='/shops-modification'>Shops Μodification</Link>
      </Menu.Item>
      <Menu.Item key={2}>
        <Link to='/statistics'>Statistics</Link>
      </Menu.Item>
      <Menu.Item key={3}>
        <Link to='/leaderboard'>Leaderboard</Link>
      </Menu.Item>
      <Menu.Item key={4}>
        <Link to='/map'>Map</Link>
      </Menu.Item>
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

