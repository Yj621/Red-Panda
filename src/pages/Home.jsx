import React from "react";
import Main from "./main/Main";
import { useOutlet } from "react-router-dom";

function Home() {
  const outlet = useOutlet();
  return <>{outlet || <Main />}</>;
}

export default Home;
