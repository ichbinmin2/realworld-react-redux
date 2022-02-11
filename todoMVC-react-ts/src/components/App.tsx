import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const App = () => {
  return (
    <section className="todoapp">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </section>
  );
};

export default App;
