import React from 'react';
import RegistrationValidationForm from './RegistrationValidationForm';
import { connect } from 'react-redux';
import { signUp } from '../../redux/reducers/auth';
import Loader from '../Loader/Loader';

import './registration-form.scss';

class RegistrationContainer extends React.Component {
  
  handleSubmit = ({email, password}) => {
    this.props.signUp(email, password)
  }

  render() {
    const { loading } = this.props;

    return(
      <section className="registration-page">
        <h1>Registration</h1>

        <RegistrationValidationForm onSubmit={this.handleSubmit}/>
        {loading && <Loader />}
      </section>
    )
  }
}

export default connect(state => ({
  loading: state.auth.loading
}), {signUp})(RegistrationContainer);