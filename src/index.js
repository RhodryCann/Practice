import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";

function App() {
    return (
      <div>
        <Home />
      </div>
    );
  }

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
//<button onClick={() => { console.log('clicked'); refreshData()}}>Refresh</button>,