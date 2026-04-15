import React from 'react';

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <h2>Page Not Found 😢</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/"  className='btn btn-primary text-white'>
        Go Back Home
      </a>
    </div>
    );
};

export default NotFound;