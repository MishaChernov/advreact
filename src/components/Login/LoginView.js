import React from 'react';
import './login-form.scss';

function LoginView(props) {
  const { onLoginChange, onPasswordChange, login, password, handleClick, error } = props;

  return (
    <section className="login-page">
      <h1>Login</h1>
      
      <div className="login-form  login-page__form">
        <input className="form-input__item" type="text" onChange={onLoginChange} name="login" value={login} placeholder="Please enter a login" />
        <input className="form-input__item" type="password" onChange={onPasswordChange} name="password" value={password} placeholder="Please enter a password" />
        <button className="form-input__btn-submit" onClick={handleClick}>Login</button>
      </div>
    </section>
  )
};

export default LoginView;