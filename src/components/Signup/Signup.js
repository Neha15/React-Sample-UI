import React, { Component } from 'react'; 
import classes from './Signup.css';
import {
  Container ,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';
import axios from 'axios';

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: ''
  }

  inputHandler = (event, inputElement) => {
    let inputDetails = {
      ...this.state,
      [inputElement]: event.target.value
    }
    this.setState(inputDetails);
  }


  submitSignup = (event) => {
    event.preventDefault();
    let data = this.state;
    axios.post('http://localhost:9000/api/users', data)
      .then(response => {
        console.log(response.data)
        this.props.history.push('/home', {userDetails: this.state});
      }).catch(err => {
        throw new Error(err);
      })
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <h2>
                Sign Up
              </h2>
            </Col>
          </Row>
          <Row className={classes.SignUp}>
          <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <Form>
                <Form.Group controlId="signupBasicFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => this.inputHandler(event, 'firstName')} value={this.state.firstName}/>
                </Form.Group>
                <Form.Group controlId="signupBasiclastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(event) => this.inputHandler(event, 'lastName')} value={this.state.lastName}/>
                </Form.Group>
                <Form.Group controlId="signupBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={(event) => this.inputHandler(event, 'email')} value={this.state.email}/>
                </Form.Group>
    
                <Form.Group controlId="signupBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={(event) => this.inputHandler(event, 'password')} value={this.state.password}/>
                </Form.Group>

                <Form.Group controlId="signupBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="input" placeholder="Address" onChange={(event) => this.inputHandler(event, 'address')} value={this.state.address}/>
                </Form.Group>
                <Button variant="success" type="submit" onClick={(event) => this.submitSignup(event)}>Submit</Button>
              </Form>
            </Col>
            
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Signup