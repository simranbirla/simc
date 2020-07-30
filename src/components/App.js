import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return <div>PAGE ONE</div>;
};

const PageTwo = () => {
  return (
    <div>
      PAGE Two{" "}
      <Link to="/">
        <button>CLICK </button>
      </Link>{" "}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/two" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
