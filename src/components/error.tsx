import React, { useEffect } from 'react';

const ErrorPage = () => {
  useEffect(() => {
    window.alert('Error 404!');
  }, []);

  return (
    <div>
      <p>Error Page</p>
    </div>
  );
};

export default ErrorPage;