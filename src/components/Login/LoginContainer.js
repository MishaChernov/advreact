import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import { setLogin, setPassword, setIsError, setIsFetching } from '../../redux/reducers/signIn';
import { getIsError, getLogin, getPassword, getIsFetching } from '../../redux/selectors/signInSelectors'; 

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValue: '',
      passwordValue: ''
    }
  }

  onSubmit = () => {
    this.props.setLogin(this.state.loginValue);
    this.props.setPassword(this.state.passwordValue);
  }

  onLoginChange = (e) => {
    this.setState({
      loginValue: e.target.value
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      passwordValue: e.target.value
    })
  }

  render() {
    const { isError, isFetching } = this.props;
    const { loginValue, passwordValue } = this.state;

    return (
      <LoginView 
        onSubmit={this.onSubmit}
        onLoginChange={this.onLoginChange}
        onPasswordChange={this.onPasswordChange}
        login={loginValue}
        password={passwordValue}
        isError={isError}
        isFetching={isFetching} 
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    isFetching: getIsFetching(state),
    isError: getIsError(state)
  }
};

export default connect(mapStateToProps, { setLogin, setPassword, setIsError, setIsFetching })(LoginContainer);