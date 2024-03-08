import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Row and Col
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import swal from 'sweetalert';



const config = require('../config.json')

//RFC
function Login() {
  //1. State/Hook Varible
  const [identifier,setIdentifier] = useState('');
  const [password,setPassword] = useState('');
  //2.Functions
  let login =()=>{
    console.log('okkkkkkkkkkk');
    console.log(identifier);
    console.log(password);

    
    axios
      .post(`${config.dev_url}/api/auth/local`, {
        identifier:identifier ,
        password: password,
      })
      .then(response => {
        console.log('well done!');
       
          localStorage.setItem('token',response.data.jwt);
          localStorage.setItem('userinfo',JSON.stringify(response.data.user));
          swal("well done!", JSON.stringify(response.data.user), "success");
          console.log('User profile', response.data.user);
          console.log('User token', response.data.jwt);
        
       
       
      })
      .catch(error => {
        console.log('An error occurred:', error.response);
        swal("opps something Wrong!", JSON.stringify(error.response), "error");
        
      });



  }

  //3. Return statement JSX


  return (
    <Container>
       
      <Row className="justify-content-md-center">
        <Col xs={6}>
        <h1> Strapi Login System</h1>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="identifier" value={identifier} onChange={(e)=>{setIdentifier(e.target.value)}} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="button" onClick={()=>{login()}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
