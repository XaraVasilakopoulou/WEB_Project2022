import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserNavBar} from './User/navBar'
import {SignUp} from './SignUp-SignIn/SignUp.js'
import { SignIn } from './SignUp-SignIn/SignIn';
import { NotFound } from './404/Code404';

const auth= true;

function App() {
  return (
    <>
 
      <BrowserRouter>
      <UserNavBar auth={auth}/>
      {(auth)?
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/search-interest-points' element={<></>}/>
        <Route path='/register-visit' element={<></>}/>
        <Route path='/case-report' element={<></>}/>
        <Route path='/contact-case' element={<></>}/>
        <Route path='/profile' element={<></>}/>
        <Route path='/*' element={<NotFound/>}/>

      </Routes>
      :
      <Routes>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      }
      </BrowserRouter>
    </>
  );
}

export default App;
