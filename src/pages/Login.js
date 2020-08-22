import React, {Component} from 'react';
import Layout from '../Layout/AuthLayout'
import LoginForm from "../components/Auth/LoginForm";

export default class Login extends Component{
  render() {
    return (
      <Layout {...this.props}>
       <LoginForm {...this.props}/>
      </Layout>
    )
  }
}
