import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

const App = () => {
  const [page, setPage] = useState("people");
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} page={page} />
      <div className="content">
        {page === "people" ? <People /> : <Planets />}

      </div>
    </div>
  );
};

export default App;
