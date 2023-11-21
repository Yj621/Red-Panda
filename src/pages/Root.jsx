import React from "react";
import { useOutlet } from "react-router-dom";
import Home from "./Home";
import Header from "../components/header/Header";

function Root() {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      {outlet || <Home />}
    </>
  );
}

export default Root;
