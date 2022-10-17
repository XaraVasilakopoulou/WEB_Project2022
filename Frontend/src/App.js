import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {UserNavBar} from './User/navBar'
import {SignUp} from './SignUp-SignIn/SignUp.js'
import { SignIn } from './SignUp-SignIn/SignIn';
import { NotFound } from './404/Code404';
//import { Map } from './User/Map';
import $ from 'jquery';
import { useState } from 'react';


function App() {
  const [loggedIn , setLoggedIn ] = useState(false)
  const [auth, setAuth]= useState(false);
  $.ajax({
    url: "http://localhost:9000/user",
    type: 'GET',
    dataType: 'jsonp', // added data type
    success: function(res) {
        console.log(res);
        alert(res);
    }
});
  return (
    <>
      <BrowserRouter>
      <UserNavBar auth={auth}/>
      {(auth)?
      <Routes>
        {loggedIn ?<><Navigate to="/" /> {setLoggedIn(false)}</> : 
        <>
        <Route path='/' element={<></>}/>
        <Route path='/search-interest-points' element={<></>}/>
        <Route path='/register-visit' element={<></>}/>
        <Route path='/case-report' element={<></>}/>
        <Route path='/contact-case' element={<></>}/>
        <Route path='/profile' element={<></>}/>
        <Route path='/*' element={<NotFound/>}/>
        </>}
      </Routes>
      :
      <Routes>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn onLog={(val)=>{setLoggedIn(val); setAuth(val); console.log('hi',val)}}/>}/>
        <Route path='/*' element={<SignIn onLog={(val)=>{setLoggedIn(val); setAuth(val); console.log('hi',val)}}/>}/>
      </Routes>
      }
      </BrowserRouter>
    </>
  );
}

export default App;
