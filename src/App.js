
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
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>

        <Route path='/' element={<Homepage></Homepage>} />
        <Route path='/home' element={<Homepage></Homepage>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/inventory/:inventoryId' element={<ManageStock></ManageStock>} />
        <Route path='/manage-items' element={<ManageInventories></ManageInventories>} />
        <Route path='/add-item' element={<AddItem></AddItem>} />
        <Route path='/my-item' element={<MyItem></MyItem>} />
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
