// higher order component (HOC) - A component (HOC) that renders another component
// Goal to reuse code
// Render hijacking
// prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is private info, please doen't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requiredAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <p>You are Authenticated</p>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById("app")
);
