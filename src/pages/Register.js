import React, {Component} from 'react';
import Layout from '../Layout/AuthLayout'
import RegisterForm from "../components/Auth/RegisterForm";

export default class Login extends Component{
  render() {
    return (
      <Layout {...this.props}>
        <RegisterForm {...this.props}/>
      </Layout>
    )
  }
}
