import { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Uncontroller() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const formHandler = (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    console.log("Email:", email, "Password:", password);
  };

  const formuseRef = (event) => {
    event.preventDefault();
    const userEmail = emailRef.current.value;
    const userPassword = passwordRef.current.value;
    console.log("Email:", userEmail);
    console.log("Password:", userPassword);
  };

  return (
    <>
      <h3>Uncontrolled component using querySelector</h3>
      <Card style={{ width: "300px", padding: "40px", margin: "60px" }}>
        <Form onSubmit={formHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" id="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" id="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>

      <h3>Uncontrolled component using useRef</h3>
      <Card style={{ width: "300px", padding: "40px", margin: "60px" }}>
        <Form onSubmit={formuseRef}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default Uncontroller;
