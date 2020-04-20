import React, { Component } from 'react';
import LoginValidationForm from './LoginValidationForm';
import { connect } from 'react-redux';
import { signIn } from '../../redux/reducers/auth';
import Loader from './../Loader/Loader';

class LoginContainer extends Component {

  handleSubmit = ({email, password}) => {
    this.props.signIn(email, password);
  }

  render() {
    const { loading } = this.props;

    return (
      <section className="login-page">
        <h1>Login</h1>

        <LoginValidationForm onSubmit={this.handleSubmit} />
        {loading && <Loader />} 
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, { signIn })(LoginContainer);