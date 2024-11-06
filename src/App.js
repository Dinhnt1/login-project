import logo from './logo.svg';
import './App.css';
import { BorderInnerOutlined } from '@ant-design/icons';
import React from 'react';
import LeftContent from './components/LeftContent/LeftContent';
import  './components/LeftContent/Left.css';
import Register from './components/Registered/Registered';
import './components/Registered/Registered.css';
import LoginContent from './components/LoginContent/Login';
import  './components/LoginContent/Login.css';
function App() {
const [isLoginPage, setIsLoginPage] = React.useState(true);
const handleChangeToRegister = () => {
  setIsLoginPage(false);
};
const handleChangeToLogin = () => {
  setIsLoginPage(true);
}

  return (
    <div className="content">
      <div className="container">
        <LeftContent />
        {isLoginPage ? (
        <div className="right">
          <div className="outlined">
        <BorderInnerOutlined />
        </div>
        <LoginContent />
        <div>
        <a className='registered'>Not Registered?</a>
        <a href="#" className='create' onClick={handleChangeToRegister}> Create an account</a>
        </div>
        </div>
        ) : (
          <Register handleChangeToLogin={handleChangeToLogin}/>
        )}

        </div>
        </div>   
  );
}

export default App;
