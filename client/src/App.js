import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import {Routes, Navigate, BrowserRouter, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen.js'
import AdminScreen from "./screens/AdminScreen"
import ProfileScreen from './screens/ProfileScreen';
import './components/componentStyling/Room.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/profile' element={<ProfileScreen/>}/>
          <Route path='/admin' element={<AdminScreen/>}/>
      </Routes>
      </BrowserRouter>
     
      
     
    </div>
  );
}

export default App;
