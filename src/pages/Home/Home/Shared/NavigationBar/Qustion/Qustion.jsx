import React from "react";
import './Qustion.css'
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const Qustion = () => {
  return (
    <div className="container">
      <div>
        <Card>
          <h1 className="text-center text-primary-emphasis">
            Qustion And Answer <hr />
          </h1>
          <Card.Body>
            <Card.Title className="p-2">
              01. When should you use context API?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              The React Context API is a powerful tool for managing state that
              needs to be shared across multiple components in a React
              application. When you have a large number of components that need
              access to the same data: Instead of passing props down the
              component tree, the Context API allows you to provide a
              centralized way of accessing that data. When you have deeply
              nested components: If you have a complex component tree, passing
              props down to all the components can become cumbersome. In this
              case, the Context API can simplify the process by providing a way
              to access the data without having to pass it through all the
              intermediate components. When you need to manage global state: If
              you have data that needs to be accessed by multiple components
              across your application, the Context API can be a good option for
              managing that data. When you need to provide a theme or
              configuration to your components: The Context API can be used to
              provide a way to pass down a theme or configuration to all the
              components in your application.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

      <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2">
              {" "}
              02. What is a custom hook?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              A custom hook is a JavaScript function that uses React's built-in
              hooks to provide some functionality to a React component. Custom
              hooks allow you to extract and reuse stateful logic from a
              component, making your code more modular and reusable. They are
              named with the prefix "use" to indicate that they are a hook and
              can be called from other hooks, components, or other custom hooks.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2">03.What is useRef? </Card.Title>
            <Card.Text className="p-2">
              useRef is a hook provided by React that returns a mutable ref
              object whose .current property can be set to hold any value. This
              hook is commonly used to access and modify the properties of HTML
              elements, or to keep track of values that persist across component
              re-renders, without causing a re-render when the value changes.
              The .current property of the ref can be updated directly, and any
              change to it will not trigger a re-render of the component.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2">04. What is useMemo? </Card.Title>
            <Card.Text className="p-2">
              useMemo is a hook provided by React that memoizes the result of a
              function call and caches it to avoid unnecessary re-computation.
              It takes a function and an array of dependencies as arguments, and
              returns the memoized value of the function. The function is only
              re-computed if any of the dependencies have changed. This hook can
              be used to optimize performance in situations where a function is
              called frequently, but its result doesn't change often, by
              avoiding expensive re-computations.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="qa_btn">
      <Link
        to="/"
        className="back-btn"
      >
        Back to homepage
      </Link>
      </div>
    </div>
  );
};

export default Qustion;
