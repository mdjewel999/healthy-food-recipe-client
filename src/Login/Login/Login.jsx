import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { signIn, signInWithGoogle, signInWithGithub  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long.");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccessMessage("Logged in successfully!");
        navigate(from, { replace: true });
        form.reset()
      })
      .catch((error) => {
        console.log(error);
      });
  };

 // handle Sign In With Google
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        setSuccessMessage("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  //handle Sign In With Github
  const handleSignInWithGithub = () => {
    signInWithGithub()
      .then(() => {
        setSuccessMessage("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Container className="w-25 mx-auto">
      <h2>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have Account?<Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success">{successMessage}</Form.Text>
        <Form.Text className="text-danger">{passwordError}</Form.Text>
      </Form>
      <div>
        <Button variant="info" onClick={handleSignInWithGoogle}>
          Google Sign-in
        </Button>{" "}
        <Button variant="info" onClick={handleSignInWithGithub}>GitHub Sign-in</Button>{" "}
      </div>
    </Container>
  );
};

export default Login;
