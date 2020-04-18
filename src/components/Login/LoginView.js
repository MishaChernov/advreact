import React from 'react';
import { FormInput } from '../FormControl/FormItems';
import './Login.scss';

function LoginView(props) {
  const { onLoginChange, onPasswordChange, login, password, handleClick, error } = props;

  return (
    <section className="login-page">
      <h1>Login</h1>
      
      <div className="login-form  login-page__form">
        <FormInput name="Login" error={error}>
          <input className="form-input__item" type="text" onChange={onLoginChange} name="login" value={login} placeholder="Please enter a login" />
        </FormInput>
        <FormInput name="Password" error={error}>
          <input className="form-input__item" type="password" onChange={onPasswordChange} name="password" value={password} placeholder="Please enter a password" />
        </FormInput>
        <button className="form-input__btn-submit" onClick={handleClick}>Login</button>
      </div>
    </section>
  )
};

export default LoginView;