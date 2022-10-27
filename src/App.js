import React from "react";
// import MfContainer from "./components/micro-frontends/MfContainer";
import MainTemplate from "./pages/MainTemplate";

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
  const UserComponent = <h1 data-testid="user-info-data">User Info</h1>;
  const LeftComponent = <p data-testid="left-component-data">Left Side Data</p>;
  const ContentComponent = <p data-testid="content-data">Content Data</p>;
  return (
    <>
      <MainTemplate
        UserDataSection={UserComponent}
        LeftSideContent={LeftComponent}
        ContentSideData={ContentComponent}
      />
      {/* <h1>Hello World</h1>
      <p>
        <b>Esta es una variable de entorno de prueba:</b>{" "}
        {process.env.SAMPLE_ENVIRONMENT_VARIABLE}
      </p>
      <hr />
      <MfContainer /> */}
    </>
  );
};

export default App;
