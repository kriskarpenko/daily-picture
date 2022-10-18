import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="calendar">Click to view calendar page</Link>
      <div />
      <Link to="2023-01-01">01 January 2023</Link>
    </div>
  );
};

export default Home;
