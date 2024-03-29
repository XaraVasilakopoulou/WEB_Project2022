import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {UserNavBar} from './User/navBar'
import {SignUp} from './SignUp-SignIn/SignUp.js'
import { SignIn } from './SignUp-SignIn/SignIn';
import { NotFound } from './404/Code404';
import { Profile } from './User/Profile';
import { Layout } from 'antd';
import { Map } from './User/Map';
import { useState } from 'react';
import {ShopsMod} from './Admin/ShopsMod'
import { ProductMod } from './Admin/ProductMod';
import { Leaderboard } from './Admin/Leaderboard';
import {Statistics} from './Admin/Statistics'
import { Offer } from './User/Offer'; 
import './index.css'

const { Header, Content } = Layout;

function App() {
  const [loggedIn , setLoggedIn ] = useState(false)
  const [auth, setAuth]= useState(false);
  const [isUser, setIsUser]= useState(false);
  const [email, setEmail]= useState(null);

  return (
    <>
      <BrowserRouter>
      <Header>
        <UserNavBar user={isUser} auth={auth} logOut = {()=>{setLoggedIn(false); setAuth(false);}}/>
      </Header>
      <Content style={{ padding: '10px 120px' }}>
      <div className="site-layout-content">
      {(auth)?
      <Routes>
        {isUser?
          <>
            {loggedIn ?<><Navigate to="/" /> {setLoggedIn(false)}</> : 
            <>
              <Route path='/' element={<Map user={isUser}/>}/>
              <Route path='/submit-offer' element={<Offer/>}/>
              <Route path='/profile' element={<Profile email ={email}/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </>}
          </>:
          <>
            {loggedIn ?<><Navigate to="/" /> {setLoggedIn(false)}</> : 
            <>
              <Route path='/' element={<ProductMod/>}/>
              <Route path='/shops-modification' element={<ShopsMod/>}/>
              <Route path='/statistics' element={<Statistics/>}/>
              <Route path='/leaderboard' element={<Leaderboard/>}/>
              <Route path='/map' element={<Map user={isUser}/>}/>
              <Route path='/*' element={<NotFound/>}/>
            </>}

          </>}
        
      </Routes>
      :
      <Routes>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn onLog={(val,isUser,email)=>{setLoggedIn(val); setAuth(val); setIsUser(isUser); setEmail(email) }}/>}/>
        <Route path='/*' element={<SignIn onLog={(val,isUser,email)=>{setLoggedIn(val); setAuth(val); setIsUser(isUser); setEmail(email)}}/>}/>
      </Routes>
      } 
      </div>
      </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
