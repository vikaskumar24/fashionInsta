import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';

class AdminContainer extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      email: 'admin',
      password: 'admin',
      apiResponse: ''
    };
  }

  onChangeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  onChangePassword = (e) => {
    this.setState({password: e.target.value})
  }

  onLogin = async() => {

    // const req = axios.post('http://localhost:5000/api/signin', {
    //   email: this.state.email,
    //   password: this.state.password
    // })
    // const response = await req;
    // localStorage.setItem("token", response.data.token);
    // this.setState({apiResponse: 'success'})
    // console.log(response)

    // const admin = {
    //   email : 'admin',
    //   password : 'admin'
    // }

    // const config = {
    //   headers: {
    //     "Access-Control-Allow-Origin": "https://localhost:5000",
    //     // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //   }
    // };

    // axios
    //     .post("http://localhost:5000/api/signin", admin, {config})
    //     .then((response) => {
    //         if (response) {
    //             console.log(response)
                
    //         }
            
    //     });


    try {
    console.log("Done");
      const req = axios.post('http://localhost:5000/api/signin', {
        email: this.state.email,
        password: this.state.password
      })
      const response = await req;
      localStorage.setItem("token", response.data.token);
      this.setState({apiResponse: 'success'})
      console.log(response)
    } catch (error) {
      this.setState({ apiResponse: error.response.setState})
      console.log(error.response);
    }

  }

  onSignup = () => {
    axios.post('/api/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response.data.error);
    });
  }

  redirectLoginSuccessListener = () => {
    if (this.state.apiResponse === 'success') {
      return <Redirect to={{
        pathname: "/dashboard",
        state: { referrer: 'test' }
      }}
    />
    
    }
  }

  render() {
    const errors = 
      this.state.apiResponse === 'Bad Request' ?
        'Please fill the email and password fields' :
        this.state.apiResponse === 'Unauthorized' &&
        'Email or password incorrect'

    return (
      <div>
        {this.redirectLoginSuccessListener()}
        <Container className="App" style={{paddingTop: '150px', paddingBottom: '200px'}}>
        <h2>Admin Dashboard</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Admin</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Admin"
                value={this.state.email} onChange={this.onChangeEmail} 
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                value={this.state.password} onChange={this.onChangePassword} 
              />
            </FormGroup>
          </Col>
          <Button onClick={this.onLogin}>Login</Button>
          <Link to="/dashboard">secret page</Link>
          <p>{errors}</p>
        </Form>
      </Container>
      </div>
    )

  }
}

export default AdminContainer;