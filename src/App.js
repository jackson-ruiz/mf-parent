import React from "react";
import MfContainer from "./components/micro-frontends/MfContainer";
MfContainer;
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>
        <b>Esta es una variable de entorno de prueba:</b>{" "}
        {process.env.SAMPLE_ENVIRONMENT_VARIABLE}
      </p>
      <hr />
      <MfContainer />
    </>
  );
};

export default App;
