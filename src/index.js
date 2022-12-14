import React from "react";
import ReactDOM from "react-dom";

import List from "./containers/List";
import Navbar from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="bg-dark">
        <div className="container">
          <List />
        </div>
      </main>
    <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
