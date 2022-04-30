import ReactDOM from "react-dom";
import React from "react";
import "./style.css";
import Haader from "./components/Haader";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="todoapp">
      <div>
        <Haader />
        <Main />
        <Footer />
      </div>
    </section>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
