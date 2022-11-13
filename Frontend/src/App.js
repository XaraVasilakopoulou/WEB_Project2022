import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {UserNavBar} from './User/navBar'
import {SignUp} from './SignUp-SignIn/SignUp.js'
import { SignIn } from './SignUp-SignIn/SignIn';
import { NotFound } from './404/Code404';
import { Profile } from './User/Profile';
import { Layout } from 'antd';
import { Map } from './User/Map';
import { useState } from 'react';
import './index.css'

const { Header, Content } = Layout;

function App() {
  const [loggedIn , setLoggedIn ] = useState(false)
  const [auth, setAuth]= useState(false);

  return (
    <>
      <BrowserRouter>
      <Header>
        <UserNavBar auth={auth} logOut = {()=>{setLoggedIn(false); setAuth(false);}}/>
      </Header>
      <Content style={{ padding: '10px 120px' }}>
      <div className="site-layout-content">
      {(auth)?
      <Routes>
        {loggedIn ?<><Navigate to="/" /> {setLoggedIn(false)}</> : 
        <>
        <Route path='/' element={<Map/>}/>
        <Route path='/search-interest-points' element={<></>}/>
        <Route path='/register-visit' element={<></>}/>
        <Route path='/case-report' element={<></>}/>
        <Route path='/contact-case' element={<></>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<NotFound/>}/>
        </>}
      </Routes>
      :
      <Routes>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn onLog={(val)=>{setLoggedIn(val); setAuth(val); console.log('hi',val)}}/>}/>
        <Route path='/*' element={<SignIn onLog={(val)=>{setLoggedIn(val); setAuth(val);}}/>}/>
      </Routes>
      } 
      </div>
      </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
