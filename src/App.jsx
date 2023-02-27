import { Route, Routes } from 'react-router-dom';
import './App.css';

//import Cart from './comport/Cart';

import Main from './compoment/Main';
import Deliverymain from './Delivery/Deliverymain';
import Create from './login/Create';
import Update from './login/Update';





function App() {
 
  //const handleCreate = () => {
//  }

  return (
    <div>
    
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update' element={<Update/>}></Route>
      <Route path='/deliverymain' element={<Deliverymain/>}></Route>
    
    </Routes>  
   
    </div>
  );
}

export default App;
