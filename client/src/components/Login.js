import { Link, useHistory } from "react-router-dom"
import {Form, Button, Col} from 'react-bootstrap'
import { useState } from 'react'

function Login({setCurrentUser, setUserProjects}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formData),
    };

  
    fetch("/login", configObj)
    .then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          setCurrentUser(user)
          console.log(user.projects)
          setUserProjects(user?.projects)
        })
        history.push("/home"); 
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };


    return (
      <div className="text-center d-flex flex-column align-items-center">

        <h1 className="title my-5">Welcome to KanbanD!</h1>
        <br/>

        <Col sm={8}>
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control placeholder="Username" type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control placeholder="Password" type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control placeholder="Email" type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)}/>
            </Form.Group>

            <br></br>

            <Button variant="primary" type="submit">
              Submit
            </Button>

          </Form>
          <br></br>
        </Col>
        <Link exact to="/signup">Don't have an account? Create one here</Link>

      </div>
    );
}

export default Login;