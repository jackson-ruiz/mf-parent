import React from "react";
import MfContainer from "./components/micro-frontends/MfContainer";

// const routeList = [
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/tramites",
//     element: (
//       <ErrorManagement>
//         <ProceduresPage />
//       </ErrorManagement>
//     ),
//   },
// ];

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
