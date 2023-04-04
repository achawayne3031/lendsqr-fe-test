import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Home } from './pages/dashboard/Home'
import { UserDetail } from './pages/dashboard/UserDetail';
import { ToastContainer } from 'react-toastify';





function App() {
  return (

    <>


    <Routes>
      <Route path='/'>
        <Route index element={<Login />} />
      </Route>

    <Route path='dashboard' element={ <Dashboard />}>
      <Route index element={<Home />} />
      <Route path='user-detail/:id' element={<UserDetail /> } /> 
    </Route>

    <Route path='*' element={<NoMatch />} />

  </Routes>



  </>
   


  );
}

export default App;
