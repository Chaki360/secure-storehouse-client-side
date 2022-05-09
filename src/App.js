
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Homepage/Header/Header';
import Homepage from './Homepage/Homepage';
import Blogs from './Blogs/Blogs'
import About from './About/About'
import Login from './Login/Login'
import Register from './Register/Register'
import NotFound from './NotFound/NotFound'
import NewsLatter from './NewsLatter/NewsLatter'
import Footer from './Footer/Footer'
import ManageStock from './ManageStock/ManageStock';
import ManageInventories from './ManageInventories/ManageInventories';
import AddItem from './AddItem/AddItem';
import MyItem from './MyItem/MyItem';
import ResetPassword from './ResetPassWord/ResetPassword';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/home' element={<Homepage></Homepage>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/inventory/:inventoryId' element={
          <PrivateRoute><ManageStock></ManageStock></PrivateRoute>}
        />
        <Route path='/manage-items' element={
          <PrivateRoute>
            <ManageInventories></ManageInventories>
          </PrivateRoute>}
        />
        <Route path='/add-item' element={
          <PrivateRoute><AddItem></AddItem></PrivateRoute>}
        />
        <Route path='/my-item' element={
          <PrivateRoute><MyItem></MyItem>

          </PrivateRoute>
        } />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/reset-password' element={<ResetPassword></ResetPassword>} />
        <Route path='*' element={<NotFound></NotFound>} />


      </Routes>
      <NewsLatter></NewsLatter>
      <Footer></Footer>

    </div>
  );
}

export default App;
