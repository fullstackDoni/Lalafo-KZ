import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import {Route, Routes} from "react-router-dom";
import BusinessAccount from "./Pages/BusinessAccount/BusinessAccount";
import AnotherAccount from "./Pages/AnotherAccount/AnotherAccount";
import AddPost from "./Pages/AddPost/AddPost";
import Product from "./Pages/Product/Product";
import './scss/style.scss';
import Header from "./layout/Header/Header";


function App() {
  return (
    <div className="App">
        <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myAccount' element={<MyAccount/>}/>
          <Route path='/businessAccount' element={<BusinessAccount/>}/>
          <Route path='/anotherAccount' element={<AnotherAccount/>}/>
          <Route path='/addPost' element={<AddPost/>}/>
          <Route path='/product' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
