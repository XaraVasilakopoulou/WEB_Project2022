import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {UserNavBar} from './User/navBar'


function App() {
  return (
    <>
 
      <BrowserRouter>
      <UserNavBar/>
      <Routes>
        <Route path='/' element={<></>}/>
        <Route path='/search-interest-points' element={<></>}/>
        <Route path='/register-visit' element={<></>}/>
        <Route path='/case-report' element={<></>}/>
        <Route path='/contact-case' element={<></>}/>
        <Route path='/profile' element={<></>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
