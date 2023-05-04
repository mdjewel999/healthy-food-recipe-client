
import React from "react";
import "./Qustion.css";
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
            <Card.Title className="p-2 bg-danger rounded text-white">
              01. Tell us the differences between uncontrolled and controlled
              components. ?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              In React, forms can be implemented using either controlled
              components or uncontrolled components. The main differences
              between these two approaches are: Controlled Components: In a
              controlled component, the form data is handled by React component
              state. The state is updated in response to changes in the form's
              input elements. Thus, React has complete control over the form's
              data. To implement a controlled component, each input element must
              have a corresponding onChange event handler that updates the
              state. Uncontrolled Components: In an uncontrolled component, the
              form data is handled by the form's DOM nodes. The data is accessed
              using JavaScript and not React. In this approach, we can use the
              ref attribute to get the value of the form's input elements. This
              means that React doesn't have any control over the form's data. In
              summary, the key differences between controlled and uncontrolled
              components are: In controlled components, React manages the state
              and updates the form's input elements. In uncontrolled components,
              the form data is managed by the DOM nodes. In controlled
              components, the form's data can be validated and manipulated
              before it is submitted. In uncontrolled components, the data must
              be validated and manipulated after it is submitted. Controlled
              components can make it easier to implement complex forms, but can
              be more verbose. Uncontrolled components are usually simpler to
              implement, but can be harder to maintain.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>

     <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2 bg-danger rounded text-white">
              {" "}
              02. How to validate React props using PropTypes ?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              PropTypes is a useful library that allows you to validate the type
              and shape of the props that are passed to your React components.
              It is a built-in library in React that enables you to check the
              type of props that you pass to a component, thus helping you to
              catch potential bugs earlier. In summary, PropTypes is a useful
              tool that enables you to validate the type and shape of props
              passed to your components. By using PropTypes, you can catch
              potential errors earlier and reduce the risk of bugs in your code.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div> 

     <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2 bg-danger rounded text-white">
              03.Tell us the difference between nodejs and express js ?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              Node.js and Express.js are two popular technologies used in web
              development, but they serve different purposes. Node.js is a
              server-side platform that allows developers to build server-side
              applications using JavaScript. It provides a runtime environment
              for executing JavaScript code outside of a web browser, allowing
              developers to build scalable and high-performance web
              applications. Node.js includes a set of built-in modules that
              provide basic functionality such as file system access,
              networking, and HTTP request/response handling. Express.js is a
              web framework that runs on top of Node.js, providing a set of
              additional features for building web applications. It simplifies
              the development of web applications by providing a set of
              abstractions over the low-level HTTP APIs provided by Node.js.
              Express.js includes a range of middleware that can be used to add
              functionality such as authentication, routing, and handling of
              HTTP requests and responses. In summary, Node.js is a platform
              that allows developers to run JavaScript code on the server-side,
              while Express.js is a web framework that makes it easier to build
              web applications on top of Node.js by providing a set of
              higher-level abstractions and features.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div> 

    <div>
        <Card>
          <Card.Body>
            <Card.Title className="p-2 bg-danger rounded text-white">
              04. What is a custom hook, and why will you create a custom hook?{" "}
            </Card.Title>
            <Card.Text className="p-2">
              In React, a custom hook is a function that allows you to reuse
              stateful logic across different components. It is a way to
              abstract away complex logic from components, making them more
              readable and maintainable. A custom hook typically consists of
              pure functions that take some parameters and return data, usually
              in the form of state variables and functions to manipulate that
              state. These functions can be reused in multiple components,
              allowing for a more modular and reusable codebase. Custom hooks
              can be created for various purposes, such as managing state,
              fetching data from an API, handling form input, and more. Creating
              a custom hook allows you to extract reusable logic and makes it
              easier to share that logic across multiple components. Some
              benefits of using custom hooks include: Reusability: Custom hooks
              allow you to write reusable code that can be used in multiple
              components. Abstraction: Custom hooks abstract away complex logic,
              making components simpler and more readable. Separation of
              concerns: Custom hooks separate the logic of your application from
              the UI, making it easier to test and maintain your code. Overall,
              custom hooks are a powerful tool for creating reusable and
              maintainable code in React.
            </Card.Text>
          </Card.Body>
        </Card>
      </div> 

      <div className="qa_btn">
        <Link to="/" className="back-btn">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Qustion;
