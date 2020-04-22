import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Landing.css';
import {
  Container ,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import axios from 'axios';
import Validation from '../../components/Validation/Validation';
import * as actions from '../../store/action/index';


class Landing extends Component {
    state = {
      email: '',
      password: '',
      loginError: false,
      loginSuccess: false,
      isLogin: false,
      userDetails: null
    }

    inputChangeHandler = (event, inputElement) => {
      const inputDetails = {
        ...this.state,
        [inputElement]: event.target.value
      }
      this.setState(inputDetails);
    }

    navigateToSignup = (event) => {
      this.props.history.push('/signup');
    }

    submitLoginHandler = (event) => {
      event.preventDefault();
      let url = `http://localhost:9000/api/users/user/${this.state.email}`;
      axios.get(url)
        .then(response => {
          if(!response.data) {
            this.setSignUp();
          } else {
            if(this.state.password === response.data.password) {
              this.props.userDetails(response.data);
              this.props.history.push('/home', {userDetails: response.data})
            } else {
              let details = {
                ...this.state,
                isLogin: true,
                userDetails: response.data
              }
              this.setState(details);
            }
          }
        }).catch(err => {
          console.log(err);
        });
    }

    setSignUp = () => {
      this.props.history.push('/signup');
    }

    render() {
      return (
        <Container>
          <Row>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <h2>
                Log In
              </h2>
            </Col>
          </Row>
          <Row className={classes.Landing}>
          <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.inputChangeHandler(event, 'email')} value={this.state.email}/>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
  
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(event) => this.inputChangeHandler(event, 'password')} value={this.state.password}/>
                </Form.Group>
                { this.state.isLogin  ? <Validation/> : null}
                <Button variant="success" type="submit" onClick={(event) => this.submitLoginHandler(event)}>Login</Button>{' '}
                <Button variant="primary" type="submit" onClick={(event) => this.navigateToSignup(event)}>Signup</Button>{' '}
              </Form>
            </Col>
            
          </Row>
        </Container>
  
      );
    }
}

const mapDisptachToProps = dispatch => {
  return {
    userDetails: (user) => dispatch(actions.getUserDetails(user))
  }
  
}

export default connect(null, mapDisptachToProps)(Landing);