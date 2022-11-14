import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center">
      <div className="container">
      <h5>&copy; dni-data-app</h5>
      <h6>2021 - {new Date().getFullYear()}</h6>
      <h6>Developed by Andy Cruz</h6>
      </div>
    </footer>
  );
};

export default Footer;
