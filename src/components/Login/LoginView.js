import React from 'react';
import './Login.scss';

function LoginView(props) {
  const { onLoginChange, onPasswordChange, login, password, handleClick } = props;

  return (
    <section className="login-page">
      <h1>Login</h1>

      <div className="login-form  login-page__form">
        <label className="login-form__label">
          <input type="text" onChange={onLoginChange} name="login" value={login} placeholder="Please enter a login" />
        </label>
        <label className="login-form__label">
          <input type="password" onChange={onPasswordChange} name="password" value={password} placeholder="Please enter a password" />
        </label>
        <button className="login-form__btn-submit" onClick={handleClick}>Submit</button>
      </div>
    </section>
  )
};

export default LoginView;